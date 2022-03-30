import { h } from 'preact';

const Nav = () => {
	return (
		<nav class="flex justify-end py-3 px-12 lg:px-16">
			<div class="text-lg lg:text-xl flex gap-4">
				<a href="/">accueil</a>
				<a href="/portfolio">portfolio</a>
				<a href="/philosophie">ma philosophie</a>
			</div>
		</nav>
	);
}
export default Nav;
