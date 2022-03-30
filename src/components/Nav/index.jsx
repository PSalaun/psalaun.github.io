import { h } from 'preact';

const Nav = ({currentPath}) => {
	const isActive = (path) => {
		return currentPath === path;
	}
	const links = [
		{ label: 'accueil', path: '/'},
		{ label: 'portfolio', path: '/portfolio'},
		{ label: 'ma philosophie', path: '/philosophie'},
	];
	return (
		<nav class="flex justify-end py-3 px-12 lg:px-16">
			<div class="text-lg lg:text-xl flex gap-4">
				{links.map(link => (
					<a href={link.path} class={isActive(link.path) ? 'font-bold' : ''}>{link.label}</a>
				))}
			</div>
		</nav>
	);
}
export default Nav;
