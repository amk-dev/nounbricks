import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "noun-traits",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
  },
});
