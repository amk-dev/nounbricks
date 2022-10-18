/* eslint-disable vue/one-component-per-file */
import { BgColor } from "./../../data/ImageData";
import { defineComponent, computed, ComputedRef, PropType, h } from "vue";
import { useSvgBuilder } from "./../../composables/useSvgBuilder";
import NounRenderer from "./NounRenderer.vue";

type PossibleTraitType = "head" | "body" | "glasses" | "accessory";

export function generateCustomNounbricksComponents<
  T extends {
    filename: `${PossibleTraitType}-${string}`;
    data: string;
  }
>(traits: T[]) {
  type GetTraitNamesWithNever<
    Traits extends { filename: string; data: string }[],
    TraitType extends "head" | "body" | "accessory" | "glasses"
  > = {
    [filename in Traits[number]["filename"]]: filename extends `${TraitType}-${infer TraitName}`
      ? `${TraitType}-${TraitName}`
      : never;
  };

  type HeadNameWithNever = GetTraitNamesWithNever<typeof traits, "head">;
  type HeadName = HeadNameWithNever[keyof HeadNameWithNever];

  type BodyNameWithNever = GetTraitNamesWithNever<typeof traits, "body">;
  type BodyName = BodyNameWithNever[keyof BodyNameWithNever];

  type GlassesNameWithNever = GetTraitNamesWithNever<typeof traits, "glasses">;
  type GlassesName = GlassesNameWithNever[keyof GlassesNameWithNever];

  type AccessoryNameWithNever = GetTraitNamesWithNever<
    typeof traits,
    "accessory"
  >;
  type AccessoryName = AccessoryNameWithNever[keyof AccessoryNameWithNever];

  type TraitsWithData = {
    head?: HeadName;
    body?: BodyName;
    glasses?: GlassesName;
    accessory?: AccessoryName;
  };

  const NounAccessory = defineComponent({
    props: {
      accessory: {
        type: String as unknown as PropType<AccessoryName>,
        required: true,
      },
      fitToBounds: Boolean,
      bgColor: {
        type: String as unknown as PropType<BgColor | undefined>,
        default: undefined,
      },
      renderType: {
        type: String as unknown as PropType<"svg" | "img">,
        default: "svg",
      },
    },
    setup(props) {
      const traitsData: ComputedRef<TraitsWithData> = computed(() => {
        return {
          accessory: props.accessory as AccessoryName,
        };
      });

      const svgOptions = computed(() => ({
        fitToBounds: props.fitToBounds,
        bgColor: props.bgColor,
        renderType: props.renderType,
      }));

      const { svg, svgAttributes } = useSvgBuilder<
        HeadName,
        BodyName,
        GlassesName,
        AccessoryName
      >(traitsData.value, svgOptions, traits);

      return () =>
        h(NounRenderer, {
          svg: svg.value,
          svgAttributes: svgAttributes.value,
          renderType: props.renderType,
        });
    },
  });

  const NounBody = defineComponent({
    props: {
      body: {
        type: String as unknown as PropType<BodyName>,
        required: true,
      },
      fitToBounds: Boolean,
      bgColor: {
        type: String as unknown as PropType<BgColor>,
        default: undefined,
      },
      renderType: {
        type: String as unknown as PropType<"svg" | "img">,
        default: "svg",
      },
    },
    setup(props) {
      const traitsData: ComputedRef<TraitsWithData> = computed(() => {
        return {
          body: props.body as BodyName,
        };
      });

      const svgOptions = computed(() => ({
        fitToBounds: props.fitToBounds,
        bgColor: props.bgColor,
        renderType: props.renderType,
      }));

      const { svg, svgAttributes } = useSvgBuilder<
        HeadName,
        BodyName,
        GlassesName,
        AccessoryName
      >(traitsData.value, svgOptions, traits);

      return () =>
        h(NounRenderer, {
          svg: svg.value,
          svgAttributes: svgAttributes.value,
          renderType: props.renderType,
        });
    },
  });

  const NounGlasses = defineComponent({
    props: {
      glasses: {
        type: String as unknown as PropType<GlassesName>,
        required: true,
      },
      fitToBounds: Boolean,
      bgColor: {
        type: String as unknown as PropType<BgColor>,
        default: undefined,
      },
      renderType: {
        type: String as unknown as PropType<"svg" | "img">,
        default: "svg",
      },
    },
    setup(props) {
      const traitsData: ComputedRef<TraitsWithData> = computed(() => {
        return {
          glasses: props.glasses as GlassesName,
        };
      });

      const svgOptions = computed(() => ({
        fitToBounds: props.fitToBounds,
        bgColor: props.bgColor,
        renderType: props.renderType,
      }));

      const { svg, svgAttributes } = useSvgBuilder<
        HeadName,
        BodyName,
        GlassesName,
        AccessoryName
      >(traitsData.value, svgOptions, traits);

      return () =>
        h(NounRenderer, {
          svg: svg.value,
          svgAttributes: svgAttributes.value,
          renderType: props.renderType,
        });
    },
  });

  const NounHead = defineComponent({
    props: {
      head: {
        type: String as unknown as PropType<HeadName>,
        required: true,
      },
      fitToBounds: Boolean,
      bgColor: {
        type: String as unknown as PropType<BgColor>,
        default: undefined,
      },
      renderType: {
        type: String as unknown as PropType<"svg" | "img">,
        default: "svg",
      },
    },
    setup(props) {
      const traitsData: ComputedRef<TraitsWithData> = computed(() => {
        return {
          head: props.head as HeadName,
        };
      });

      const svgOptions = computed(() => ({
        fitToBounds: props.fitToBounds,
        bgColor: props.bgColor,
        renderType: props.renderType,
      }));

      const { svg, svgAttributes } = useSvgBuilder<
        HeadName,
        BodyName,
        GlassesName,
        AccessoryName
      >(traitsData.value, svgOptions, traits);

      return () =>
        h(NounRenderer, {
          svg: svg.value,
          svgAttributes: svgAttributes.value,
          renderType: props.renderType,
        });
    },
  });

  const FullNoun = defineComponent({
    props: {
      head: {
        type: String as unknown as PropType<HeadName>,
        required: true,
      },
      glasses: {
        type: String as unknown as PropType<GlassesName>,
        required: true,
      },
      body: {
        type: String as unknown as PropType<BodyName>,
        required: true,
      },
      accessory: {
        type: String as unknown as PropType<AccessoryName>,
        required: true,
      },
      fitToBounds: Boolean,
      bgColor: {
        type: String as unknown as PropType<BgColor | undefined>,
        default: undefined,
      },
      renderType: {
        type: String as unknown as PropType<"svg" | "img">,
        default: "svg",
      },
    },
    setup(props) {
      const traitsData: ComputedRef<TraitsWithData> = computed(() => {
        return {
          head: props.head as HeadName,
          glasses: props.glasses as GlassesName,
          body: props.body as BodyName,
          accessory: props.accessory as AccessoryName,
        };
      });

      const svgOptions = computed(() => ({
        fitToBounds: props.fitToBounds,
        bgColor: props.bgColor,
        renderType: props.renderType,
      }));

      const { svg, svgAttributes } = useSvgBuilder<
        HeadName,
        BodyName,
        GlassesName,
        AccessoryName
      >(traitsData.value, svgOptions, traits);

      return () =>
        h(NounRenderer, {
          svg: svg.value,
          svgAttributes: svgAttributes.value,
          renderType: props.renderType,
        });
    },
  });

  return {
    NounHead,
    NounBody,
    NounGlasses,
    NounAccessory,
    FullNoun,
  };
}
