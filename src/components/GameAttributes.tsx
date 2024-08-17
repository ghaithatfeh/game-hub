import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import Game from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<SimpleGrid columns={2}>
			<Box>
				<DefinitionItem term="Platforms">
					{game?.parent_platforms?.map(({ platform }) => (
						<Text key={platform.id}>{platform.name}</Text>
					))}
				</DefinitionItem>
			</Box>
			<Box>
				<DefinitionItem term="Metascore">
					<CriticScore score={game!.metacritic} />
				</DefinitionItem>
			</Box>
			<Box>
				<DefinitionItem term="Genres">
					{game?.genres.map((genre) => (
						<Text key={genre.id}>{genre.name}</Text>
					))}
				</DefinitionItem>
			</Box>
			<Box>
				<DefinitionItem term="Publishers">
					{game?.publishers.map((publisher) => (
						<Text key={publisher.id}>{publisher.name}</Text>
					))}
				</DefinitionItem>
			</Box>
		</SimpleGrid>
	);
};

export default GameAttributes;
