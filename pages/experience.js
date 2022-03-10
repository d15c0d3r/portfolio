import { Text, Center, Divider, Stack, Image } from "@chakra-ui/react";
import Head from "next/head";
import { motion } from "framer-motion";

import RolePopover from "../src/components/ui/rolepopover";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Naga Narasimha | Experience</title>
        <meta
          name="description"
          content="This is the Experience Page for the Naga Narasimha's Portfolio"
        />
      </Head>
      <Stack dir="column" spacing={"20px"} mt="20px">
        <Center>
          <Text fontSize={["22px", "22px", "33px", "44px"]} fontWeight="bold">
            I{"'"}m a Fresher who{"'"}ll be graduating in 2022
          </Text>
        </Center>
        <Center w="100%">
          <Text fontSize={["22px", "22px", "30px", "35px"]}>
            long way to go..
          </Text>
        </Center>
        <Stack>
          <Center height="10vh">
            <Divider
              borderLeftWidth="4px"
              h="100%"
              orientation="vertical"
              borderColor={"#e0847e"}
              mb="0px"
            />
          </Center>
          <Center>
            <Stack spacing={"10px"}>
              <motion.div
                initial={{ opacity: 0, x: 180 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.44 }}
              >
                <Image
                  mt="0px"
                  borderRadius={"5px"}
                  src={"/teksystems_logo.png"}
                  alt="TEKSystems"
                  loading="lazy"
                  shadow={"xl"}
                  type="solid"
                  mb="10px"
                />
                <Center>
                  <RolePopover />
                </Center>
              </motion.div>
            </Stack>
          </Center>
        </Stack>
      </Stack>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Experience;
