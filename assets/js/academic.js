const header = document.querySelector("[data-site-header]");
const menuButton = header?.querySelector("[data-menu-button]");

if (menuButton) {
  const navigation = document.getElementById(menuButton.getAttribute("aria-controls"));
  const mobileMenu = window.matchMedia("(max-width: 47.99rem)");

  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.toggleAttribute("data-open", open);
  }

  header.setAttribute("data-enhanced", "");

  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") === "false");
  });

  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.matches && navigation.hasAttribute("data-open")) {
      setMenu(false);
      menuButton.focus();
    }
  });

  mobileMenu.addEventListener("change", () => {
    const focusWasInNavigation = navigation.contains(document.activeElement);
    setMenu(false);
    if (mobileMenu.matches && focusWasInNavigation) menuButton.focus();
  });
}
