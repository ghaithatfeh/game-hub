import { useQuery } from "@tanstack/react-query";
import apiClients from "../services/api-clients";
import { FetchResponse } from "./useData";

export interface Platform {
	id: number;
	name: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: () => apiClients.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24H
	});

export default usePlatforms;
