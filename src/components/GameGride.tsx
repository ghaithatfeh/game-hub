import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGride = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <Text color="red">{error}</Text>}
			<ul>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} borderRadius={10}>
					{games.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</SimpleGrid>
			</ul>
		</>
	);
};

export default GameGride;