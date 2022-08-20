import DefaultTheme from "vitepress/theme";
import CustomHome from "./CustomHome.vue";

export default {
  ...DefaultTheme,
  Layout: CustomHome,
};
