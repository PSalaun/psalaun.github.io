import { defineConfig } from 'astro/config';
import astroImagePlugin from 'astro-imagetools/plugin';
import preact from '@astrojs/preact';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [astroImagePlugin]
  },
  buildOptions: {
    site: 'https://psalaun.github.io'
  },
  integrations: [preact()]
});