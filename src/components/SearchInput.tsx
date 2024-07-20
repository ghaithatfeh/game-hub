import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
	const setSearchQuery = useGameQueryStore((state) => state.setSearchQuery);
	return (
		<InputGroup marginX={3}>
			<InputLeftElement children={<BsSearch />} />
			<Input
				onChange={(e) => setSearchQuery(e.target.value)}
				borderRadius={20}
				placeholder="Search games..."
				variant="filled"
			/>
		</InputGroup>
	);
};

export default SearchInput;
