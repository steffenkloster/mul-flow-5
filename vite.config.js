import { resolve } from "path";
import { VitePluginFonts } from "vite-plugin-fonts";
import handlebars from "vite-plugin-handlebars";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        multimediedesigner: resolve(__dirname, "multimediedesigner/index.html"),
        flow1: resolve(__dirname, "multimediedesigner/flow-1/index.html"),
        flow2: resolve(__dirname, "multimediedesigner/flow-2/index.html"),
        flow3: resolve(__dirname, "multimediedesigner/flow-3/index.html"),
        flow4: resolve(__dirname, "multimediedesigner/flow-4/index.html"),
        projekter: resolve(__dirname, "projekter/index.html"),
      },
    },
  },

  plugins: [
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Open Sans",
            styles: "wght@300;400;500;600;700;800",
          },
        ],
      },
    }),
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
};
