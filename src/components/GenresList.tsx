import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imageUrl from "../services/image-url";

const GenresList = () => {
	const { genres, error, isLoading } = useGenres();

	if (error) return;
	if (isLoading) return <Spinner />;
	return (
		<List spacing={3}>
			{genres.map((genre) => (
				<ListItem key={genre.id}>
					<HStack>
						<Image borderRadius={8} boxSize="35px" src={imageUrl(genre.image_background)} />
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenresList;
