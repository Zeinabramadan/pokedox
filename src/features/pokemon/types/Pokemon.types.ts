export type ViewMode = 'pagination' | 'infinite';

export interface ViewToggleProps {
	viewMode: string;
	onChange: (viewMode: ViewMode) => void;
}

// to be edited when integrating with API
export interface Pokemon {
	id: number;
	name: string;
	image: string;
}

export interface StatProps {
	label: string;
	value: number;
}

export interface PokemonListItemResponse {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItemResponse[];
}

export interface PokemonType {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PokemonAbility {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
}

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface PokemonSprites {
	front_default: string | null;

	other?: {
		'official-artwork'?: {
			front_default: string | null;
			front_shiny?: string | null;
		};
	};
}
export interface PokemonDetails {
	id: number;
	name: string;
	height: number;
	weight: number;
	base_experience: number | null;
	types: PokemonType[];
	abilities: PokemonAbility[];
	stats: PokemonStat[];
	sprites: PokemonSprites;
}
