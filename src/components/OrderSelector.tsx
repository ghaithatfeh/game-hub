import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const OrderSelector = () => {
	const orderingFields = [
		{ label: "Relevance", value: "" },
		{ label: "Name", value: "name" },
		{ label: "Release date", value: "-released" },
		{ label: "Date added", value: "-added" },
		{ label: "Average Rating", value: "-rating" },
		{ label: "Popularity", value: "-metacritic" },
	];

	const selectedOrder = useGameQueryStore((s) => s.gameQuery.ordering);
	const setOrdering = useGameQueryStore((s) => s.setOrdering);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By: {orderingFields.find((o) => o.value == selectedOrder)?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{orderingFields.map((order) => (
					<MenuItem onClick={() => setOrdering(order.value)} key={order.value}>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default OrderSelector;
