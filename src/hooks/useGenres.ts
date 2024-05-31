import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Genres {
	id: number;
	name: string;
	image_background: string;
}

interface FetchGenresResponse {
	count: number;
	results: Genres[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genres[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClients
			.get<FetchGenresResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
