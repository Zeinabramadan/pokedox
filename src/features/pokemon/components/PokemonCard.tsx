import { Link } from 'react-router';

import type { Pokemon } from '../types/Pokemon.types';

const PokemonCard = ({ id, name, image }: Pokemon) => {
	const formattedId = `#${String(id).padStart(3, '0')}`;

	return (
		<Link
			to={{
				pathname: `/pokemon/${id}`,
			}}
			className="block w-full"
		>
			<article className="w-full rounded-md border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
				<div className="flex aspect-[1.25] w-full items-center justify-center overflow-hidden rounded-sm bg-slate-50">
					<img
						src={image}
						alt={name}
						className="h-full w-full object-contain"
					/>
				</div>

				<div className="mt-3 text-center">
					<h2 className="text-sm font-semibold text-slate-900">{name}</h2>

					<span className="mt-0.5 block text-xs text-slate-400">
						{formattedId}
					</span>
				</div>
			</article>
		</Link>
	);
};

export default PokemonCard;
