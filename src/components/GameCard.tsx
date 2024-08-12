import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Link to={"/games/" + game.slug}>
			<Card overflow="hidden" _hover={{ cursor: "pointer",  }} role="group">
				<Image src={imageUrl(game.background_image)} _groupHover={{ transition: "0.3s ease-in", transform: "scale(1.05)" }} />
				<CardBody>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="xl">{game.name}</Heading>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
