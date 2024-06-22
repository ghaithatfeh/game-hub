import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClients, { FetchResponse } from "../services/api-clients";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
	useQuery({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClients
				.get<FetchResponse<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.ordering,
						search: gameQuery.searchQuery,
					},
				})
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24H
	});

export default useGames;
