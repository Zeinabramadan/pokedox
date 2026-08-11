import type { Pokemon, PokemonListItemResponse } from '../types/pokemon.types';

export const getPokemonIdFromUrl = (url: string): number => {
	const parts = url.split('/').filter(Boolean);

	return Number(parts[parts.length - 1]);
};

export const mapPokemonListItem = (
	pokemon: PokemonListItemResponse
): Pokemon => {
	const id = getPokemonIdFromUrl(pokemon.url);

	return {
		id,
		name: pokemon.name,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
	};
};

export const formatPokemonId = (id: number | string): string => {
	return `#${String(id).padStart(3, '0')}`;
};
