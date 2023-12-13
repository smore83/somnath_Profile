import styled from "@emotion/styled";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
interface MyProject {
  id: number;
  title: string;
  description: string;
  tools: string;
  link: string;
  published: string;
}
const myProjects: MyProject[] = [
  {
    id: 1,
    title: "Html To Do List",
    description:
      "This is the description of Project 1. It is a web application built using React and Node.js.",
    tools: "React, Node.js, Express, MongoDB",
    link: "https://example.com/project1",
    published: "23-09-2021",
  },
  {
    id: 2,
    title: "JS To Do List",
    description:
      "Project 2 is a mobile app for iOS and Android. It was developed using React Native.",
    tools: "React Native, JavaScript, Firebase",
    link: "https://example.com/project2",
    published: "23-09-2023",
  },
  {
    id: 3,
    title: "Html To Do List",
    description:
      "This is the description of Project 1. It is a web application built using React and Node.js.",
    tools: "React, Node.js, Express, MongoDB",
    link: "https://example.com/project1",
    published: "23-09-2022",
  },
  {
    id: 4,
    title: "JS To Do List",
    description:
      "Project 2 is a mobile app for iOS and Android. It was developed using React Native.",
    tools: "React Native, JavaScript, Firebase",
    link: "https://example.com/project2",
    published: "23-09-2023",
  },
];
const ProjectListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "50rem",
  width: "100%",
  paddingTop: "0.9375rem",
});


const Projects = () => {
  return (
    <ProjectListContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{"Title"}</TableCell>
            <TableCell>{"Description"}</TableCell>
            <TableCell>{" Tools"}</TableCell>
            <TableCell>{"📅 Published Date"}</TableCell>
            <TableCell>{"🔗 Link"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myProjects.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>{data.tools}</TableCell>
              <TableCell>{data.published}</TableCell>
              <TableCell>{data.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ProjectListContainer>
  );
};

export default Projects;
