"""Export clean transparent logo (no dark/light halos) from original asset."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ORIGINAL = Path(r"d:\development\minna_stores\assets\images\icon_png.original.png")
DST = Path(r"d:\development\minna_stores\assets\images\icon_png.png")
MARK = Path(r"d:\development\minna_stores\assets\images\icon_mark.png")
PUBLIC = Path(r"d:\development\minna_stores\public\images\icon_png.png")
PUBLIC_MARK = Path(r"d:\development\minna_stores\public\images\icon_mark.png")

# Background sampled from original corners (light grey matte)
BG = np.array([246.0, 246.0, 245.0], dtype=np.float32)
DIST_BG = 34.0
DIST_FULL = 52.0
CROP_DIST = 50.0


def matte_from_original(im: Image.Image) -> tuple[Image.Image, np.ndarray]:
    arr = np.array(im.convert("RGB"), dtype=np.float32)
    h, w = arr.shape[:2]
    dist = np.sqrt(np.sum((arr - BG) ** 2, axis=2))

    alpha = np.clip((dist - DIST_BG) / (DIST_FULL - DIST_BG), 0.0, 1.0)
    alpha[dist < DIST_BG - 2] = 0.0

    # Unblend light-grey background spill from foreground colors
    a = np.maximum(alpha, 1e-4)[..., np.newaxis]
    fg = (arr - BG * (1.0 - a)) / a
    fg = np.clip(fg, 0, 255)

    rgba = np.zeros((h, w, 4), dtype=np.float32)
    rgba[:, :, :3] = fg
    rgba[:, :, 3] = alpha * 255.0

    mask = rgba[:, :, 3] >= 8
    rgba[~mask] = 0

    return Image.fromarray(rgba.astype(np.uint8), "RGBA"), dist


def crop_to_content(im: Image.Image, dist: np.ndarray) -> Image.Image:
    ys, xs = np.where(dist > CROP_DIST)
    if len(xs) == 0:
        raise ValueError("No logo content found")
    x0, x1 = int(xs.min()), int(xs.max()) + 1
    y0, y1 = int(ys.min()), int(ys.max()) + 1
    pad = max(10, int(max(x1 - x0, y1 - y0) * 0.025))
    w, h = im.size
    return im.crop(
        (max(0, x0 - pad), max(0, y0 - pad), min(w, x1 + pad), min(h, y1 + pad))
    )


def remove_dark_fringe(im: Image.Image) -> Image.Image:
    """Drop semi-opaque dark pixels that show as a box on black backgrounds."""
    arr = np.array(im, dtype=np.float32)
    rgb = arr[:, :, :3]
    a = arr[:, :, 3]
    lum = rgb.max(axis=2)
    bad = (a > 0) & (a < 220) & (lum < 95)
    arr[bad, 3] = 0
    arr[arr[:, :, 3] < 8] = 0
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def sharpen_rgba(im: Image.Image) -> Image.Image:
    r, g, b, a = im.split()
    rgb = Image.merge("RGB", (r, g, b))
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=0.8, percent=55, threshold=2))
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, a))


def validate_on_black(im: Image.Image) -> None:
    arr = np.array(im.convert("RGBA"), dtype=np.float32)
    a = arr[:, :, 3] / 255.0
    comp = arr[:, :, :3] * a[..., np.newaxis]
    # Transparent pixels must composite to near-black
    transparent = a < 0.04
    leak = transparent & (comp.max(axis=2) > 8)
    if leak.sum() > 4:
        raise RuntimeError(f"Transparent halo leak pixels: {leak.sum()}")


def crop_illustration_mark(im: Image.Image) -> Image.Image:
    """Graphic only — removes embedded dark wordmark (poor on dark footer / favicon)."""
    w, h = im.size
    cut = int(h * 0.72)
    top = im.crop((0, 0, w, cut))
    bbox = top.getbbox()
    if not bbox:
        return im
    pad = 8
    x0, y0, x1, y1 = bbox
    return top.crop(
        (
            max(0, x0 - pad),
            max(0, y0 - pad),
            min(w, x1 + pad),
            min(cut, y1 + pad),
        )
    )


def main() -> None:
    if not ORIGINAL.exists():
        raise SystemExit(f"Missing {ORIGINAL}")

    im = Image.open(ORIGINAL)
    keyed, dist = matte_from_original(im)
    keyed = remove_dark_fringe(keyed)
    cropped = crop_to_content(keyed, dist)
    cropped = remove_dark_fringe(cropped)
    cropped = sharpen_rgba(cropped)
    validate_on_black(cropped)

    mark = crop_illustration_mark(cropped)
    mark = remove_dark_fringe(mark)
    mark = sharpen_rgba(mark)
    validate_on_black(mark)

    DST.parent.mkdir(parents=True, exist_ok=True)
    cropped.save(DST, "PNG", optimize=True)
    mark.save(MARK, "PNG", optimize=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    cropped.save(PUBLIC, "PNG", optimize=True)
    mark.save(PUBLIC_MARK, "PNG", optimize=True)
    print(f"Saved full {cropped.size}, mark {mark.size}")


if __name__ == "__main__":
    main()
