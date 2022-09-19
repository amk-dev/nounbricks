<template>
  <img v-if="renderType == 'img'" :src="svg" />
  <svg
    v-else
    :width="svgAttributes.width"
    :height="svgAttributes.height"
    :viewBox="svgAttributes.viewBox"
    xmlns="http://www.w3.org/2000/svg"
    shape-rendering="crispEdges"
    v-html="svg"
  ></svg>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onBeforeUnmount, withDefaults } from "vue";

import {
  HeadNameWithoutPrefix,
  GlassesNameWithoutPrefix,
  BodyNameWithoutPrefix,
  AccessoryNameWithoutPrefix,
  BgColor,
  HeadName,
  GlassesName,
  BodyName,
  AccessoryName,
  isHeadNamePrefixed,
  isBodyNamePrefixed,
  isGlassesNamePrefixed,
  isAccessoryNamePrefixed,
} from "../data/ImageData";

import { useSvgBuilder, Traits } from "../composables/useSvgBuilder";

const props = withDefaults(
  defineProps<{
    head?: HeadNameWithoutPrefix | HeadName;
    glasses?: GlassesNameWithoutPrefix | GlassesName;
    body?: BodyNameWithoutPrefix | BodyName;
    accessory?: AccessoryNameWithoutPrefix | AccessoryName;
    fitToBounds?: boolean;
    bgColor?: BgColor;
    renderType?: "svg" | "img";
  }>(),
  {
    head: undefined,
    body: undefined,
    glasses: undefined,
    accessory: undefined,
    bgColor: undefined,
    renderType: "svg",
  }
);

const traits: ComputedRef<Traits> = computed(() => {
  const traits: Traits = {};

  if (props.head) {
    traits["head"] = isHeadNamePrefixed(props.head)
      ? props.head
      : `head-${props.head}`;
  }

  if (props.body) {
    traits["body"] = isBodyNamePrefixed(props.body)
      ? props.body
      : `body-${props.body}`;
  }

  if (props.accessory) {
    traits["accessory"] = isAccessoryNamePrefixed(props.accessory)
      ? props.accessory
      : `accessory-${props.accessory}`;
  }

  if (props.glasses) {
    traits["glasses"] = isGlassesNamePrefixed(props.glasses)
      ? props.glasses
      : `glasses-${props.glasses}`;
  }

  return traits;
});

const svgOptions = computed(() => ({
  fitToBounds: props.fitToBounds,
  bgColor: props.bgColor,
  renderType: props.renderType,
}));

const { svg, svgAttributes } = useSvgBuilder(traits, svgOptions);

onBeforeUnmount(() => {
  if (props.renderType == "img") {
    URL.revokeObjectURL(svg.value);
  }
});
</script>
