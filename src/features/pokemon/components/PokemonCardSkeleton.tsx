const PokemonCardSkeleton = () => {
	return (
		<article className="w-full rounded-md border border-slate-200 bg-white p-3 shadow-sm">
			{/* Image skeleton */}
			<div className="aspect-[1.25] w-full animate-pulse rounded-sm bg-slate-200" />

			{/* Text skeleton */}
			<div className="mt-3 flex flex-col items-center gap-2">
				<div className="h-4 w-24 animate-pulse rounded bg-slate-200" />

				<div className="h-3 w-12 animate-pulse rounded bg-slate-200" />
			</div>
		</article>
	);
};

export default PokemonCardSkeleton;
