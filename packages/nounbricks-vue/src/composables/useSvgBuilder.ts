import { buildSVG, calculateBounds } from "../utils/SvgBuilder";
import {
  accessories,
  AccessoryName,
  bodies,
  BodyName,
  glasses,
  GlassesName,
  HeadName,
  heads,
  palette,
} from "../data/ImageData";

import { computed, unref, Ref } from "vue";

type Parts = {
  filename: HeadName | GlassesName | BodyName | AccessoryName;
  data: string;
}[];

export type Traits = {
  head?: HeadName;
  glasses?: GlassesName;
  body?: BodyName;
  accessory?: AccessoryName;
};

type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type MayBeRef<T> = Ref<T> | T;

type SvgBuilderOptions = {
  fitToBounds?: boolean;
  bgColor?: string;
};

export const useSvgBuilder = (
  traits: MayBeRef<Traits>,
  options: MayBeRef<SvgBuilderOptions>
) => {
  const parts = computed(() => {
    const { head, glasses, body, accessory } = unref(traits);

    const parts: Parts = [];

    if (head) {
      const headData = getHeadByName(head);
      if (!headData) throw new Error(`Could not find trait data for ${head}`);
      parts.push(headData);
    }

    if (glasses) {
      const glassesData = getGlassByName(glasses);
      if (!glassesData)
        throw new Error(`Could not find trait data for ${glasses}`);
      parts.push(glassesData);
    }

    if (body) {
      const bodyData = getBodyByName(body);
      if (!bodyData) throw new Error(`Could not find trait data for ${body}`);
      parts.push(bodyData);
    }

    if (accessory) {
      const accessoryData = getAccessoryByName(accessory);
      if (!accessoryData)
        throw new Error(`Could not find trait data for ${accessory}`);
      parts.push(accessoryData);
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

  return { svg, svgAttributes };
};

const getHeadByName = (headName: HeadName) => {
  return heads.find((head) => head.filename === headName);
};

const getBodyByName = (bodyName: BodyName) => {
  return bodies.find((body) => body.filename === bodyName);
};

const getAccessoryByName = (accessoryName: AccessoryName) => {
  return accessories.find((accessory) => accessory.filename === accessoryName);
};

const getGlassByName = (glassName: GlassesName) => {
  return glasses.find((glass) => glass.filename === glassName);
};
