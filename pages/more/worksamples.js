import { Box, Stack, Text, Center, Link } from "@chakra-ui/react";

const WorkSamples = () => {
  return (
    <>
      <Box m={["22px", "33px", "44px"]} minH="100vh">
        <Stack direction="column">
          <Center>
            <Text fontSize={["33px", "55px"]} fontWeight="bold">
              My Works so far..
            </Text>
          </Center>
          <Center>
            <Stack direction="column" w="80%">
              <Text fontSize={["22px", "44px"]} fontWeight="bold">
                RealEstate Website
              </Text>
              <Text fontSize={["15px", "15px", "20px", "25px"]}>
                A Deployed Sample RealEstate website where authenticated users
                can fetch the land details which they want to rent or buy, or
                they can upload the land details which they wanna sell or rent.
                Its an interaction between users and no data is pre-injected
                into the database. Being used MERN stack at the start, which
                includes MonogDb Atlas as to store the data, and project ended
                up without any styling. And later, having switched to Next.js.
                The UI is created using ChakraUI and MySQL runs this project
                currently. Users also have previleges to update their profile
                and delete their uploaded land details.
              </Text>
              <Text
                fontSize={["15px", "15px", "20px", "25px"]}
                as="i"
                color={"teal"}
              >
                Work Repository :{" "}
                <Link href="https://github.com/thatviper/mini-realestate-app">
                  <a>https://github.com/thatviper/mini-realestate-app</a>
                </Link>
              </Text>
              <Text
                fontSize={["15px", "15px", "20px", "25px"]}
                as="i"
                color={"teal"}
              >
                Deployed Here :{" "}
                <Link href="https://mini-realestate-app.vercel.app/">
                  <a>https://mini-realestate-app.vercel.app/</a>
                </Link>
              </Text>
            </Stack>
          </Center>

          <Center>
            <Stack spacing={"10px"} direction="column" w="80%">
              <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
                Automated bot for{" "}
                <Link href="https://empire.goodgamestudios.com">
                  GoodGameEmpire
                </Link>
              </Text>
              <Text mt="50px" fontSize={["15px", "15px", "20px", "25px"]}>
                GoodGameEmpire is an NPC and a PC strategy game involving
                different events to attack a target or to defend an owned one.
                That said, so to automate the tasks and events perfomed, A bot
                handling keyboard and mouse movements to track down the
                co-ordinates and current state of the game simultaneously.
                OpenCV, PIL also used to detect the image so that, if it is
                present.. an event/function will be called. PyAutoGUI is used to
                develope the Bot and has an accuracy of 94% and which saves 10+
                hours of my time each day in automating and syncing the actions
                wrt to game POV and keyboard-mouse actions.
              </Text>
            </Stack>
          </Center>

          <Center>
            <Stack spacing={"10px"} direction="column" w="80%">
              <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
                Others
              </Text>
              <Text mt="50px" fontSize={["15px", "15px", "20px", "25px"]}>
                Few small projects I've done are WebScraping using
                beautifulsoup, TicTacToe, URL Shortener & FoodCart using React,
                Current Portfolio using Next.js. Can be found on my Github
              </Text>
              <Text
                fontSize={["15px", "15px", "20px", "25px"]}
                as="i"
                color={"teal"}
              >
                Github Link :{" "}
                <Link href="https://github.com/thatviper">
                  <a>https://github.com/thatviper</a>
                </Link>
              </Text>
            </Stack>
          </Center>

          <Center>
            <Stack spacing={"10px"} direction="column" w="80%">
              <Text mt="50px" fontSize={"35px"} fontWeight="bold">
                Final Year Project
              </Text>
              <Text mt="50px" fontSize={["15px", "15px", "20px", "25px"]}>
                Currently working on BlockChain technology to secure academic
                certificate and for accurate management and to avoid forge
                certificate we are converting all certificates into digital
                signatures and this digital signatures will be stored in
                Blockchain server as this Blockchain server support tamper proof
                data storage and nobody can hack or alter its data and if by an
                chance if its data alter then verification get failed at next
                block storage and user may get intimation about data alter. In
                Blockchain technology same transaction data stored at multiple
                server with hash code verification and if data alter at one
                server then it will detected from other server as for same data
                hash code will get different.
              </Text>
            </Stack>
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

export default WorkSamples;
