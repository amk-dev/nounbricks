<script setup>
import NounGlassesWithBackground from "./../examples/NounGlassesWithBackground.vue"
import NounGlassesWithoutBackground from "./../examples/NounGlassesWithoutBackground.vue"
import NounGlassesFitBounds from "./../examples/NounGlassesFitBounds.vue"
import NounGlassesRenderType from "./../examples/NounGlassesRenderType.vue"
</script>

# NounGlasses

Use this component to render noun glasses

## NounGlasses with background

```html
<NounGlasses glasses="glasses-grass" bg-color="d5d7e1"></NounGlasses>
```

<ClientOnly>
<NounGlassesWithBackground />
</ClientOnly>

## NounGlasses without background

```html
<NounGlasses glasses="glasses-grass"></NounGlasses>
```

<ClientOnly>
<NounGlassesWithoutBackground />
</ClientOnly>

## NounGlasses Fit Bounds

```html
<NounGlasses glasses="glasses-grass" fit-to-bounds></NounGlasses>
```

<ClientOnly>
<NounGlassesFitBounds />
</ClientOnly>

## NounGlasses, Render as IMG instead of SVG

```html
<NounGlasses
  glasses="glasses-grass"
  bg-color="d5d7e1"
  render-type="img"
></NounGlasses>
```

<ClientOnly>
<NounGlassesRenderType />
</ClientOnly>
