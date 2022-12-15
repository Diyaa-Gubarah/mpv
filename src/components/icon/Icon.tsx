import * as Icons from "react-icons/all";
import * as React from "react";

import Box from "../box/Box";

const returnBackground = (stage: "1" | "2" | "3"): string => {
  switch (stage) {
    case "1":
      return "#000";
    case "2":
      return "#a3a3a3";

    default:
      return "gray";
  }
};

interface Props {
  icon: "check" | "close" | "waiting" | "menu";
  color: string;
  size: number;
  stage?: "1" | "2" | "3";
}

const Icon = {
  check: Icons.BsCheck2,
  close: Icons.IoClose,
  waiting: Icons.CgSandClock,
  menu: Icons.HiMenuAlt3,
};

const CustomIcon: React.FunctionComponent<Props> = ({
  icon,
  color,
  size,
  stage,
}) => {
  const IconComponent = Icon[icon];

  return (
    <Box
      color={returnBackground(stage || "1")}
      al="center"
      js="center"
      flex={0.5}
      padding="0.5em"
      rounded="50%"
    >
      <IconComponent color={color} size={size} />
    </Box>
  );
};

export default CustomIcon;
