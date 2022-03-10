import { SimpleGrid, Box } from "@chakra-ui/react";

import Skillbox from "../src/components/ui/skillbox";

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
      <Box mt="120px" ml="120px" mr="120px" mb="120px">
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
