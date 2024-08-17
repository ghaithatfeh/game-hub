import { Button } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const ClearFiltersButton = () => {
	const setClear = useGameQueryStore((s) => s.setClear);
	return (
		<Button ms="auto" onClick={setClear}>
			Clear Filters
		</Button>
	);
};

export default ClearFiltersButton;
