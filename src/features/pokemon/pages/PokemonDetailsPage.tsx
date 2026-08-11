import { useNavigate, useParams } from 'react-router';

import Stat from '../components/Stat';

import { usePokemonDetails } from '../hooks/usePokemonDetails';
import PokemonDetailsSkeleton from '../components/PokemonDetailsSkeleton';
import {
	formatPokemonHeight,
	formatPokemonId,
	formatPokemonWeight,
	getPokemonImage,
} from '../utils/pokemon.utils';
import PokemonAbilityBadge from '../components/PokemonAbilityBadge';

const PokemonDetailsPage = () => {
	const navigate = useNavigate();

	const { id } = useParams<{ id: string }>();
	const { data: pokemon, isPending, isError, error } = usePokemonDetails(id);

	if (isPending) {
		return <PokemonDetailsSkeleton />;
	}

	if (isError) {
		return (
			<main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-50 to-pink-100 px-4">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-slate-800">
						Something went wrong
					</h1>

					<p className="mt-2 text-sm text-slate-500">
						{error instanceof Error
							? error.message
							: 'Failed to load Pokémon details.'}
					</p>

					<button
						type="button"
						onClick={() => navigate(-1)}
						className="mt-6 cursor-pointer rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800"
					>
						← Back to List
					</button>
				</div>
			</main>
		);
	}

	if (!pokemon) {
		return null;
	}

	const image = getPokemonImage(pokemon);

	return (
		<main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 px-4 py-8 sm:px-6 lg:px-8">
			<button
				className="mb-10 inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
				onClick={() => navigate(-1)}
			>
				← Back to List
			</button>

			<div className="mx-auto max-w-5xl">
				<section className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
					<header className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-6 text-center text-white">
						<h1 className="text-2xl font-bold capitalize sm:text-3xl">
							<span className="mr-2">⚡</span>
							{pokemon.name}
						</h1>

						<p className="mt-2 text-sm font-medium text-white/90">
							{formatPokemonId(pokemon.id)}
						</p>
					</header>

					<div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
						<div className="flex flex-col items-center">
							<div className="flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-slate-50">
								<img
									src={image}
									alt={pokemon.name}
									className="h-[80%] w-[80%] object-contain"
								/>
							</div>

							<div className="mt-5 flex flex-wrap justify-center gap-2">
								{pokemon.types.map(({ type }) => (
									<span
										key={type.name}
										className="rounded-full bg-red-500 px-4 py-1 text-xs font-semibold capitalize text-white"
									>
										{type.name}
									</span>
								))}
							</div>

							<div className="mt-6 grid w-full max-w-md grid-cols-2 gap-4">
								<div className="rounded-sm bg-slate-50 px-4 py-5 text-center">
									<p className="text-sm text-slate-500">📏 Height</p>

									<p className="mt-2 text-xl font-bold text-slate-900">
										{formatPokemonHeight(pokemon.height)}
									</p>
								</div>

								<div className="rounded-sm bg-slate-50 px-4 py-5 text-center">
									<p className="text-sm text-slate-500">⚖ Weight</p>

									<p className="mt-2 text-xl font-bold text-slate-900">
										{formatPokemonWeight(pokemon.weight)}
									</p>
								</div>
							</div>
						</div>

						<div>
							<section>
								<h2 className="mb-5 text-xl font-bold text-slate-900">
									Base Stats
								</h2>

								<div className="space-y-4">
									{pokemon.stats.map(({ stat, base_stat }) => (
										<Stat key={stat.name} label={stat.name} value={base_stat} />
									))}
								</div>
							</section>

							<section className="mt-7">
								<h2 className="mb-4 text-xl font-bold text-slate-900">
									Abilities
								</h2>

								<div className="space-y-2">
									{pokemon.abilities.map(({ ability, is_hidden }) => (
										<PokemonAbilityBadge
											key={ability.name}
											ability={ability.name}
											hidden={is_hidden}
										/>
									))}
								</div>
							</section>

							<section className="mt-7">
								<h2 className="text-xl font-bold text-slate-900">
									Base Experience
								</h2>

								<p className="mt-2 text-2xl font-bold text-purple-600">
									{pokemon.base_experience ?? 0} XP
								</p>
							</section>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default PokemonDetailsPage;
