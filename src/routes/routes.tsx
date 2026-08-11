import type { RouteObject } from 'react-router';

import PokemonListPage from '../features/pokemon/pages/PokemonListPage';
import PokemonDetailsPage from '../features/pokemon/pages/PokemonDetailsPage';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <PokemonListPage />,
	},
	{
		path: '/pokemon/:id',
		element: <PokemonDetailsPage />,
	},
];
