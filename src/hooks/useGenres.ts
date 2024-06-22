import { useQuery } from "@tanstack/react-query";
import apiClients, { FetchResponse } from "../services/api-clients";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClients.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
		staleTime: 24* 60 * 60 * 1000 // 24H
	});

export default useGenres;
