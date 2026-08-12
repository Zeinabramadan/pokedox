import type { RouteObject } from 'react-router';

import RootLayout from './RootLayout';
import PokemonListPage from '../features/pokemon/pages/PokemonListPage';
import PokemonDetailsPage from '../features/pokemon/pages/PokemonDetailsPage';

export const routes: RouteObject[] = [
	{
		element: <RootLayout />,
		children: [
			{ path: '/', element: <PokemonListPage /> },
			{ path: '/pokemon/:id', element: <PokemonDetailsPage /> },
		],
	},
];
