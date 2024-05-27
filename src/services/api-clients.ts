import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "59eedd9d2d1a4c81b6646c346f1649f1",
	},
});
