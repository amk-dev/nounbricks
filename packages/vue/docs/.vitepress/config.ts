export default {
  title: "Nounbricks",
  description: "Component library for nounish assets",
  themeConfig: {
    sidebar: [
      {
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "Components",
        items: [
          { text: "FullNoun", link: "/components/fullnoun" },
          { text: "NounHead", link: "/components/nounhead" },
          { text: "NounBody", link: "/components/nounbody" },
          { text: "NounGlasses", link: "/components/nounglasses" },
          { text: "NounAccessory", link: "/components/nounaccessory" },
        ],
      },
      {
        text: "Component Options",
        items: [
          {
            text: "With background",
            link: "/guide/component-options",
          },
          {
            text: "Without background",
            link: "/guide/component-options",
          },
          {
            text: "Fit to bounds",
            link: "/guide/component-options",
          },
        ],
      },
    ],
  },
};
