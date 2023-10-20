import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageLayout from 'src/layouts/PageLayout';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <PageLayout />,
			children: [],
		},
	]);
	return <RouterProvider router={router} />;
};

export default Router;