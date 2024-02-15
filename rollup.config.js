import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import simpleVars from "postcss-simple-vars";
import autoprefixer from "autoprefixer";
import easyImport from "postcss-easy-import";
import pxtorem from "postcss-pxtorem";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "build/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [
        easyImport(),
        simpleVars(),
        autoprefixer(),
        pxtorem({ propList: ["*"] }),
      ],
      extensions: [".css"],
    }),
  ],
};
