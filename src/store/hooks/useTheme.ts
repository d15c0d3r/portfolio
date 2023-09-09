import { useContext } from "react";
import ThemeContext, { TTheme } from "../theme";

export const useTheme = (): TTheme => {
  const { bgColorMode, colorMode, toggleColorMode } =
    useContext<TTheme>(ThemeContext);
  return { bgColorMode, toggleColorMode, colorMode };
};

export default useTheme;
