export type ViewMode = 'pagination' | 'infinite';

export interface ViewToggleProps {
	viewMode: string;
	onChange: (viewMode: ViewMode) => void;
}
