import { SimpleGrid, Button } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGride = ({ gameQuery }: Props) => {
	const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error) return;
	return (
		<>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5} borderRadius={10}>
				{isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
				{data?.pages.map((page) => page.results.map((game) => <GameCard key={game.id} game={game} />))}
			</SimpleGrid>
			{hasNextPage && (
				<Button my={6} onClick={() => !isFetchingNextPage && fetchNextPage()} disabled={isFetchingNextPage}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)}
		</>
	);
};

export default GameGride;
