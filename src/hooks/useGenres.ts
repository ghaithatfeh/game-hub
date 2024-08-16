import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll
	});

export default useGenres;
