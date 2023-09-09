import { SimpleGrid, Box } from "@chakra-ui/react";
import Head from "next/head";

import Skillbox from "../../src/components/ui/skillbox";

const skills = [
  { title: "React", imgSrc: "react.png" },
  { title: "Next", imgSrc: "next.png" },
  { title: "Java", imgSrc: "java.png" },
  { title: "Python", imgSrc: "python.png" },
  { title: "JavaScript", imgSrc: "javascript.png" },
  { title: "MongoDB", imgSrc: "mongodb.png" },
  { title: "Object Oriented Programing", imgSrc: "oops.png" },
  { title: "MySQL", imgSrc: "mysql.png" },
  { title: "DataBase Management Systems", imgSrc: "databasemanagement.png" },
  { title: "Node ", imgSrc: "node.png" },
];

const Skills = () => {
  return (
    <>
      <Head>
        <title>Naga Narasimha | Skills</title>
        <meta
          name="description"
          content="This is the Skills Page for the Naga Narasimha's Portfolio"
        />
      </Head>
      <Box m={["50px", "100px", "120px"]}>
        <SimpleGrid minChildWidth="250px" spacing="50px" mb="20px">
          {skills.map((skill) => (
            <Skillbox
              title={skill.title}
              imgSrc={skill.imgSrc}
              key={skill.title}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skills;
