import { Box, CustomIcon, Text } from "../../components";

import { ListData } from "../../data";
import { ListType } from "../../data/list-data";

const returnStage = (stage: "1" | "2" | "3") => {
  switch (stage) {
    case "1":
      return "Complete";
    case "2":
      return "Not complete";

    default:
      return "In progress";
  }
};

const Item = (item: ListType) => {
  return (
    <Box gap="0.5em" key={item.id} flex={1} js="center" al="center">
      <CustomIcon color="white" size={24} stage={item.stage} icon={item.icon} />
      <Box direction="column" gap="0.2em">
        <Text color="#a3a3a3" fontSize="0.75em">{`${item.id}. STAGE`}</Text>
        <Text fontWeight="bold" fontSize="0.85">
          {item.title}
        </Text>
        <Text color="#0008" fontSize="0.8em" fontWeight="bold">
          {returnStage(item.stage)}
        </Text>
      </Box>
    </Box>
  );
};

type Props = {};

const Stage = ({}: Props) => {
  return (
    <Box direction="column" color="#fff" padding="2em 0" gap="1.5em">
      <Text fontSize={"3em"} lineHeight={60} width="60%" fontWeight="bold">
        PROJECT STAGE
      </Text>

      <Box flex={1} js="space-evenly">
        {ListData.map((item) => (
          <Item {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default Stage;
