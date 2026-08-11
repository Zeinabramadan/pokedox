import PokemonCard from './PokemonCard';

// dummy data till integrating with the api
const pokemonItem = {
	id: 1,
	name: 'ksjhdgfs',
	image: 'sdkfjhds',
};

const PokemonGrid = () => {
	return (
		<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
			<PokemonCard
				id={pokemonItem.id}
				name={pokemonItem.name}
				image={pokemonItem.image}
			/>
		</section>
	);
};

export default PokemonGrid;
