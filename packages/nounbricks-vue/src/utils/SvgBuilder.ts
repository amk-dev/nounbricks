/**
 * A modified version of svg-builder from nouns-sdk to support usecases for nounbricks
 */

export interface DecodedImage {
  paletteIndex: number;
  bounds: ImageBounds;
  rects: [length: number, colorIndex: number][];
}

export interface ImageBounds {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * Decode the RLE image data into a format that's easier to consume in `buildSVG`.
 * @param image The RLE image data
 */
export const decodeImage = (image: string): DecodedImage => {
  const data = image.replace(/^0x/, "");
  const paletteIndex = parseInt(data.substring(0, 2), 16);
  const bounds = {
    top: parseInt(data.substring(2, 4), 16),
    right: parseInt(data.substring(4, 6), 16),
    bottom: parseInt(data.substring(6, 8), 16),
    left: parseInt(data.substring(8, 10), 16),
  };
  const rects = data.substring(10);

  return {
    paletteIndex,
    bounds,
    rects:
      rects
        ?.match(/.{1,4}/g)
        ?.map((rect) => [
          parseInt(rect.substring(0, 2), 16),
          parseInt(rect.substring(2, 4), 16),
        ]) ?? [],
  };
};

/**
 * @notice Given an x-coordinate, draw length, and right bound, return the draw
 * length for a single SVG rectangle.
 */
const getRectLength = (
  currentX: number,
  drawLength: number,
  rightBound: number
): number => {
  const remainingPixelsInLine = rightBound - currentX;
  return drawLength <= remainingPixelsInLine
    ? drawLength
    : remainingPixelsInLine;
};

/**
 * Given RLE parts, palette colors, and a background color, build an SVG image.
 * @param parts The RLE part datas
 * @param paletteColors The hex palette colors
 * @param bgColor The hex background color
 */
export const buildSVG = (
  parts: { data: string }[],
  paletteColors: string[],
  bgColor?: string
): string => {
  return parts.reduce(
    (result, part) => {
      const svgRects: string[] = [];
      const { bounds, rects } = decodeImage(part.data);

      let currentX = bounds.left;
      let currentY = bounds.top;

      rects.forEach((draw) => {
        let [drawLength] = draw;
        const [_, colorIndex] = draw;

        const hexColor = paletteColors[colorIndex];

        let length = getRectLength(currentX, drawLength, bounds.right);
        while (length > 0) {
          // Do not push rect if transparent
          if (colorIndex !== 0) {
            svgRects.push(
              `<rect width="${length * 10}" height="10" x="${
                currentX * 10
              }" y="${currentY * 10}" fill="#${hexColor}" />`
            );
          }

          currentX += length;
          if (currentX === bounds.right) {
            currentX = bounds.left;
            currentY++;
          }

          drawLength -= length;
          length = getRectLength(currentX, drawLength, bounds.right);
        }
      });
      result += svgRects.join("");
      return result;
    },
    bgColor ? `<rect width="100%" height="100%" fill="#${bgColor}" />` : ""
  );
};

export const calculateBounds = (parts: { data: string }[]) => {
  const tops: number[] = [];
  const rights: number[] = [];
  const bottoms: number[] = [];
  const lefts: number[] = [];

  parts.forEach((part) => {
    const { top, right, bottom, left } = decodeImage(part.data).bounds;

    tops.push(top * 10);
    rights.push(right * 10);
    bottoms.push(bottom * 10);
    lefts.push(left * 10);
  });

  return {
    x: Math.min(...lefts),
    y: Math.min(...tops),
    width: Math.max(...rights) - Math.min(...lefts),
    height: Math.max(...bottoms) - Math.min(...tops) + 10,
  };
};
