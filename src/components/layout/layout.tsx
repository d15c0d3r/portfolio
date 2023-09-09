"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import { ThemeContextProvider } from "../../store/theme";
import { ReactNode } from "react";

type TLayout = {
  children: ReactNode;
};
const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Box minH={"100vh"}>{children}</Box>
        <Footer />
      </ThemeContextProvider>
    </>
  );
};

export default Layout;
