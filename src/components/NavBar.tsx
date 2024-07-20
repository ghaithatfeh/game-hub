import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack>
			<Image boxSize="55px" src={logo} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
