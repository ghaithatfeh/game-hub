import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGride = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error) return;
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5} borderRadius={10}>
			{isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
			{data?.results.map((game) => (
				<GameCard key={game.id} game={game} />
			))}
		</SimpleGrid>
	);
};

export default GameGride;
