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
<NounHead head="head-bag" bg-color="d5d7e1"></NounHead>
```

<ClientOnly>
<NounHeadWithBackground />
</ClientOnly>

## NounHead without background

```html
<NounHead head="head-bag"></NounHead>
```

<ClientOnly>
<NounHeadWithoutBackground />
</ClientOnly>

## NounHead Fit Bounds

```html
<NounHead head="head-bag" fit-to-bounds></NounHead>
```

<ClientOnly>
<NounHeadFitBounds />
</ClientOnly>

## NounHead, Render as an IMG instead of SVG

```html
<NounHead head="head-bag" bg-color="d5d7e1" render-type="img"></NounHead>
```

<ClientOnly>
<NounHeadRenderType />
</ClientOnly>
