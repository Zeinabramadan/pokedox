import { useQuery } from '@tanstack/react-query';

import { getPokemonDetails } from '../api/pokemonApi';

export const usePokemonDetails = (pokemon: string | undefined) => {
	return useQuery({
		queryKey: ['pokemon', 'details', pokemon],

		queryFn: () => {
			if (!pokemon) {
				throw new Error('Pokemon identifier is required');
			}

			return getPokemonDetails(pokemon);
		},

		enabled: Boolean(pokemon),
	});
};
