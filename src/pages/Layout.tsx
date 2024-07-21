import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Box padding={3}>
				<NavBar />
			</Box>
			<Outlet />
		</>
	);
};

export default Layout;
