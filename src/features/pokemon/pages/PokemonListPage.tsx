import ViewToggle from '../components/ViewToggle';
import type { ViewMode } from '../types/Pokemon.types';
import PokemonGrid from '../components/PokemonGrid';
import { useSearchParams } from 'react-router';

const PokemonListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const viewMode =
		searchParams.get('view') === 'infinite' ? 'infinite' : 'pagination';

	const setViewMode = (mode: ViewMode) => {
		setSearchParams({ view: mode });
	};

	return (
		<main
			className={`py-12 md:px-24 px-12 min-h-screen transition-colors duration-300 ${
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
			<PokemonGrid />
		</main>
	);
};

export default PokemonListPage;
