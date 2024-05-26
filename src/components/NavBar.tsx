import { HStack, Image } from "@chakra-ui/react";
import reactLogo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
	return (
		<HStack p={2} justifyContent="space-between">
			<Image src={reactLogo} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
