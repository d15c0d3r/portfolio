import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Head from "next/head";
import Link from "next/link";

const MotionCenter = motion(Center);

const More = () => {
  return (
    <>
      <Head>
        <title>Naga Narasimha | More</title>
        <meta
          name="description"
          content="This is the More.. Page for the Naga Narasimha's Portfolio"
        />
      </Head>
      <Box h="100vh">
        <Center h="100%">
          <Stack spacing="50px" w={["90%", "80%", "70%", "60%"]}>
            <Link href="/more/worksamples">
              <a>
                <MotionCenter
                  w="100%"
                  h="10vh"
                  bg="teal.500"
                  borderRadius="5px"
                  _hover={{ bgGradient: "linear(to-r , #66ff99, teal.500)" }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text
                    as="kbd"
                    color="#333300"
                    fontSize={["20px", "30px", "40px", "40px"]}
                    fontWeight="bold"
                  >
                    {"<"}Work Samples{"/>"}
                  </Text>
                </MotionCenter>
              </a>
            </Link>

            <Link href="/more/freetime">
              <a>
                <MotionCenter
                  w="100%"
                  h="10vh"
                  bg="teal.500"
                  borderRadius="5px"
                  _hover={{ bgGradient: "linear(to-r , #66ff99, teal.500)" }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text
                    as="kbd"
                    color="#333300"
                    fontSize={["20px", "30px", "40px", "40px"]}
                    fontWeight="bold"
                  >
                    {"<"}Hobbies{"/>"}
                  </Text>
                </MotionCenter>
              </a>
            </Link>
            <Link href="/more/codingprofile">
              <a>
                <MotionCenter
                  w="100%"
                  h="10vh"
                  bg="teal.500"
                  borderRadius="5px"
                  _hover={{ bgGradient: "linear(to-r , #66ff99, teal.500)" }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text
                    as="kbd"
                    color="#333300"
                    fontSize={["20px", "30px", "40px", "40px"]}
                    fontWeight="bold"
                  >
                    {"<"}Coding Profile{"/>"}
                  </Text>
                </MotionCenter>
              </a>
            </Link>
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default More;
