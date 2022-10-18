<script setup>
import FullNounWithBackground from "./../examples/FullNounWithBackground.vue"
import FullNounWithoutBackground from "./../examples/FullNounWithoutBackground.vue"
import FullNounFitBounds from "./../examples/FullNounFitBounds.vue"
import FullNounRenderType from "./../examples/FullNounRenderType.vue"
import NounBuilderWithBackground from "./../examples/NounBuilderWithBackground.vue"
import NounBuilderWithoutBackground from "./../examples/NounBuilderWithoutBackground.vue"
import NounBuilderFitBounds from "./../examples/NounBuilderFitBounds.vue"
import NounBuilderRenderType from "./../examples/NounBuilderRenderType.vue"
</script>

# NounBuilder

Use this component to render any combination of traits on one image. for eg: you can render head and glasses, or you can render body and accessory. or you can render head, glasses, body and accessory. or you can just render a head, etc. any combination will work. all the props are optional( on all other components the trait props are mandatory. ( eg: head, body, glasses, accessory are mandatory in FullNoun, head is mandatory in NounHead, body is mandatory in NounBody, glasses are mandatory in NounGlasses, and accessory is mandatory in NounAccessory ) ) .

## NounBuilder rendering a head and glass with background

```html
<NounBuilder
  head="ape"
  glasses="square-black-rgb"
  bg-color="d5d7e1"
></NounBuilder>
```

<ClientOnly>
<NounBuilderWithBackground />
</ClientOnly>

## NounBuilder rendering a body and an accessory without a background

```html
<NounBuilder
  accessory="accessory-1n"
  body="body-blue-sky"
  bg-color="d5d7e1"
></NounBuilder>
```

<ClientOnly>
<NounBuilderWithoutBackground />
</ClientOnly>

## FullNoun Fit Bounds

```html
<NounBuilder glasses="square-blue" body="body-blue-sky"></NounBuilder>
```

<ClientOnly>
<NounBuilderFitBounds />
</ClientOnly>

## NounBuilder, Render as an IMG instead of SVG

```html
<NounBuilder
  glasses="square-blue"
  body="body-blue-sky"
  fit-to-bounds
  render-type="img"
></NounBuilder>
```

<ClientOnly>
<NounBuilderRenderType />
</ClientOnly>
