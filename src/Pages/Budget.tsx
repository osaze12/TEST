import {
  Box,
  Flex,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import naira_icon from "../assets/svgs/naira-icon.svg";

import { PiPiggyBankBold } from "react-icons/pi";
import { PiBowlFoodBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import MonthlyBudgetProgress from "../components/MonthlyBudgetProgress";
import CategoryProgress from "../components/CategoryProgress";

export default function Budget() {
  return (
    <Flex w="100%" flexDir={"column"} alignItems={"flex-start"} px="20px">
      <Text
        color="#001233"
        fontFamily={"CircularStd-Black"}
        my="20px"
        fontSize={"1.5em"}
      >
        Budget
      </Text>
      <Flex flexDir={"row"} alignItems={"center"} gap="10px">
        <Img src={naira_icon} alt="naira icon" loading="lazy" />
        <Text color="#707480">Monthly Budget</Text>
      </Flex>

      <Box
        borderRadius={"15px"}
        boxShadow={"0px 5px 10px 2px rgba(0, 0, 0, 0.03)"}
        w="100%"
        my="20px"
      >
        <Text
          bg="#fff"
          fontSize={"1.5em"}
          color="#001233"
          fontFamily={"CircularStd-Bold"}
          p="10px"
        >
          ₦120,000
        </Text>
      </Box>

      {/* Tab section */}
      {/* ----------------------------------------------------- */}

      <Tabs w="100%" defaultIndex={1} isLazy>
        <Flex
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <TabList border={"none"} gap="20px">
            <Tab
              pl="0"
              fontSize={".9em"}
              fontFamily={"CircularStd-Medium"}
              color="#707480"
              position={"relative"}
              _selected={{
                color: "#0466C8",
                px: "0",
                backgroundClip: "content-box",
                borderImage:
                  "linear-gradient(to right, #0466C8 50%, rgba(0,0,0,0) 50%)",
                borderImageSlice: "1",
              }}
            >
              Last Month
            </Tab>
            <Tab
              fontSize={".9em"}
              fontFamily={"CircularStd-Medium"}
              position={"relative"}
              color="#707480"
              _selected={{
                color: "#0466C8",
                px: "0",
                backgroundClip: "content-box",
                borderImage:
                  "linear-gradient(to right, #0466C8 50%, rgba(0,0,0,0) 50%)",
                borderImageSlice: "1",
              }}
            >
              This Month
            </Tab>
          </TabList>

          <HiOutlineDotsHorizontal color="#707480" />
        </Flex>

        <TabPanels>
          <TabPanel>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <MonthlyBudgetProgress value={90} />
              <Text color="#707480" mb="5px" fontSize={".9em"}>
                Amount spent so far
              </Text>
              <Text color="#0466C8" fontSize={"CircularStd-Medium"}>
                ₦50,000<span style={{ color: "#67A2DC" }}>/₦120,000</span>
              </Text>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <MonthlyBudgetProgress />
              <Text color="#707480" mb="5px" fontSize={".9em"}>
                Amount spent so far
              </Text>
              <Text color="#0466C8" fontSize={"CircularStd-Medium"}>
                ₦50,000<span style={{ color: "#67A2DC" }}>/₦120,000</span>
              </Text>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* category breakdown section */}
      {/* ----------------------------------------------------- */}

      <Flex flexDir={"column"} w="100%">
        <Text
          fontFamily={" CircularStd-Medium"}
          fontSize={"1.2em"}
          color="#001233"
          my="20px"
        >
          Category Breakdown
        </Text>
        <Flex ml="-5px" flexDir={"column"} gap="10px" w="100%">
          {_CATEGORY_LIST.map(
            ({ id, icon, title, percent, spent, total, ...props }) => (
              <Flex
                key={id}
                alignItems={"center"}
                gap={"10px"}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"}>
                  <CategoryProgress {...{ id, percent, icon }} {...props} />
                  <Flex flexDir={"column"} gap="1px" fontSize={".8em"}>
                    <Text>{title}</Text>
                    <Text color="#707480">{percent}%</Text>
                  </Flex>
                </Flex>

                <Text fontFamily={" CircularStd-Medium"} fontSize={".9em"}>
                  {spent}
                  <span
                    style={{
                      color: "#C1C4CD",
                      fontFamily: " CircularStd-Regular",
                    }}
                  >
                    /{total}
                  </span>
                </Text>
              </Flex>
            )
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

const _CATEGORY_LIST = [
  {
    id: 1,
    category: "FOOD_AND_DRINKS",
    title: "Food and Drink",
    percent: "40",
    spent: "₦20,000",
    total: "₦42,000",
    icon: PiBowlFoodBold,
    primaryColor: "#C89104",
    secondaryColor: "#c8910433",
  },
  {
    id: 2,
    category: "SAVINGS",
    title: "Savings",
    percent: "20",
    spent: "₦10,000",
    total: "₦24,000",
    icon: PiPiggyBankBold,
    primaryColor: "#038A39",
    secondaryColor: "#038A3933",
  },
];
