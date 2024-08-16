import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children?: string;
}

const ExpandableText = ({ children }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children.length < limit) return <Text>{children}</Text>;

	return (
		<Text>
			{expanded ? children : children.substring(0, 300) + " ..."}
			<Button
				ml={1}
				size="xs"
				fontWeight="bold"
				colorScheme="yellow"
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? "Show Less" : "Show More"}
			</Button>
		</Text>
	);
};

export default ExpandableText;
