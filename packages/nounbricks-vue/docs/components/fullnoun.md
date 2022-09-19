<script setup>
import FullNounWithBackground from "./../examples/FullNounWithBackground.vue"
import FullNounWithoutBackground from "./../examples/FullNounWithoutBackground.vue"
import FullNounFitBounds from "./../examples/FullNounFitBounds.vue"
import FullNounRenderType from "./../examples/FullNounRenderType.vue"
</script>

# FullNoun

Use this component to render a full noun

## FullNoun with background

```html
<FullNoun
  body="bege-crt"
  head="ape"
  accessories="bird-side"
  glasses="square-black-rgb"
  bg-color="d5d7e1"
></FullNoun>
```

<ClientOnly>
<FullNounWithBackground />
</ClientOnly>

## FullNoun without background

```html
<FullNoun
  body="bege-crt"
  head="ape"
  accessories="bird-side"
  glasses="square-black-rgb"
></FullNoun>
```

<ClientOnly>
<FullNounWithoutBackground />
</ClientOnly>

## FullNoun Fit Bounds

```html
<FullNoun
  body="bege-crt"
  head="ape"
  accessories="bird-side"
  glasses="square-black-rgb"
  fit-to-bounds
></FullNoun>
```

<ClientOnly>
<FullNounFitBounds />
</ClientOnly>

## FullNoun, Render as an IMG instead of SVG

```html
<FullNoun
  body="bege-crt"
  head="ape"
  accessories="bird-side"
  glasses="square-black-rgb"
  bg-color="d5d7e1"
  render-type="img"
></FullNoun>
```

<ClientOnly>
<FullNounRenderType />
</ClientOnly>
