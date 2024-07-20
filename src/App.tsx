import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";
import GameHeading from "./components/GameHeading";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "250px 1fr",
				}}
			>
				<GridItem area="nav" padding={3}>
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" padding={3}>
						<GenresList />
					</GridItem>
				</Show>
				<GridItem area="main" padding={3}>
					<GameHeading />
					<HStack marginBottom={5}>
						<PlatformSelector />
						<OrderSelector />
					</HStack>
					<GameGride />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
