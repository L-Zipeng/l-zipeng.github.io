#!/usr/bin/env python3
"""Prepare a photograph and print its entry for the gallery's Jekyll data file."""

import argparse
import io
import json
from pathlib import Path
import re

from PIL import Image, ImageCms, ImageOps


def fit(size, width_limit, edge_limit):
    width, height = size
    scale = min(1, width_limit / width, edge_limit / max(size))
    return max(1, round(width * scale)), max(1, round(height * scale))


def prepare_photo(source, slug, alt, output, gallery="photography"):
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
        raise ValueError("Use lowercase letters, numbers, and hyphens for the slug.")
    if not alt.strip():
        raise ValueError("Write alt text describing what is visible.")

    names = [f"{slug}-480.webp", f"{slug}-900.webp", f"{slug}.webp"]
    if any((output / name).exists() for name in names):
        raise ValueError(f"Public copies already exist for {slug}. Choose an unused slug.")

    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        profile = image.info.get("icc_profile")
        if profile:
            image = ImageCms.profileToProfile(
                image, io.BytesIO(profile), ImageCms.createProfile("sRGB"), outputMode="RGB"
            )
        else:
            image = image.convert("RGB")

    output.mkdir(parents=True, exist_ok=True)
    image.info.clear()

    def save(name, size, quality):
        copy = image.resize(size, Image.Resampling.LANCZOS, reducing_gap=3)
        copy.save(output / name, "WEBP", quality=quality, method=6, exif=b"", xmp=b"", icc_profile=b"")
        return f"/images/{gallery}/{name}"

    thumbnails = []
    for name, limit in zip(names, (480, 900)):
        size = fit(image.size, limit, 1500)
        if not thumbnails or size[0] != thumbnails[-1]["width"]:
            thumbnails.append({"path": save(name, size, 79), "width": size[0]})

    width, height = fit(image.size, 1920, 1920)
    return {
        "image": save(names[-1], (width, height), 86),
        "width": width,
        "height": height,
        "alt": alt.strip(),
        "thumbnails": thumbnails,
    }


def yaml_entry(photo):
    lines = [
        f'  - image: {photo["image"]}',
        f'    width: {photo["width"]}',
        f'    height: {photo["height"]}',
        f'    alt: {json.dumps(photo["alt"], ensure_ascii=False)}',
        "    thumbnails:",
    ]
    for thumbnail in photo["thumbnails"]:
        lines.append(f'      - {{ path: {thumbnail["path"]}, width: {thumbnail["width"]} }}')
    return "\n".join(lines)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("slug")
    parser.add_argument("--alt", required=True)
    parser.add_argument("--gallery", choices=("photography", "life"), default="photography")
    args = parser.parse_args()
    try:
        output = Path(__file__).resolve().parents[1] / "images" / args.gallery
        print(yaml_entry(prepare_photo(args.source, args.slug, args.alt, output, args.gallery)))
    except (OSError, ValueError, ImageCms.PyCMSError) as error:
        parser.exit(1, f"{error}\n")
