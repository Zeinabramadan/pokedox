import ViewToggle from '../components/ViewToggle';
import type { ViewMode } from '../types/pokemon.types';
import PokemonGrid from '../components/PokemonGrid';
import { useSearchParams } from 'react-router';
import { POKEMON_PAGE_SIZE } from '../constants';

import { usePokemonList } from '../hooks/usePokemonList';
import { usePokemonLoadMore } from '../hooks/usePokemonLoadMore';

import { mapPokemonListItem } from '../utils/pokemon.utils';

import Pagination from '../components/Pagination';
import PokemonCardSkeleton from '../components/PokemonCardSkeleton';

const PokemonListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const viewMode =
		searchParams.get('view') === 'infinite' ? 'infinite' : 'pagination';

	const page =
		viewMode === 'pagination' ? Number(searchParams.get('page')) || 1 : 1;

	const paginationQuery = usePokemonList(page);

	const loadMoreQuery = usePokemonLoadMore();

	const paginationPokemon =
		paginationQuery.data?.results.map(mapPokemonListItem) ?? [];

	const loadMorePokemon =
		loadMoreQuery.data?.pages.flatMap((page) =>
			page.results.map(mapPokemonListItem)
		) ?? [];

	const pokemon = viewMode === 'infinite' ? loadMorePokemon : paginationPokemon;

	const totalPages = Math.ceil(
		(paginationQuery.data?.count ?? 0) / POKEMON_PAGE_SIZE
	);

	const isPending =
		viewMode === 'infinite'
			? loadMoreQuery.isPending
			: paginationQuery.isPending;

	const isError =
		viewMode === 'infinite' ? loadMoreQuery.isError : paginationQuery.isError;

	const error =
		viewMode === 'infinite' ? loadMoreQuery.error : paginationQuery.error;

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

	const handleRetry = () => {
		if (viewMode === 'infinite') {
			loadMoreQuery.refetch();
			return;
		}

		paginationQuery.refetch();
	};

	return (
		<main
			className={`min-h-screen px-12 py-12 transition-colors duration-300 md:px-24 ${
				viewMode === 'pagination' ? 'bg-blue-50' : 'bg-emerald-50'
			}`}
		>
			<header className="text-center">
				<h1 className="text-3xl font-bold text-slate-800">Pokedex</h1>

				<p className="my-3 text-slate-500">
					Discover & explore Pokémon with{' '}
					{viewMode === 'pagination' ? 'page controls' : 'load more'}
				</p>
			</header>

			<ViewToggle viewMode={viewMode} onChange={handleViewChange} />

			{isPending && (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
					{Array.from({ length: 8 }).map((_, index) => (
						<PokemonCardSkeleton key={index} />
					))}
				</div>
			)}

			{isError && (
				<div className="flex min-h-100 flex-col items-center justify-center text-center">
					<p className="text-lg font-semibold text-slate-800">
						Something went wrong
					</p>

					<p className="mt-2 text-sm text-slate-500">
						{error instanceof Error ? error.message : 'Failed to load Pokémon.'}
					</p>

					<button
						type="button"
						onClick={handleRetry}
						className="mt-4 rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
					>
						Retry
					</button>
				</div>
			)}

			{!isPending && !isError && (
				<div className="mt-4">
					<PokemonGrid pokemon={pokemon} />

					{viewMode === 'pagination' && (
						<div className="mt-10">
							<Pagination
								currentPage={page}
								totalPages={totalPages}
								onPageChange={handlePageChange}
								disabled={paginationQuery.isFetching}
								itemsShown={paginationPokemon.length}
							/>
						</div>
					)}

					{viewMode === 'infinite' && (
						<div className="mt-10 flex flex-col items-center gap-3">
							{loadMoreQuery.hasNextPage ? (
								<button
									type="button"
									disabled={loadMoreQuery.isFetchingNextPage}
									onClick={() => loadMoreQuery.fetchNextPage()}
									className="cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50"
								>
									{loadMoreQuery.isFetchingNextPage
										? 'Loading...'
										: 'Load More'}
								</button>
							) : (
								<p className="text-sm text-slate-400">
									You've reached the end.
								</p>
							)}
							<p className="text-sm text-slate-500">
								Showing {loadMorePokemon.length} Pokemon
							</p>
						</div>
					)}
				</div>
			)}
		</main>
	);
};

export default PokemonListPage;
