import type { RouteObject } from 'react-router';

import PokemonListPage from '../features/pokemon/pages/PokemonListPage';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <PokemonListPage />,
	},
];
