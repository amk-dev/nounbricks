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

import { HeadNameWithoutPrefix, BgColor } from "../data/ImageData";

import { useSvgBuilder, Traits } from "../composables/useSvgBuilder";

const props = defineProps<{
  head: HeadNameWithoutPrefix;
  fitToBounds?: boolean;
  bgColor?: BgColor;
}>();

const traits: ComputedRef<Traits> = computed(() => ({
  head: `head-${props.head}`,
}));

const svgOptions = computed(() => ({
  fitToBounds: props.fitToBounds,
  bgColor: props.bgColor,
}));

const { svg, svgAttributes } = useSvgBuilder(traits, svgOptions);
</script>
