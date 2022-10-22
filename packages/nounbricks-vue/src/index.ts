import * as heads from "@nounbricks/traits-nouns/heads";
import * as bodies from "@nounbricks/traits-nouns/bodies";
import * as glasses from "@nounbricks/traits-nouns/glasses";
import * as accessories from "@nounbricks/traits-nouns/accessories";
import { palette } from "@nounbricks/traits-nouns";

import { generateCustomNounbricksComponents } from "./components/custom/getCustomNounbricksComponents";

const {
  FullNoun,
  NounBody,
  NounHead,
  NounAccessory,
  NounGlasses,
  NounBuilder,
} = generateCustomNounbricksComponents(
  [
    ...Object.values(heads),
    ...Object.values(bodies),
    ...Object.values(glasses),
    ...Object.values(accessories),
  ],
  palette
);

export {
  FullNoun,
  NounBody,
  NounHead,
  NounAccessory,
  NounGlasses,
  NounBuilder,
};
