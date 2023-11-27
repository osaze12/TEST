import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Budget from "./Pages/Budget";
import MobileNavigation from "./components/MobileNavigation";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import DesktopNavigation from "./components/DesktopNavigation";
import { useEffect, useState } from "react";

function App() {
  const [isMobileDevice] = useMediaQuery("(max-width:685px)");
  const [windowSize, setWindowSize] = useState<number | null>(null);

  // to get browser width, when user resizes his/her browser
  useEffect(() => {
    addEventListener("resize", (event: UIEvent) => {
      const size = event?.target as Window;
      setWindowSize(size.outerWidth);
    });
  }, []);
  return (
    <BrowserRouter>
      <Flex>
        {isMobileDevice || (windowSize && windowSize <= 685) ? (
          <MobileNavigation />
        ) : (
          <DesktopNavigation />
        )}

        <Flex flexDir={"column"} w={["100%", "80%", "80%", "100%"]}>
          <Routes>
            <Route path={"/"} element={<Budget />} />
          </Routes>
        </Flex>
      </Flex>

      {/* add height so some info are not hidden under the  mobile fixed navigation */}
      {isMobileDevice || (windowSize && windowSize <= 685) ? (
        <Box h="100px" w="100%" />
      ) : (
        ""
      )}
    </BrowserRouter>
  );
}

export default App;
