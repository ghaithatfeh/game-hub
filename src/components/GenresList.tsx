import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}
const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
	const { data, error, isLoading } = useGenres();

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
							<Image borderRadius={8} boxSize="35px" objectFit="cover" src={imageUrl(genre.image_background)} />
							<Button
								onClick={() => onSelectGenre(genre)}
								variant="link"
								fontSize="lg"
								fontWeight={selectedGenreId == genre.id ? "bold" : "normal"}
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
