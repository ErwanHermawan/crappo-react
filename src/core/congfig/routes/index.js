import { Navigate } from "react-router-dom";

// -- pages
import Home from "presentation/container/pages/Home";
import Products from "presentation/container/pages/Products";
import NotFound from "presentation/container/pages/NotFound";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/not-found",
		element: <NotFound />,
	},
	{
		path: "*",
		element: <Navigate to="/not-found" />,
	},
];

export default routes;
