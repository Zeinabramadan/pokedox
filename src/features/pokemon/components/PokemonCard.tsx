import { Link } from 'react-router';
import { formatPokemonId } from '../utils/pokemon.utils';
import type { Pokemon } from '../types/pokemon.types';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
	return (
		<Link to={`/pokemon/${pokemon.id}`} className="block w-full">
			<article className="w-full rounded-md border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">
				<div className="flex aspect-[1.25] w-full items-center justify-center overflow-hidden rounded-sm bg-slate-50">
					<img
						src={pokemon.image}
						alt={pokemon.name}
						className="h-full w-full object-contain"
					/>
				</div>

				<div className="mt-3 text-center">
					<h2 className="text-sm font-semibold capitalize text-slate-900">
						{pokemon.name}
					</h2>

					<span className="mt-0.5 block text-xs text-slate-400">
						{formatPokemonId(pokemon.id)}
					</span>
				</div>
			</article>
		</Link>
	);
};

export default PokemonCard;
