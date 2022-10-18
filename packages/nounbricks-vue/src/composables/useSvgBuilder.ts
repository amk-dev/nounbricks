import { buildSVG, calculateBounds } from "../utils/SvgBuilder";
import { palette } from "../data/ImageData";

import { computed, unref, Ref } from "vue";

type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type MayBeRef<T> = Ref<T> | T;

type PossibleTraitType = "head" | "body" | "glasses" | "accessory";

type SvgBuilderOptions = {
  fitToBounds?: boolean;
  bgColor?: string;
  renderType?: "svg" | "img";
};

export const useSvgBuilder = <
  HeadName extends string,
  BodyName extends string,
  GlassesName extends string,
  AccessoryName extends string
>(
  traits: MayBeRef<{
    head?: HeadName;
    body?: BodyName;
    accessory?: AccessoryName;
    glasses?: GlassesName;
  }>,
  options: MayBeRef<SvgBuilderOptions>,
  traitsData: {
    filename: `${PossibleTraitType}-${string}`;
    data: string;
  }[]
) => {
  const getTraitByName = (traitName: string) =>
    traitsData.find((trait) => trait.filename === traitName);

  const parts = computed(() => {
    const { head, glasses, body, accessory } = unref(traits);

    const parts: {
      data: string;
    }[] = [];

    if (body) {
      const bodyData = getTraitByName(body);
      if (!bodyData) throw new Error(`Could not find trait data for ${body}`);
      parts.push(bodyData);
    }

    if (accessory) {
      const accessoryData = getTraitByName(accessory);
      if (!accessoryData)
        throw new Error(`Could not find trait data for ${accessory}`);
      parts.push(accessoryData);
    }

    if (head) {
      const headData = getTraitByName(head);
      if (!headData) throw new Error(`Could not find trait data for ${head}`);
      parts.push(headData);
    }

    if (glasses) {
      const glassesData = getTraitByName(glasses);
      if (!glassesData)
        throw new Error(`Could not find trait data for ${glasses}`);
      parts.push(glassesData);
    }

    return parts;
  });

  const svg = computed(() =>
    buildSVG(
      parts.value,
      palette as Writeable<typeof palette>,
      unref(options).bgColor
    )
  );

  const svgAttributes = computed(() => {
    if (unref(options).fitToBounds) {
      const { x, y, height, width } = calculateBounds(parts.value);

      return {
        width,
        height,
        viewBox: `${x} ${y} ${width} ${height}`,
      };
    } else {
      return {
        width: 320,
        height: 320,
        viewBox: "0 0 320 320",
      };
    }
  });

  const renderValue = computed(() => {
    if (unref(options).renderType == "img") {
      const blob = new Blob(
        [
          `<svg
      width="${svgAttributes.value.width}"
      height="${svgAttributes.value.height}"
      viewBox="${svgAttributes.value.viewBox}"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
      v-html="svg"
    >${svg.value}</svg>`,
        ],
        {
          type: "image/svg+xml",
        }
      );

      return URL.createObjectURL(blob);
    }

    return svg.value;
  });

  return { svg: renderValue, svgAttributes };
};
