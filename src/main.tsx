import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "./components/layouts/LayoutMain";
import "./index.css";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutMain />,
		children:[
			{
				index: true,
				element: <Home />
			},
			{
				path: "/cart",
				element: <Cart />
			}
		]
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
