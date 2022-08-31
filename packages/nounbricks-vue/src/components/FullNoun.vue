<template>
  <svg
    :width="svgAttributes.width"
    :height="svgAttributes.height"
    :viewBox="svgAttributes.viewBox"
    xmlns="http://www.w3.org/2000/svg"
    shape-rendering="crispEdges"
    v-html="svg"
  ></svg>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import {
  HeadNameWithoutPrefix,
  GlassesNameWithoutPrefix,
  BodyNameWithoutPrefix,
  AccessoryNameWithoutPrefix,
  BgColor,
} from "../data/ImageData";

import { useSvgBuilder, Traits } from "../composables/useSvgBuilder";

const props = defineProps<{
  head: HeadNameWithoutPrefix;
  glasses: GlassesNameWithoutPrefix;
  body: BodyNameWithoutPrefix;
  accessories: AccessoryNameWithoutPrefix;
  fitToBounds?: boolean;
  bgColor?: BgColor;
}>();

const traits: ComputedRef<Traits> = computed(() => ({
  head: `head-${props.head}`,
  glasses: `glasses-${props.glasses}`,
  body: `body-${props.body}`,
  accessory: `accessory-${props.accessories}`,
}));

const svgOptions = computed(() => ({
  fitToBounds: props.fitToBounds,
  bgColor: props.bgColor,
}));

const { svg, svgAttributes } = useSvgBuilder(traits, svgOptions);
</script>
