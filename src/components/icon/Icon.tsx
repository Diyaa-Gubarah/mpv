import {
  FaCheck,
  FaClock,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import * as React from "react";

import Box from "../box/Box";
import { AiFillCloseCircle, AiFillMessage, AiFillPhone } from "react-icons/ai";
import { HiLocationMarker, HiMenuAlt3 } from "react-icons/hi";

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
  icon:
    | "check"
    | "close"
    | "waiting"
    | "menu"
    | "phone"
    | "email"
    | "location"
    | "facebook"
    | "instagram";
  color: string;
  size: number;
  stage?: "1" | "2" | "3";
}

const Icon = {
  check: FaCheck,
  close: AiFillCloseCircle,
  waiting: FaClock,
  menu: HiMenuAlt3,
  phone: AiFillPhone,
  email: AiFillMessage,
  location: HiLocationMarker,
  facebook: FaFacebook,
  instagram: FaInstagramSquare,
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
