import { Stack, Text, Box, IconButton, Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import useTheme from "../../store/hooks/useTheme";

type TLink = {
  href: string;
  title: string;
};
const links: TLink[] = [
  { href: "", title: "/" },
  { href: "experience", title: "Experience" },
  { href: "education", title: "Education" },
  { href: "skills", title: "Skills" },
  { href: "worksamples", title: "WorkSamples" },
];

const Navbar: React.FC<{}> = () => {
  const { bgColorMode, toggleColorMode, colorMode } = useTheme();

  return (
    <>
      <Box bg={bgColorMode}>
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
                colorScheme={bgColorMode}
                aria-label="color mode toggle button"
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
