import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 24 * 60 * 60 * 1000, // 24H
		}
	}
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</ChakraProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
