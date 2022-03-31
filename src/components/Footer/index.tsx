import {FunctionComponent} from 'preact';
import Button from '@components/Button';

const Footer: FunctionComponent = () => {
	return (
		<footer class="flex flex-wrap lg:justify-end py-6 px-12 lg:px-16 text-xl mt-24 gap-4">
			<span class="flex">Créé en 2022 avec Astro, Preact et TailwindCSS.</span>
			<span>Hébergé par Github.</span>
			<a href="https://github.com/PSalaun/portfolio"><Button type="secondary" icon="external">Voir le code de ce site</Button></a>
		</footer>
	);
}
export default Footer;
