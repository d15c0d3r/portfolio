import { Box, Stack, Text, Center } from "@chakra-ui/react";

const FreeTime = () => {
  return (
    <>
      <Box m={["22px", "33px", "44px"]} minH="100vh">
        <Stack direction="column">
          <Center>
            <Text fontSize={["22px", "44px", "55px"]} fontWeight="bold">
              Hobbies & Interests
            </Text>
          </Center>
          <Center>
            <Stack direction="column" w="80%">
              <Text fontSize={["22px", "44px"]} fontWeight="bold">
                Sports
              </Text>
              <Text fontSize={["15px", "15px", "20px", "25px"]}>
                Iam a greatest sports fan especially Cricket, and I almost watch
                all formats of the game including leagues.. Its been my
                addiction since my childhood and it remained to be. Iam one of a
                greatest fan of Virat Kohli, not only as a batsmen but also as a
                personality. His aggression and Passion for game is commendable.
                I support Royal Challengers banglore in IPL, now later and
                forever.. I also watch Kabaddi, Hockey and Badminton. I play
                casual Badminton and cricket if my time permits. I've captained
                a cricket team in School level in my 10th class Sports meet and
                we ended up bottom in that tournament.
              </Text>
            </Stack>
          </Center>

          <Center>
            <Stack spacing={"10px"} direction="column" w="80%">
              <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
                Music
              </Text>
              <Text mt="50px" fontSize={["15px", "15px", "20px", "25px"]}>
                I listen to a lot of music in Telugu, English and occasionally
                Hindi as well, covering up almost all the genres i.e Pop, Rap,
                Melody, etc., I love to listen only to Instrumentals as well.
                Few of my favourite artists are Eminem, the Weekend, Anirudh
                Ravichander, Harris Jayraj, Yuvan Shankar, Drake, Travis Scott,
                xxtentacion, The Score, Imagine Dragons, Nucleya, Rustage,
                Joyner Lucas, etc.,
              </Text>
            </Stack>
          </Center>
          <Center>
            <Stack spacing={"10px"} direction="column" w="80%">
              <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
                Media
              </Text>
              <Text mt="50px" fontSize={["15px", "15px", "20px", "25px"]}>
                I watch movies occasionally but my favourite actor always been
                Suriya Sivakumar. Surfing youtube, scrolling memes is what I do
                in my quick free time. I watch Anime and Webseries if they are
                truely connected to me and has a great plot. Few Anime's to
                mention are Naruto, Seven Deadly Sins, Parasite, Assassination
                Classroom, Bleach, Death Note, Boruto, etc.
              </Text>
            </Stack>
          </Center>

          <Center>
            <Stack spacing={"10px"} direction="column" w="80%">
              <Text mt="50px" fontSize={["22px", "44px"]} fontWeight="bold">
                Others..
              </Text>
              <Text mt="50px" fontSize={["15px", "15px", "20px", "25px"]}>
                I also love to capture great photos and I use my Oneplus 6 for
                it. Iam an occasional memer and a poet, and I'd rather call my
                poems as rap lyrics.
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

export default FreeTime;
