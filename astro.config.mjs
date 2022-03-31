import {defineConfig} from 'astro/config';
import astroImagePlugin from 'astro-imagetools/plugin';

// https://astro.build/config
export default defineConfig({
	// Enable the Preact renderer to support Preact JSX components.
	renderers: ['@astrojs/renderer-preact'],
	vite: {
		plugins:[astroImagePlugin],
	},
	buildOptions: {
		site: 'https://psalaun.github.io'
	}
});
