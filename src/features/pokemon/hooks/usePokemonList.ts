import { useQuery } from '@tanstack/react-query';

import { getPokemonList } from '../api/pokemonApi';
import { POKEMON_PAGE_SIZE } from '../constants';

export const usePokemonList = (page: number) => {
	const offset = (page - 1) * POKEMON_PAGE_SIZE;

	return useQuery({
		queryKey: ['pokemon', 'list', page],
		queryFn: () => getPokemonList(POKEMON_PAGE_SIZE, offset),
	});
};
