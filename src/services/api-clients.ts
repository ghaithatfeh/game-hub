import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "59eedd9d2d1a4c81b6646c346f1649f1",
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
	}
}

export default APIClient;
