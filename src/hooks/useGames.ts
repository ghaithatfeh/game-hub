import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Game>("/games");

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.ordering,
					search: gameQuery.searchQuery,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, pages) => lastPage.next ? pages.length + 1 : undefined,
		initialPageParam: 1
	});

export default useGames;
