import { defineConfig, passthroughImageService } from "astro/config";
import myIntegration from "./src/my-integration.js";
import solidJs from "@astrojs/solid-js";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [myIntegration(), preact()],
  image: {
    service: passthroughImageService(),
  },
  devOverlay: {
    enabled: true,
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
});
