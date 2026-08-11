import { useInfiniteQuery } from '@tanstack/react-query';

import { getPokemonList } from '../api/pokemonApi';
import { POKEMON_PAGE_SIZE } from '../constants';

export const usePokemonLoadMore = () => {
	return useInfiniteQuery({
		queryKey: ['pokemon', 'load-more'],

		initialPageParam: 0,

		queryFn: ({ pageParam }) => getPokemonList(POKEMON_PAGE_SIZE, pageParam),

		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage.next) {
				return undefined;
			}

			return allPages.length * POKEMON_PAGE_SIZE;
		},
	});
};
