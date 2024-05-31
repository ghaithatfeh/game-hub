import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
	genre: Genre;
	platform: Platform;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
						<GenresList
							selectedGenre={gameQuery.genre}
							onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						/>
					</GridItem>
				</Show>
				<GridItem area="main" padding={3}>
					<HStack marginBottom={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
						/>
					</HStack>
					<GameGride gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
