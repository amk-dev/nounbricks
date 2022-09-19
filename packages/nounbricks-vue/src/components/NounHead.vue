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
import { computed, ComputedRef, withDefaults } from "vue";

import { HeadNameWithoutPrefix, BgColor } from "../data/ImageData";

import { useSvgBuilder, Traits } from "../composables/useSvgBuilder";

const props = withDefaults(
  defineProps<{
    head: HeadNameWithoutPrefix;
    fitToBounds?: boolean;
    bgColor?: BgColor;
    renderType?: "svg" | "img";
  }>(),
  {
    bgColor: undefined,
    renderType: "svg",
  }
);

const traits: ComputedRef<Traits> = computed(() => ({
  head: `head-${props.head}`,
}));

const svgOptions = computed(() => ({
  fitToBounds: props.fitToBounds,
  bgColor: props.bgColor,
  renderType: props.renderType,
}));

const { svg, svgAttributes } = useSvgBuilder(traits, svgOptions);
</script>
