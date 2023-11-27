import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import { MdOutlineHouse } from "react-icons/md";
import { PiNoteBlankBold } from "react-icons/pi";
import { TbSquareLetterT } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";
export default function DesktopNavigation() {
  const [currenlyActiveID, setCurrenlyActiveID] = useState<number>(0);

  return (
    <Flex h="100vh" w={"25%"} maxWidth="200px">
      <Flex
        pt="10px"
        w="200px"
        flexDir={"column"}
        pos={"fixed"}
        zIndex={999}
        top={0}
        bottom={0}
        bg="#fff"
        left="0"
        p="20px"
        borderRight={"1px solid #eeeeee"}
        backdropFilter="blur(50px)"
      >
        <Flex flexDir={"column"} gap="40px">
          {_DESKTOP_NAV.map(({ id, title, to, icon: Icon }) => (
            <NavLink
              to={to}
              key={id}
              style={({ isActive }) => {
                if (isActive) {
                  setCurrenlyActiveID(id);
                  return {
                    color: "#001233",
                  };
                } else {
                  return {
                    color: "#C1C4CD",
                  };
                }
              }}
            >
              <Flex alignItems={"center"} gap="20px">
                <Icon
                  fontSize="1.5em"
                  {...(currenlyActiveID === id
                    ? { color: "#0466C8" }
                    : { color: "#C1C4CD" })}
                />
                <Text fontSize={".9em"}>{title}</Text>
              </Flex>
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

const _DESKTOP_NAV = [
  {
    id: 1,
    title: "Home",
    icon: MdOutlineHouse,
    to: "/home",
  },
  { id: 2, title: "Report", icon: PiNoteBlankBold, to: "/report" },
  { id: 3, title: "Chat", icon: TbSquareLetterT, to: "/chat" },
  { id: 4, title: "Budget", icon: SiSimpleanalytics, to: "/" },
  { id: 5, title: "Profile", icon: HiOutlineUser, to: "/profile" },
];
