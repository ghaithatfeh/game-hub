import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
}

const GameGride = ({ selectedGenre }: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error) return;
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} borderRadius={10}>
			{isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
			{data.map((game) => (
				<GameCard key={game.id} game={game} />
			))}
		</SimpleGrid>
	);
};

export default GameGride;
