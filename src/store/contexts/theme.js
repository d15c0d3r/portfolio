import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { createContext } from "react";

const ThemeContext = createContext({
  bgColor: null,
  toggleColorMode: () => {},
  colorMode: null,
});

export const ThemeContextProvider = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue("#c9ccd1", "#262729");

  return (
    <ThemeContext.Provider value={{ bgColor, toggleColorMode, colorMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
