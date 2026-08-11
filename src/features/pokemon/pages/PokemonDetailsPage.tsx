import { useNavigate } from 'react-router';
import Stat from '../components/Stat';

const PokemonDetailsPage = () => {
	const navigate = useNavigate();
	return (
		<main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 px-4 py-8 sm:px-6 lg:px-8">
			<button
				className="cursor-pointer mb-10 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
				onClick={() => navigate(-1)}
			>
				← Back to List
			</button>
			<div className="mx-auto max-w-5xl">
				<section className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
					<header className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-6 text-center text-white">
						<h1 className="text-2xl font-bold sm:text-3xl">
							<span className="mr-2">⚡</span>
							Charmander
						</h1>

						<p className="mt-2 text-sm font-medium text-white/90">#004</p>
					</header>

					{/* Content */}
					<div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
						{/* Left Side */}
						<div className="flex flex-col items-center">
							{/* Pokemon Image */}
							<div className="flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-slate-50">
								<img
									src=""
									alt="Charmander"
									className="h-[80%] w-[80%] object-contain"
								/>
							</div>

							<span className="mt-5 rounded-full bg-red-500 px-4 py-1 text-xs font-semibold text-white">
								Fire
							</span>

							<div className="mt-6 grid w-full max-w-md grid-cols-2 gap-4">
								<div className="rounded-sm bg-slate-50 px-4 py-5 text-center">
									<p className="text-sm text-slate-500">📏 Height</p>

									<p className="mt-2 text-xl font-bold text-slate-900">0.6 m</p>
								</div>

								<div className="rounded-sm bg-slate-50 px-4 py-5 text-center">
									<p className="text-sm text-slate-500">⚖ Weight</p>

									<p className="mt-2 text-xl font-bold text-slate-900">
										8.5 kg
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
									<Stat label="HP" value={39} />
									<Stat label="Attack" value={52} />
									<Stat label="Defense" value={43} />
									<Stat label="Sp. Attack" value={60} />
									<Stat label="Sp. Defense" value={50} />
									<Stat label="Speed" value={65} />
								</div>
							</section>

							<section className="mt-7">
								<h2 className="mb-4 text-xl font-bold text-slate-900">
									Abilities
								</h2>

								<div className="space-y-2">
									<div className="flex items-center gap-3">
										<span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-800">
											blaze
										</span>
									</div>

									<div className="flex items-center gap-3">
										<span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-800">
											solar power
										</span>

										<span className="text-xs text-slate-400">(Hidden)</span>
									</div>
								</div>
							</section>

							<section className="mt-7">
								<h2 className="text-xl font-bold text-slate-900">
									Base Experience
								</h2>

								<p className="mt-2 text-2xl font-bold text-purple-600">62 XP</p>
							</section>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default PokemonDetailsPage;
