import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading } = useGame(slug!);

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading>{game?.name}</Heading>
      <ExpandableText>
        {game?.description_raw}
      </ExpandableText>
		</>
	);
};

export default GameDetailPage;
