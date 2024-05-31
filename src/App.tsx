import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import OrderSelector from "./components/OrderSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre;
	platform: Platform;
	ordering: string;
	searchQuery: string;
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
					<NavBar onSearch={(searchQuery) => setGameQuery({ ...gameQuery, searchQuery })} />
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
					<GameHeading gameQuery={gameQuery} />
					<HStack marginBottom={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
						/>
						<OrderSelector
							selectedOrder={gameQuery.ordering}
							onSelectOrder={(ordering) => setGameQuery({ ...gameQuery, ordering })}
						/>
					</HStack>
					<GameGride gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
