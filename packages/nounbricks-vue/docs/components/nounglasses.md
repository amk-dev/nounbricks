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
<NounGlasses body="blue-sky" bg-color="d5d7e1"></NounGlasses>
```

<NounGlassesWithBackground />

## NounGlasses without background

```html
<NounGlasses body="blue-sky"></NounGlasses>
```

<NounGlassesWithoutBackground />

## NounGlasses Fit Bounds

```html
<NounGlasses body="blue-sky" fit-to-bounds></NounGlasses>
```

<NounGlassesFitBounds />

## NounGlasses, Render as IMG instead of SVG

```html
<NounGlasses glasses="grass" bg-color="d5d7e1" render-type="img"></NounGlasses>
```

<NounGlassesRenderType />
