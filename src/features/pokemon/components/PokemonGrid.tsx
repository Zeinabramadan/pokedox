import PokemonCard from './PokemonCard';

import type { Pokemon } from '../types/pokemon.types';

interface PokemonGridProps {
	pokemon: Pokemon[];
}

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	return (
		<section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{pokemon.map((item) => (
				<PokemonCard key={item.id} pokemon={item} />
			))}
		</section>
	);
};

export default PokemonGrid;
