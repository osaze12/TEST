import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import { MdOutlineHouse } from "react-icons/md";
import { PiNoteBlankBold } from "react-icons/pi";
import { TbSquareLetterT } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function MobileNavigation() {
  const [currenlyActiveID, setCurrenlyActiveID] = useState<number>(0);

  return (
    <Flex
      flexDir={"column"}
      pos={"fixed"}
      zIndex={999}
      bottom={0}
      bg="#fff"
      right={0}
      left="0"
      p="20px"
      mt="100px"
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {_MOBILE_NAV.map(({ id, title, to, icon: Icon }) => (
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
            <Flex flexDir={"column"} alignItems={"center"} gap="5px">
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
  );
}

const _MOBILE_NAV = [
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
