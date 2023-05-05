import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import solidPlugin from "vite-plugin-solid";
import { presetUno, presetAttributify } from "unocss";

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnoCSS({
      configFile: "../uno.config.ts",
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
      ],
      rules: [
        // your custom rules
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
