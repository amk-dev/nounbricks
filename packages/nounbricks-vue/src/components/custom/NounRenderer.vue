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
defineProps<{
  svg: string;
  svgAttributes: {
    width: number;
    height: number;
    viewBox: string;
  };
  renderType: "svg" | "img";
}>();
</script>
