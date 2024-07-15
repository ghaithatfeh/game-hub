import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/GenresList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	ordering?: string;
	searchQuery?: string;
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
							selectedGenreId={gameQuery.genreId}
							onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
						/>
					</GridItem>
				</Show>
				<GridItem area="main" padding={3}>
					<GameHeading gameQuery={gameQuery} />
					<HStack marginBottom={5}>
						<PlatformSelector
							selectedPlatformId={gameQuery.platformId}
							onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })}
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
