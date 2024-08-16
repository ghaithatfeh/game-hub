import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

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
