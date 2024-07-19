import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "./components/layouts/LayoutMain";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { CartProvider } from "./context/CartProvider";
import { Checkout } from "./pages/Checkout/Checkout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutMain />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/checkout",
				element: <Checkout />
			}
		]
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
		</QueryClientProvider>
		
	</React.StrictMode>
);
