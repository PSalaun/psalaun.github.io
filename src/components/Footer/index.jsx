import {h} from 'preact';
import Button from '@components/Button/index.jsx';

function Footer() {
	return (
		<footer class="flex flex-wrap lg:justify-end py-6 px-12 lg:px-16 text-xl mt-24 gap-4">
			<span class="flex">Créé en 2022 avec <a class="ml-2" href="https://astro.build" target="_blank" rel="noopener noreferrer"><Button type="secondary" icon="external">Astro</Button></a></span>
			<span>Hébergé par Github.</span>
			<a href=""><Button type="secondary" icon="external">Voir le code de ce site</Button></a>
		</footer>
	);
}
export default Footer;
