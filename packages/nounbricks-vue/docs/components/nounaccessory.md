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
<NounAccessory accessories="bling-anvil" bg-color="d5d7e1"></NounAccessory>
```

<NounAccessoryWithBackground />

## NounAccessory without background

```html
<NounAccessory accessories="bling-anvil"></NounAccessory>
```

<NounAccessoryWithoutBackground />

## NounAccessory Fit Bounds

```html
<NounAccessory accessories="bling-anvil" fit-to-bounds></NounAccessory>
```

<NounAccessoryFitBounds />

## NounAccessory, Render as IMG instead of SVG

```html
<NounAccessory
  accessories="bling-anvil"
  bg-color="e1d7d5"
  render-type="img"
></NounAccessory>
```

<NounAccessoryRenderType />
