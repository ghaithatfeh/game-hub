import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, error, isLoading } = useGenres();

	if (error) return;
	if (isLoading) return <Spinner />;
	return (
		<List spacing={3}>
			{data.map((genre) => (
				<ListItem key={genre.id}>
					<HStack>
						<Image borderRadius={8} boxSize="35px" src={imageUrl(genre.image_background)} />
						<Button
							onClick={() => onSelectGenre(genre)}
							variant="link"
							fontSize="lg"
							fontWeight={selectedGenre == genre ? "bold" : "normal"}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenresList;
