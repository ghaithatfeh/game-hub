import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
	id: number;
	name: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, //24H
	});

export default usePlatforms;
