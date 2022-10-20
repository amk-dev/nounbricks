import path, { dirname } from "path";
import { build } from "vite";

const libs = [
  {
    entry: path.resolve(dirname("."), "./src/heads.ts"),
    filename: "heads",
  },
  {
    entry: path.resolve(dirname("."), "./src/bodies.ts"),
    filename: "bodies",
  },
  {
    entry: path.resolve(dirname("."), "./src/accessories.ts"),
    filename: "accessories",
  },
  {
    entry: path.resolve(dirname("."), "./src/glasses.ts"),
    filename: "glasses",
  },
  {
    entry: path.resolve(dirname("."), "./src/index.ts"),
    filename: "index",
  },
  {
    entry: path.resolve(dirname("."), "./src/palette.ts"),
    filename: "palette",
  },
];

libs.forEach(async (lib) => {
  await build({
    build: {
      outDir: "./dist",
      lib: {
        ...lib,
        fileName: () => `${lib.filename}.es.js`,
        formats: ["es"],
      },
      emptyOutDir: false,
    },
  });
});
