import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll
	});

export default usePlatforms;
