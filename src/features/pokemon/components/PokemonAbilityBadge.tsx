const PokemonAbilityBadge = ({
	ability,
	hidden,
}: {
	ability: string;
	hidden: boolean;
}) => (
	<div className="flex items-center gap-3">
		{hidden ? (
			<>
				<span className="text-sm font-medium capitalize text-slate-700">
					{ability}
				</span>

				<span className="text-sm text-slate-500">(Hidden)</span>
			</>
		) : (
			<span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium capitalize text-slate-800 shadow-sm">
				{ability}
			</span>
		)}
	</div>
);

export default PokemonAbilityBadge;
