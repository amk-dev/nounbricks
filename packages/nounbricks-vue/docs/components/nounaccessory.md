<script setup>
import NounAccessoryWithBackground from "./../examples/NounAccessoryWithBackground.vue"
import NounAccessoryWithoutBackground from "./../examples/NounAccessoryWithoutBackground.vue"
import NounAccessoryFitBounds from "./../examples/NounAccessoryFitBounds.vue"
import NounAccessoryRenderType from "./../examples/NounAccessoryRenderType.vue"
</script>

# NounAccessory

Use this component to render a noun accessory

## NounAccessory with background

```html
<NounAccessory
  accessory="accessory-bling-anvil"
  bg-color="d5d7e1"
></NounAccessory>
```

<ClientOnly>
<NounAccessoryWithBackground />
</ClientOnly>

## NounAccessory without background

```html
<NounAccessory accessory="accessory-bling-anvil"></NounAccessory>
```

<ClientOnly>
<NounAccessoryWithoutBackground />
</ClientOnly>

## NounAccessory Fit Bounds

```html
<NounAccessory accessory="accessory-bling-anvil" fit-to-bounds></NounAccessory>
```

<ClientOnly>
<NounAccessoryFitBounds />
</ClientOnly>

## NounAccessory, Render as IMG instead of SVG

```html
<NounAccessory
  accessory="accessory-bling-anvil"
  bg-color="e1d7d5"
  render-type="img"
></NounAccessory>
```

<ClientOnly>
<NounAccessoryRenderType />
</ClientOnly>
