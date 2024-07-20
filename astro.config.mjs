import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://profound-dasik-da3fa6.netlify.app/",
  integrations: [preact()]
});