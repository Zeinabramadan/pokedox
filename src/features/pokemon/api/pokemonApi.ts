import type { PokemonListResponse } from '../types/pokemon.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPokemonList = async (
	limit: number,
	offset: number
): Promise<PokemonListResponse> => {
	const response = await fetch(
		`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
	);

	if (!response.ok) {
		throw new Error('Failed to fetch Pokemon list');
	}

	return response.json();
};
