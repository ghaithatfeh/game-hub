import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Genre>("/genres");

interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll
	});

export default useGenres;
