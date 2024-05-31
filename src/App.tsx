import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
						<GenresList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
					</GridItem>
				</Show>
				<GridItem area="main" padding={3}>
					<GameGride selectedGenre={selectedGenre} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
