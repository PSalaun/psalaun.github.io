import {defineConfig} from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

/*
	define filename and dirname in ESM scope
	https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
	// Enable the Preact renderer to support Preact JSX components.
	renderers: ['@astrojs/renderer-preact'],
	vite: {
		// Enable absolute imports in Vite
		resolve: {
			alias: [
				{ find: 'src', replacement: path.resolve(__dirname, 'src') },
			],
		},
	}
});
