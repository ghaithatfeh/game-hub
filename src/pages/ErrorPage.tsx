import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<Box padding={3}>
			<NavBar />
			<Box
				display="flex"
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				h="50vh"
			>
				<Heading>Oops...</Heading>
				<Text>
					{isRouteErrorResponse(error)
						? "This page does not exist."
						: "Sorry, an unexpected error has occurred."}
				</Text>
			</Box>
		</Box>
	);
};

export default ErrorPage;
