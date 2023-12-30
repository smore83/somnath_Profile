import React from "react";
import Typography from "../../atoms/typograpy";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Button from "../../atoms/button";
import LandingPageTemplate from "../../templates/Layout";

const ResumeBox = styled(Box)({
  display: "flex",
  height: "90vh",
  width: "100%",

  background:'linear-gradient(120deg, #FF758C, #FF7EB3, #A7C0FD, #6D5BBA)',

});
const ResumeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "400px",
  height: "500px",
  width: "1000px",
  gap: "20px",
  alignItems: "center",
  boxShadow: "30px 30px 20px rgba(0, 0, 0, 0.3)",
  '@media (max-width: 768px)': {
    width: 'auto',
    height:'auto',
    marginLeft: '30px',
    marginRight: 'auto',
     transform: 'none',
     boxShadow:'none',
     paddingBottom:'0.625rem',
     marginTop:'2px'
  },
 
});
const Resume = () => {
  const myResume = () => {
    // eslint-disable-next-line no-restricted-globals
    location.replace(
      "https://drive.google.com/drive/folders/1gLJIj5NxBgHxdhAn25vLUcOwGf6Ihlev"
    );
  };

  return (
    <ResumeBox>
      <ResumeContainer>
        <Typography variant="h4">
          Do you want to see my resume? Click on the link below 🥰
        </Typography>
        <Button variant="contained" onClick={myResume}>
          My Resume Link
        </Button>
      </ResumeContainer>
    </ResumeBox>
  );
};

const ResumePage = () => {
  return (
    
      <LandingPageTemplate content={<Resume />}/>
        
      
   
  );
};

export default ResumePage;
