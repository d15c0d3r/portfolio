import { Stack, Text, Box, IconButton, Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import Link from "next/link";
import ThemeContext from "../../store/contexts/theme";

import { useContext } from "react";

const links = [
  { href: "", title: "/" },
  { href: "experience", title: "Experience" },
  { href: "education", title: "Education" },
  { href: "skills", title: "Skills" },
  { href: "worksamples", title: "WorkSamples" },
];

const Navbar = () => {
  const { bgColor, toggleColorMode, colorMode } = useContext(ThemeContext);

  return (
    <>
      <Box bg={bgColor}>
        <Center>
          <Stack
            direction={["column", "column", "row"]}
            spacing={["20px", "20px", "50px"]}
            m="10px"
          >
            <Center>
              <IconButton
                onClick={toggleColorMode}
                icon={
                  colorMode == "light" ? (
                    <MoonIcon color={"black"} />
                  ) : (
                    <SunIcon color={"white"} />
                  )
                }
                colorScheme={bgColor}
              />
            </Center>
            {links.map((link) => (
              <Center key={link.title}>
                <Link href={`/${link.href}`}>
                  <Text fontSize={["30px", "30px", "20px"]}>{link.title}</Text>
                </Link>
              </Center>
            ))}
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export default Navbar;
