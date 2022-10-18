import * as traits from "@nounbricks/traits-nouns";
import { generateCustomNounbricksComponents } from "./components/custom/getCustomNounbricksComponents";

const {
  FullNoun,
  NounBody,
  NounHead,
  NounAccessory,
  NounGlasses,
  NounBuilder,
} = generateCustomNounbricksComponents(Object.values(traits));

export {
  FullNoun,
  NounBody,
  NounHead,
  NounAccessory,
  NounGlasses,
  NounBuilder,
};
