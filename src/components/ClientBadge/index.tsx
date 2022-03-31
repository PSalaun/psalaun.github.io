import { FunctionComponent } from 'preact';

const ClientBadge: FunctionComponent = ({ children }) => {
	return (
		<div class="bg-light py-4 px-6 text-xl">
			{children}
		</div>
	);
}

export default ClientBadge;
