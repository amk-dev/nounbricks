<template>
  <Layout>
    <template #home-hero-before v-if="fm.nounbricksHero">
      <div class="nb-custom-home-hero-container">
        <FullNoun
          class="hero-noun-image"
          body="bege-crt"
          head="ape"
          accessories="bird-side"
          glasses="square-black-rgb"
          fit-to-bounds
        ></FullNoun>

        <div class="hero-texts">
          <h1 class="name">{{ fm.nounbricksHero.title }}</h1>
          <p class="tagline">{{ fm.nounbricksHero.tagline }}</p>
        </div>

        <div class="hero-actions">
          <div
            v-for="action in fm.nounbricksHero.actions"
            :key="action.link"
            class="action"
          >
            <VPButton
              tag="a"
              size="big"
              :theme="action.theme"
              :text="action.text"
              :href="action.link"
              class="nounbricks-button"
            />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import FullNoun from "./../../../src/components/FullNoun.vue";

import VPButton from "vitepress/client/theme-default/components/VPButton.vue";

import { useData } from "vitepress";

const { frontmatter: fm } = useData();

const { Layout } = DefaultTheme;
</script>

<style scoped>
.nb-custom-home-hero-container {
  margin: 0 auto;
  max-width: 1152px;
  margin-top: 24px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-noun-image {
  height: 256px;
}
.name {
  letter-spacing: -0.4px;
  font-weight: 700;
  line-height: 64px;
  font-size: 56px;
  text-align: center;
  padding-top: 12px;
}
.tagline {
  line-height: 64px;
  font-size: 56px;
  text-align: center;
}

.hero-actions {
  display: flex;
  margin-top: 12px;
}

.hero-actions .action {
  margin-left: 12px;
}

.nounbricks-button {
  border-radius: 8px !important;
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
    margin: 0;
  }
}

.tagline {
  padding-top: 8px;
  padding-bottom: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0 auto;
}

@media (min-width: 640px) {
  .tagline {
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .tagline {
    line-height: 36px;
    font-size: 24px;
    margin: 0;
  }
}
</style>
