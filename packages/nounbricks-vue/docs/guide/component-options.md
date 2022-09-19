# Component Options

::: info
You can find more examples for the component options in respective component pages.
:::

## Render a noun with background

All the components ( `FullNoun`, `NounHead`, `NounGlasses`, `NounBody`, `NounAccessory` have a prop `bg-color` ) which lets you specify any background color ( as hex code ) for your rendered noun/noun trait.

```vue-html
<fullnoun
    ...
    bg-color="d5d7e1"
/>
```

## Render a noun without a background

you can omit the `bg-color` prop to render a noun/noun trait without any backgroud.

## Fit to bounds

normally nouns are rendered within a 320x320 square. mostly this leaves additional space which we might want to get rid of. in that situation you can use a `fit-to-bounds` prop and it should remove all the additional space.

```vue-html
<fullnoun
    ...
    fit-to-bounds
/>
```

## Render as an IMG or SVG

you might want to render the noun as an img instead of a full svg. this helps performance when rendering a lot of nouns together. in those scenarios you can use the `renderType` prop.

the default value for renderType is `svg`

```vue-html
<fullnoun
    ...
    renderType="img"
/>
```
