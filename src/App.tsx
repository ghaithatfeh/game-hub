import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/GenresList";

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
					<GameGride />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
