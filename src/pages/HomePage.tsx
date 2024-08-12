import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGride from "../components/GameGride";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import OrderSelector from "../components/OrderSelector";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "250px 1fr",
			}}
		>
			<Show above="lg">
				<GridItem area="aside">
					<GenresList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameHeading />
				<HStack marginBottom={5}>
					<PlatformSelector />
					<OrderSelector />
				</HStack>
				<GameGride />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
