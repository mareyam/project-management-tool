import { Grid, VStack } from "@chakra-ui/react";
import { Project } from "@/types/Project";
import CardDetails from "./MinimalProjectCard/CardDetails";
import CardColor from "./MinimalProjectCard/CardColor";
import ActionButtons from "./MinimalProjectCard/ActionButtons";

const MinimizedProjectCard = ({ tags, title, description, color }: Project) => {
  return (
    <VStack p="2" pt="4" rounded="xl" maxW="fit-content">
      <Grid
        bg="white"
        h="36"
        w="60"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(10, 1fr)"
      >
        <CardColor color={color} />
        <CardDetails tags={tags} title={title} description={description} />
        <ActionButtons />
      </Grid>
    </VStack>
  );
};
export default MinimizedProjectCard;
