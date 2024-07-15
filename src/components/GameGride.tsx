import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	gameQuery: GameQuery;
}

const GameGride = ({ gameQuery }: Props) => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	if (error) return;
	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			hasMore={!!hasNextPage}
			next={fetchNextPage}
			loader={<Spinner thickness="3px" mt={4} />}
		>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5} borderRadius={10}>
				{isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
				{data?.pages.map((page) => page.results.map((game) => <GameCard key={game.id} game={game} />))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGride;
