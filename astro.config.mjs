import { defineConfig, passthroughImageService } from "astro/config";
import myIntegration from "./src/my-integration.js";

// https://astro.build/config
export default defineConfig({
  integrations: [myIntegration()],
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
