// routes/RootLayout.tsx
import { Outlet, ScrollRestoration } from 'react-router';

const RootLayout = () => {
	return (
		<>
			<Outlet />
			<ScrollRestoration />
		</>
	);
};

export default RootLayout;
