import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const platform = usePlatform(gameQuery.platformId);
	const genre = useGenre(gameQuery.genreId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<Heading as="h1" marginBottom={4} fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
			{heading}
		</Heading>
	);
};

export default GameHeading;
