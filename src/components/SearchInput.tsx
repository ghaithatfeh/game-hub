import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchQuery: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	return (
		<InputGroup marginX={3}>
			<InputLeftElement children={<BsSearch />} />
			<Input
				onChange={(e) => onSearch(e.target.value)}
				borderRadius={20}
				placeholder="Search games..."
				variant="filled"
			/>
		</InputGroup>
	);
};

export default SearchInput;
