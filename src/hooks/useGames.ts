import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-clients";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = () => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);

	return useInfiniteQuery({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.ordering,
					search: gameQuery.searchQuery,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, pages) =>
			lastPage.next ? pages.length + 1 : undefined,
		initialPageParam: 1,
	});
};

export default useGames;
