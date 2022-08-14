import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "nounbricks",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
  plugins: [vue()],
});
