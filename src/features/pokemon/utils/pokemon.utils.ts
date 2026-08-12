import type {
	Pokemon,
	PokemonDetails,
	PokemonListItemResponse,
} from '../types/pokemon.types';

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

export const getPokemonImage = (pokemon: PokemonDetails): string =>
	pokemon.sprites.other?.['official-artwork']?.front_default ??
	pokemon.sprites.front_default ??
	'';

export const formatPokemonHeight = (height: number): string =>
	`${height / 10} m`;

export const formatPokemonWeight = (weight: number): string =>
	`${weight / 10} kg`;

export const formatStatName = (value: string): string => {
	const formatted = value.replace(/^special-/, 'Sp. ').replace(/-/g, ' ');

	return formatted.replace(/\b\w/g, (char) => char.toUpperCase());
};
