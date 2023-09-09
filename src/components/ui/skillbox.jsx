import { Box, Stack, Image, Center, Badge, Text } from "@chakra-ui/react";

const Skillbox = (props) => {
  const { title, imgSrc } = props;
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Stack spacing={"20px"} direction="column">
          <Center>
            <Image
              src={`/skills/${imgSrc}`}
              alt="hello"
              p="10px"
              w="200px"
              h="200px"
            />
          </Center>
          <Badge borderRadius="2px" py="4" px="10" colorScheme="teal">
            <Center>
              <Text fontSize={"15px"}>{title}</Text>
            </Center>
          </Badge>
        </Stack>
      </Box>
    </>
  );
};

export default Skillbox;
