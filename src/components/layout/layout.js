"use client";

import { Box } from "@chakra-ui/react";

import Navbar from "./navbar";
import Footer from "./footer";
import { ThemeContextProvider } from "../../store/contexts/theme";

const Layout = (props) => {
  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Box minH={"100vh"}>{props.children}</Box>
        <Footer />
      </ThemeContextProvider>
    </>
  );
};

export default Layout;
