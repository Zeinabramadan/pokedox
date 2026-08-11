import ViewToggle from '../components/ViewToggle';
import type { ViewMode } from '../types/pokemon.types';
import PokemonGrid from '../components/PokemonGrid';
import { useSearchParams } from 'react-router';
import { POKEMON_PAGE_SIZE } from '../constants';
import { usePokemonList } from '../hooks/usePokemonList';
import { mapPokemonListItem } from '../utils/pokemon.utils';

import Pagination from '../components/Pagination';
import PokemonCardSkeleton from '../components/PokemonCardSkeleton';

const PokemonListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const viewMode =
		searchParams.get('view') === 'infinite' ? 'infinite' : 'pagination';

	const page =
		viewMode === 'pagination' ? Number(searchParams.get('page')) || 1 : 1;

	const handleViewChange = (mode: ViewMode) => {
		if (mode === 'infinite') {
			setSearchParams({
				view: 'infinite',
			});

			return;
		}

		setSearchParams({
			view: 'pagination',
			page: '1',
		});
	};

	const { data, isPending, isError } = usePokemonList(page);

	const pokemon = data?.results.map(mapPokemonListItem) ?? [];

	const totalPages = Math.ceil((data?.count ?? 0) / POKEMON_PAGE_SIZE);

	const handlePageChange = (newPage: number) => {
		setSearchParams({
			view: viewMode,
			page: String(newPage),
		});

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
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

			<ViewToggle viewMode={viewMode} onChange={handleViewChange} />

			{isPending && (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{Array.from({ length: 8 }).map((_, index) => (
						<PokemonCardSkeleton key={index} />
					))}
				</div>
			)}

			{/* Grid Views goes here */}
			{!isPending && !isError && (
				<div className="mt-4">
					<PokemonGrid pokemon={pokemon} />
					{viewMode === 'pagination' && (
						<div className="mt-10">
							<Pagination
								currentPage={page}
								totalPages={totalPages}
								onPageChange={handlePageChange}
								disabled={isPending}
							/>
						</div>
					)}
				</div>
			)}
		</main>
	);
};

export default PokemonListPage;
