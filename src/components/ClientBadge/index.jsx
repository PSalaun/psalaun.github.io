import { h } from 'preact';

function ClientBadge({ children }) {
	return (
		<div class="bg-light py-4 px-6 text-xl">
			{children}
		</div>
	);
}

export default ClientBadge;
