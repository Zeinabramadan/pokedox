import { useState } from 'react';
import ViewToggle from '../components/ViewToggle';
import type { ViewMode } from '../types/Pokemon.types';

const PokemonListPage = () => {
	const [viewMode, setViewMode] = useState<ViewMode>('pagination');

	return (
		<main
			className={`py-12 min-h-screen transition-colors duration-300 ${
				viewMode === 'pagination' ? 'bg-blue-50' : 'bg-emerald-50'
			}`}
		>
			<header className="text-center">
				<h1 className="text-3xl font-bold text-slate-800">Pokedex</h1>
				<p className="text-slate-500 my-3">
					Discover & explore Pokémon with{' '}
					{viewMode === 'pagination' ? 'page controls' : 'infinite scroll'}
				</p>
			</header>

			<ViewToggle viewMode={viewMode} onChange={setViewMode} />

			{/* Grid Views goes here */}
		</main>
	);
};

export default PokemonListPage;
