const gallery = document.querySelector("[data-photo-gallery]");
const viewer = document.querySelector("[data-photo-viewer]");

if (gallery && typeof viewer?.showModal === "function") {
  const photos = [...gallery.querySelectorAll("[data-photo-link]")];
  const stage = viewer.querySelector("[data-photo-stage]");
  const position = viewer.querySelector("[data-photo-position]");
  const caption = viewer.querySelector("[data-photo-caption]");
  const status = viewer.querySelector("[data-photo-status]");
  let current = 0;
  let opener;

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const link = photos[current];
    const image = new Image();
    image.alt = link.querySelector("img").alt;
    image.decoding = "async";
    image.src = link.href;
    stage.replaceChildren(image);

    const description = link.closest("figure").querySelector("figcaption");
    caption.textContent = description?.innerText.trim() || "";
    caption.hidden = !caption.textContent;
    position.textContent = `${current + 1} / ${photos.length}`;
    status.textContent = `Photo ${current + 1} of ${photos.length}. ${image.alt}`;
  }

  gallery.addEventListener("click", (event) => {
    const link = event.target.closest("[data-photo-link]");
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    showPhoto(photos.indexOf(link));
    viewer.showModal();
    document.documentElement.classList.add("photo-viewer-open");
  });

  viewer.querySelector("[data-photo-close]").addEventListener("click", () => viewer.close());
  viewer.querySelector("[data-photo-previous]")?.addEventListener("click", () => showPhoto(current - 1));
  viewer.querySelector("[data-photo-next]")?.addEventListener("click", () => showPhoto(current + 1));

  viewer.addEventListener("keydown", (event) => {
    if (photos.length < 2 || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    showPhoto(current + (event.key === "ArrowRight" ? 1 : -1));
  });

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });

  viewer.addEventListener("close", () => {
    document.documentElement.classList.remove("photo-viewer-open");
    stage.replaceChildren();
    opener?.focus();
  });
}
