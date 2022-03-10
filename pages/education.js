import { Text, Divider, Stack } from "@chakra-ui/react";

const Education = () => {
  return (
    <>
      <Stack
        dir="column"
        spacing={"15px"}
        mt="50px"
        ml={["50px", "90px", "90px", "200px"]}
        mr={["50px", "90px", "90px", "200px"]}
        mb="50px"
      >
        <Text fontSize={["22px", "44px"]} fontWeight="bold">
          Graduation
        </Text>
        <Text fontSize={["15px", "15px", "20px", "25px"]}>
          I{"'"}m currently graduating in BVRaju Institute of Technology located
          in Narsapur, Telangana. I majored in Computer Science Engineering , so
          several of my courses directly prepared me for the role related to
          Computers. Each course in my major required extensive research and
          writing. Some of my electives are Cloud Computing, Machine Learning,
          Linux Programing, Design Patterns etc. One of my academic project is
          RealEstate Website, project in which I had to prepare documents,
          search for technologies and research on them to implement the website,
          like React, and the kind of databases to use like MongoDB or MySQL.
          This course gave me the real-time experience of how to interact with
          the clients, know their requirements and proceed with the
          implementation of the product. As in final year, currently my team and
          me are working on a block chain project. I would say that my GPA is
          not reflective of the quality of work I can produce because I{"'"}ve
          focused on the Core CS concepts like Data Structures and Algorithms,
          DataBase Management Systems, Operating Systems, and all of my
          Electives.
        </Text>
        <Divider borderTopWidth="2px" borderColor={"#e0847e"} mb="0px" />
        <Text fontSize={["22px", "44px"]} fontWeight="bold">
          Higher Secondary
        </Text>
        <Text fontSize={["15px", "15px", "20px", "25px"]}>
          I{"'"}ve studied my higher secondary in FIITJEE located in kukatpally,
          Telangana. Chose PMC as my stream in 11th and 12th, worked extensively
          on my Mathematical skills. Physics and Chemistry were also where I
          {"'"}ve focused on too. Clearing JEE Mains, but couldnt quite cross
          the bar to enter any NITs. That said, qualified to write IITJEE, but
          couldn{"'"}t able to crack it. I{"'"}ve also given TSEAMCET 2018 and
          secured a rank of ~7500. I never look back to things which I would
          have done better. Instead, focus on what ahead.
        </Text>
        <Divider borderTopWidth="2px" borderColor={"#e0847e"} mb="0px" />
        <Text fontSize={["22px", "44px"]} fontWeight="bold">
          Secondary
        </Text>
        <Text fontSize={["15px", "15px", "20px", "25px"]}>
          I{"'"}ve completed my schooling in Keshava Reddy School, located in
          Sangareddy, Telangana. My schooling taught me everything needed for me
          to be a better as a student, and also as a person. Participating and
          Winning in a lot of contests and competitions like Essay writing,
          Painting, Olympiads, Tattoo Making, etc, improved me to think
          creatively all the time. The competition was too lively and It{"'"}s
          been a great time studying in School.
        </Text>
      </Stack>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Education;
