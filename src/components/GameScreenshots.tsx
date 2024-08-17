import useScreenshot from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, error, isLoading } = useScreenshot(gameId);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<SimpleGrid columns={[null, 1, 2]} spacing={3}>
			{data?.results.map(({ id, image }) => (
				<Image key={id} src={image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
