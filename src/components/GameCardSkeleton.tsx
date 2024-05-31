import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width='350px' overflow="hidden">
			<Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
