<script setup>
import NounBodyWithBackground from "./../examples/NounBodyWithBackground.vue"
import NounBodyWithoutBackground from "./../examples/NounBodyWithoutBackground.vue"
import NounBodyFitBounds from "./../examples/NounBodyFitBounds.vue"
import NounBodyRenderType from "./../examples/NounBodyRenderType.vue"
</script>

# NounBody

Use this component to render a noun body

## NounBody with background

```html
<NounBody body="blue-sky" bg-color="d5d7e1"></NounBody>
```

<NounBodyWithBackground />

## NounBody without background

```html
<NounBody body="blue-sky"></NounBody>
```

<NounBodyWithoutBackground />

## NounBody Fit Bounds

```html
<NounBody body="blue-sky" fit-to-bounds></NounBody>
```

<NounBodyFitBounds />

## NounBody, Render as an IMG instead of SVG

```html
<NounBody body="blue-sky" bg-color="d5d7e1" render-type="img"></NounBody>
```

<NounBodyRenderType />
