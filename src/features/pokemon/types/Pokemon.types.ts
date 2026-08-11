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
