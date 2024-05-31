import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectOrder: (order: string) => void;
	selectedOrder: string;
}

const OrderSelector = ({ onSelectOrder, selectedOrder = "" }: Props) => {
	const orderingFields = [
		{ label: "Relevance", value: "" },
		{ label: "Name", value: "name" },
		{ label: "Release date", value: "-released" },
		{ label: "Date added", value: "-added" },
		{ label: "Average Rating", value: "-rating" },
		{ label: "Popularity", value: "-metacritic" },
	];
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By: {orderingFields.find((o) => o.value == selectedOrder)?.label}
			</MenuButton>
			<MenuList>
				{orderingFields.map((order) => (
					<MenuItem onClick={() => onSelectOrder(order.value)} key={order.value}>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default OrderSelector;
