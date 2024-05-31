import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string, genre?: Genre | null) => {
	const [data, setData] = useState(<T[]>[]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClients
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, params: { genres: genre?.id } })
			.then((res) => {
				setData(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, [genre]);

	return { data, error, isLoading };
};

export default useData;
