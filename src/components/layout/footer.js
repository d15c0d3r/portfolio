import { Box, Center, Stack, Text, Link } from "@chakra-ui/react";

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import ThemeContext from "../../store/contexts/theme";

import { useContext } from "react";

const Footer = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Box bg={bgColor} minH="7vh" w="100%" boxShadow="xl">
      <Stack dir="column" p="20px">
        <Center>
          <Text fontSize={["20px", "33px"]}>Around the Web</Text>
        </Center>
        <Center>
          <Stack direction="row">
            <Center>
              <Link href="https://www.linkedin.com/in/naga-narasimha-reddy-challa-4ba651216/">
                <AiFillLinkedin size="50px" />
              </Link>
            </Center>
            <Link href="https://github.com/disc0der">
              <Center>
                <AiFillGithub size="50px" />
              </Center>
            </Link>
            <Link href="https://www.instagram.com/nax_ingram/">
              <Center>
                <AiFillInstagram size="50px" />
              </Center>
            </Link>
          </Stack>
        </Center>
      </Stack>
    </Box>
  );
};

export default Footer;
