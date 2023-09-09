import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, createContext } from "react";

type Light = "#c9ccd1";
type Dark = "#262729";
type TLightORDark = Light | Dark;
const [light, dark]: [Light, Dark] = ["#c9ccd1", "#262729"];

export type TTheme = {
  bgColorMode: TLightORDark;
  colorMode: "light" | "dark";
  toggleColorMode: () => void;
};
const ThemeContext = createContext<TTheme>({
  bgColorMode: light,
  colorMode: "light",
  toggleColorMode: () => {},
});

type TThemeCtxProviderProps = {
  children: ReactNode;
};
export const ThemeContextProvider: React.FC<TThemeCtxProviderProps> = ({
  children,
}) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColorMode: TLightORDark = useColorModeValue<Light, Dark>(light, dark);

  return (
    <ThemeContext.Provider value={{ bgColorMode, colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
