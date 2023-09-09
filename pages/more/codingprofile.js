import { Box, Stack, Text, Center, Link, Image } from "@chakra-ui/react";

import Head from "next/head";

const CodingProfile = () => {
  return (
    <>
      <Head>
        <title>Naga Narasimha | Coding Profile</title>
        <meta
          name="description"
          content="This is the Coding Profile Page for the Naga Narasimha's Portfolio"
        />
      </Head>
      <Box m="44px" minH="50vh">
        <Stack direction="column" spacing="0px">
          <Center>
            <Text fontSize={["33px", "55px"]} fontWeight="bold" mb="100px">
              Coding Profile
            </Text>
          </Center>

          <Center>
            <Stack spacing="20px">
              <Center>
                <Text fontSize={["22px", "44px"]} fontWeight="bold">
                  <Center>
                    <Image
                      mt="0px"
                      borderRadius={"5px"}
                      src={"/hackerrank_logo.png"}
                      alt="TEKSystems"
                      loading="lazy"
                      shadow={"xl"}
                      type="solid"
                      mb="10px"
                    />
                  </Center>
                  HACKERRANK
                </Text>
              </Center>

              <Center>
                <Stack>
                  <Center>
                    <Text fontSize={["15px", "15px", "20px", "25px"]}>
                      <Link href="https://www.hackerrank.com/certificates/65778adf0e06">
                         Problem Solving Intermediate (6 stars)
                      </Link>
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize={["15px", "15px", "20px", "25px"]}>
                      <Link href="https://www.hackerrank.com/certificates/bacd9dcb8e1d">
                         Python Intermediate (5 stars)
                      </Link>
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Stack>
          </Center>

          <Center>
            <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
              <Link href="https://www.codechef.com/users/discoder">
                Codechef Profile
              </Link>
            </Text>
          </Center>

          <Center>
            <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
              <Link href="https://www.interviewbit.com/profile/discoder">
                Interviewbit Profile
              </Link>
            </Text>
          </Center>
        </Stack>
      </Box>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default CodingProfile;
