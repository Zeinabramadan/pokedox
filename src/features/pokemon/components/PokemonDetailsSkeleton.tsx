const PokemonDetailsSkeleton = () => {
	return (
		<main className="min-h-screen animate-pulse bg-gradient-to-b from-purple-50 to-pink-100 px-4 py-8 sm:px-6 lg:px-8">
			<div className="mb-10 h-10 w-32 rounded-md bg-white/80" />

			<div className="mx-auto max-w-5xl">
				<section className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
					<header className="bg-gradient-to-r from-purple-300 to-pink-300 px-6 py-6">
						<div className="mx-auto h-9 w-48 rounded-md bg-white/40" />

						<div className="mx-auto mt-3 h-4 w-16 rounded-md bg-white/30" />
					</header>

					<div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
						<div className="flex flex-col items-center">
							<div className="flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-slate-100">
								<div className="h-[65%] w-[65%] rounded-full bg-slate-200" />
							</div>

							<div className="mt-5 flex gap-2">
								<div className="h-6 w-16 rounded-full bg-slate-200" />
								<div className="h-6 w-20 rounded-full bg-slate-200" />
							</div>

							<div className="mt-6 grid w-full max-w-md grid-cols-2 gap-4">
								<div className="rounded-sm bg-slate-50 px-4 py-5">
									<div className="mx-auto h-4 w-20 rounded bg-slate-200" />

									<div className="mx-auto mt-3 h-7 w-16 rounded bg-slate-200" />
								</div>

								<div className="rounded-sm bg-slate-50 px-4 py-5">
									<div className="mx-auto h-4 w-20 rounded bg-slate-200" />

									<div className="mx-auto mt-3 h-7 w-16 rounded bg-slate-200" />
								</div>
							</div>
						</div>

						<div>
							<section>
								<div className="mb-5 h-7 w-32 rounded bg-slate-200" />

								<div className="space-y-4">
									{Array.from({ length: 6 }).map((_, index) => (
										<div key={index} className="space-y-2">
											<div className="flex justify-between">
												<div className="h-4 w-20 rounded bg-slate-200" />

												<div className="h-4 w-8 rounded bg-slate-200" />
											</div>

											<div className="h-2 w-full rounded-full bg-slate-200" />
										</div>
									))}
								</div>
							</section>

							<section className="mt-7">
								<div className="mb-4 h-7 w-28 rounded bg-slate-200" />

								<div className="space-y-3">
									<div className="h-7 w-24 rounded bg-slate-200" />

									<div className="flex items-center gap-3">
										<div className="h-7 w-28 rounded bg-slate-200" />

										<div className="h-4 w-14 rounded bg-slate-200" />
									</div>
								</div>
							</section>

							<section className="mt-7">
								<div className="h-7 w-40 rounded bg-slate-200" />

								<div className="mt-2 h-8 w-20 rounded bg-slate-200" />
							</section>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default PokemonDetailsSkeleton;
