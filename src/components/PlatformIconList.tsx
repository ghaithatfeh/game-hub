import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import Platform from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		ios: MdPhoneIphone,
		android: FaAndroid,
		mac: FaApple,
		linux: FaLinux,
		web: BsGlobe,
		nintendo: SiNintendo,
	};

	return (
		<HStack marginY={1}>
			{platforms?.map((p) => (
				<Icon key={p.id} as={iconMap[p.slug]} color="gray.500" fontSize="xl" />
			))}
		</HStack>
	);
};

export default PlatformIconList;
