import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
	return (
		<HStack justifyContent="space-between">
			<Image boxSize='55px' src={logo} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
