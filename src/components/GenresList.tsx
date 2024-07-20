import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenresList = () => {
	const { data, error, isLoading } = useGenres();
	const genreId = useGameQueryStore(s => s.gameQuery.genreId);
	const setGenreId = useGameQueryStore(s => s.setGenreId);

	if (error) return;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize="2xl" fontWeight="bold" marginBottom={4}>
				Genres
			</Heading>
			<List spacing={3}>
				{data?.results.map((genre) => (
					<ListItem key={genre.id}>
						<HStack>
							<Image
								borderRadius={8}
								boxSize="35px"
								objectFit="cover"
								src={imageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => setGenreId(genre.id)}
								variant="link"
								fontSize="lg"
								fontWeight={genreId == genre.id ? "bold" : "normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenresList;
