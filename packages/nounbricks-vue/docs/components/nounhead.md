<script setup>
import NounHeadWithBackground from "./../examples/NounHeadWithBackground.vue"
import NounHeadWithoutBackground from "./../examples/NounHeadWithoutBackground.vue"
import NounHeadFitBounds from "./../examples/NounHeadFitBounds.vue"
import NounHeadRenderType from "./../examples/NounHeadRenderType.vue"
</script>

# NounHead

Use this component to render a noun head

## NounHead with background

```html
<NounHead head="bag" bg-color="d5d7e1"></NounHead>
```

<NounHeadWithBackground />

## NounHead without background

```html
<NounHead head="bag"></NounHead>
```

<NounHeadWithoutBackground />

## NounHead Fit Bounds

```html
<NounHead head="bag" fit-to-bounds></NounHead>
```

<NounHeadFitBounds />

## NounHead, Render as an IMG instead of SVG

```html
<NounHead head="bag" bg-color="d5d7e1" render-type="img"></NounHead>
```

<NounHeadRenderType />
