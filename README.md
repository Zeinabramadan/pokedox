# Pokedex

A React + TypeScript + Vite application for browsing Pokémon using the PokéAPI.

The app demonstrates a project structure with:

- client-side routing using `react-router`
- remote data fetching and caching with `@tanstack/react-query`
- responsive UI styling with `tailwindcss`
- pagination and infinite loading views
- detailed Pokémon page

> **Live DEMO** deployed on: https://pokedox-five.vercel.app/

## Prerequisites

Before running the project, make sure you have:

[Node.js](https://nodejs.org/) & [Yarn](https://yarnpkg.com/) are installed locally on your machine

## Getting Started

- Install dependencies:

```bash
yarn install
```

- Copy the example environment file:

```bash
cp .env.example .env
```

- Run the development server:

```bash
yarn run dev
```

The app will be available at:

- Local: `http://localhost:5173`

Build:

```bash
yarn run build
```

_**NOTE**_ The following command will host the `dist` folder after build

```bash
yarn run preview --host
```

The app will be available at:

- Local: `http://localhost:4173`

Run linting and formatting:

```bash
yarn run lint:fix
yarn run format
```

## Environment

The app uses `VITE_API_BASE_URL` to determine the PokéAPI endpoint. By default, `.env.example` points to:

```env
VITE_API_BASE_URL=https://pokeapi.co/api/v2
```

## Project Structure

```text

├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── routes/
│   │   ├── AppRouter.tsx
│   │   └── routes.tsx
│   └── features/
│       └── pokemon/
│           ├── api/
│           │   └── pokemonApi.ts
│           ├── components/
│           │   ├── Pagination.tsx
│           │   ├── PokemonCard.tsx
│           │   ├── PokemonGrid.tsx
│           │   ├── PokemonDetailsSkeleton.tsx
│           │   ├── PokemonCardSkeleton.tsx
│           │   ├── PokemonAbilityBadge.tsx
│           │   ├── Stat.tsx
│           │   └── ViewToggle.tsx
│           ├── hooks/
│           │   ├── usePokemonList.ts
│           │   ├── usePokemonLoadMore.ts
│           │   └── usePokemonDetails.ts
│           ├── pages/
│           │   ├── PokemonListPage.tsx
│           │   └── PokemonDetailsPage.tsx
│           ├── types/
│           │   └── Pokemon.types.ts
│           ├── utils/
│           │   └── pokemon.utils.ts
│           └── constants.ts
```

## Application Flow

- `src/main.tsx`
  - bootstraps the React application
  - wraps the app in `QueryClientProvider`
- `src/App.tsx`
  - renders the router container
- `src/routes/AppRouter.tsx`
  - configures the browser router and route definitions
- `src/routes/routes.tsx`
  - defines the routes for the list page and Pokémon details page

## Pokémon Feature Layer

- `src/features/pokemon/api/pokemonApi.ts`
  - handles REST calls to the PokéAPI
- `src/features/pokemon/hooks`
  - contains custom hooks for list, infinite loading, and detail data fetching
- `src/features/pokemon/pages`
  - `PokemonListPage` renders the main list view with toggleable pagination or infinite loading
  - `PokemonDetailsPage` renders the selected Pokémon details view
- `src/features/pokemon/components`
  - reusable UI pieces for cards, loading skeletons, pagination controls, and pokemon details display
- `src/features/pokemon/utils/pokemon.utils.ts`
  - contains data mapping and formatting helpers
- `src/features/pokemon/types/Pokemon.types.ts`
  - shared TypeScript types for API responses

## Styling

The project uses [Tailwind](https://tailwindcss.com/) CSS for styling.

## Browser Support

Tested in modern versions of:

- Chrome
- Firefox
- Safari

Mobile browsers are also supported
