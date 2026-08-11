import type { ViewToggleProps } from '../types/pokemon.types';

const ViewToggle = ({ viewMode, onChange }: ViewToggleProps) => {
	const baseButtonClasses =
		'px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer';

	return (
		<>
			<div className="flex justify-center gap-2">
				<button
					onClick={() => onChange('pagination')}
					className={`${baseButtonClasses} ${
						viewMode === 'pagination'
							? 'bg-slate-900 text-white'
							: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
					}`}
				>
					Page Controls
				</button>
				<button
					onClick={() => onChange('infinite')}
					className={`${baseButtonClasses} ${
						viewMode === 'infinite'
							? 'bg-slate-900 text-white'
							: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
					}`}
				>
					Infinite Scroll
				</button>
			</div>
		</>
	);
};

export default ViewToggle;
