import styled from "@emotion/styled";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import LandingPageTemplate from "../../templates/Layout";
import TextField from "../../atoms/textfield";
import { SEARCH_TEXT } from "../../../utils/constant";
import { myProjects } from "../../../utils/api";
export interface MyProject {
  id: number;
  title: string;
  description: string;
  tools: string;
  link: string;
  published: string;
}

const ProjectListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "50rem",
  width: "100%",
  paddingTop: "0.9375rem",
  background:'linear-gradient(120deg, #FF758C, #FF7EB3, #A7C0FD, #6D5BBA)'
});


const Projects = () => {
  const [searchData,setSearchData]=useState("");
  return (
    <ProjectListContainer>
      <TextField placeholder={SEARCH_TEXT} onChange={(e)=>setSearchData(e.target.value)}/>
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
          {myProjects.filter((project)=>project.title.toLowerCase().includes(searchData) || project.tools.toLowerCase().includes(searchData)).map((data) => (
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


const ProjectPage = () => {
  return (
   <LandingPageTemplate content={<Projects/>}/>
  )
}

export default ProjectPage
