---
sidebar: true
---

# Getting Started

Nounbricks is a component library built to make it easy for you to add noun assets to your Javascript projects.

::: warning
Nounbricks is currently under development and is not yet ready for production use.
:::

## Installing NounBricks

### With build tools

Install the nounbricks npm package

```sh
npm install @nounbricks/nounbricks-vue
```

Import and use the components from `@nounbricks/nounbricks-vue` 🎉

```vue
<template>
  <FullNoun
    body="bege-crt"
    head="ape"
    accessories="bird-side"
    glasses="square-black-rgb"
  ></FullNoun>
</template>

<script setup>
import { FullNoun } from "@nounbricks/nounbricks-vue";
</script>
```

### Without build tools

You can try out nounbricks components directly on the browser.

```html
<div id="app"></div>

<!-- load vue before loading nounbricks -->
<script src="https://unpkg.com/vue@3"></script>
<!-- import nounbricks from unpkg -->
<script src="https://unpkg.com/@nounbricks/nounbricks-vue"></script>
<script>
  const { FullNoun } = nounbricks;
  const { createApp } = Vue;
  const app = createApp({
    components: {
      FullNoun,
    },
    template: `<FullNoun
        body="bege-crt"
        head="bag"
        accessories="bird-side"
        glasses="square-black-rgb"
        bg-color="d5d7e1"
      ></FullNoun>`,
  });

  app.mount("#app");
</script>
```
