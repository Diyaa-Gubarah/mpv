import { Box, CustomIcon, Input, Text, TextArea } from "../../components";

import { FaMapMarkerAlt } from "react-icons/fa";
import { ListData } from "../../data";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const ResponseMap = styled(Box)`
  @media only screen and (${`max-width:760px`}) {
    width: 95%;

    & .mapTop {
      @media only screen and (${`max-width:520px`}) {
        flex-direction: column-reverse;

        & .mapTop--left {
          width: 100%;
          height: 60vh;

          & .address {
            width: 90%;
            justify-content: space-between;
            padding: 1em;
          }
        }

        & .mapTop--right {
          width: 100%;
          padding: 1.5em;
        }
      }
    }

    & .mapBottom {
      font-size: 12px;
      align-items: flex-start;

      @media only screen and (${`max-width:500px`}) {
        & .mapBottom--cards {
          flex-direction: column;
        }
      }
    }
  }
`;

type Props = {};

const Map = (props: Props) => {
  const [area, setArea] = React.useState("k");

  return (
    <ResponseMap
      url={images.map}
      width="80%"
      margin="4em auto"
      height="auto"
      bottom="0"
      top="0"
      left="0"
      right="0"
      direction="column"
    >
      <Box flex={0.7} className="mapTop">
        {/* left */}
        <Box
          width="50%"
          direction="column"
          js="flex-end"
          height="auto"
          className="mapTop--left"
        >
          <FaMapMarkerAlt
            color="#fff"
            size={34}
            style={{
              position: "absolute",
              top: "37%",
              left: "40%",
            }}
          />
          <Box
            color="#fff"
            height="auto"
            rounded="0.25em"
            width="80%"
            margin="0 auto 2em"
            padding="0.5em"
            gap="2em"
            al="center"
            className="address"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text fontSize="0.65em">kg kj kjhkjhkh</Text>
              <Text fontSize="0.9em" fontWeight="bold">
                Lorem ipsum dolor sit amet
              </Text>
            </div>
            <FaMapMarkerAlt color="#000" size={28} />
          </Box>
        </Box>

        {/* right */}
        <Box
          className="mapTop--right"
          color="rgb(0,0,0,0.8)"
          gap="0.5em"
          direction="column"
          width="50%"
          height="auto"
          padding="1.5em 3em"
        >
          <Text fontSize={"1.5em"} color="#fff" fontWeight="bolder">
            Lets Talk
          </Text>
          <Text fontSize={"0.6em"} color="#fff" fontWeight="bold">
            Lorem ipsum dolor sit amet consectetur{" "}
          </Text>

          <Box gap="1em" height="auto">
            <Input
              name="lkjlkj"
              onChange={() => {}}
              type="text"
              value="kjkjh"
              placeholder="jh kjgkg hj"
              width="50%"
            />
            <Input
              name="lkjlkj"
              onChange={() => {}}
              type="text"
              value="kjkjh"
              placeholder="jh kjgkg hj"
              width="50%"
            />
          </Box>
          <Input
            name="lkjlkj"
            onChange={() => {}}
            type="text"
            value="kjkjh"
            placeholder="jh kjgkg hj"
          />
          <Input
            name="lkjlkj"
            onChange={() => {}}
            type="text"
            value="kjkjh"
            placeholder="jh kjgkg hj"
          />

          <TextArea
            name="text area"
            onChange={(e) => setArea(e.target.value)}
            value={area}
            placeholder="j gjhgjh ghgjh"
          />
          <Text
            color="#fff"
            type="button"
            background="#000"
            onClick={() => console.log("kjhkjhkh")}
            margin="1em 0"
            padding="0.25em 1.5em"
            fontSize="0.75em"
            width="max-content"
            ta="center"
          >
            Click
          </Text>
        </Box>
      </Box>
      <Box
        flex={0.3}
        color="#fff4"
        direction="column"
        gap="2em"
        padding="2em 1em"
        className="mapBottom"
      >
        <Text
          ta="center"
          width="100%"
          color="#fff"
          fontSize="1.5em"
          fontWeight="bold"
        >
          Get In Touch
        </Text>

        <Box>
          <Box
            flex={1}
            js="space-between"
            gap="1em"
            className="mapBottom--cards"
          >
            {ListData.slice(0, 3).map((item) => (
              <Item {...item} key={item.id.toString()} />
            ))}
          </Box>
        </Box>

        <Box
          js="center"
          al="center"
          margin="0 auto"
          width="auto"
          gap="1em"
          height="max-content"
        >
          <CustomIcon color="white" size={18} stage={"1"} icon={"check"} />
          <CustomIcon color="white" size={18} stage={"1"} icon={"check"} />
          <Text color="#fff" fontSize="0.75em" fontWeight="bold">
            jhgjh hjgjghj
          </Text>
        </Box>
      </Box>
    </ResponseMap>
  );
};

export default Map;

const Item = (item: any) => {
  return (
    <Box gap="0.5em" flex={1} js="center" al="center">
      <CustomIcon color="white" size={18} stage={"1"} icon={"check"} />
      <Box direction="column" gap="0.2em">
        <Text color="#fff" fontSize="0.75em">
          Email
        </Text>
        <Text color="#fff" fontWeight="bold" fontSize="0.75em">
          kj kjhkjhkhjhkj
        </Text>
      </Box>
    </Box>
  );
};
