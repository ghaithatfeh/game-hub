import { HStack, Image, Text } from "@chakra-ui/react";
import reactLogo from "../assets/react.svg";

const NavBar = () => {
	return (
		<HStack p={2}>
			<Image src={reactLogo} />
			<Text>NavBar</Text>
		</HStack>
	);
};

export default NavBar;
