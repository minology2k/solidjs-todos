import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options

  // Windi CSS base
  shortcuts: {
    "flex-center": "flex items-center justify-center",
  },

  // Tailwind CSS base
  theme: {
    fontSize: {
      h1: "52px",
    },
    colors: {
      primary: "#240046",
      secondary: "#2b2d42",
    },
  },
});
