import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading } = useGame(slug!);

  if (isLoading)
    return  <Spinner />

	return (
    <>
      <h1>{game?.name}</h1>
      <p>{game?.description_raw}</p>
    </>
  )
};

export default GameDetailPage;
