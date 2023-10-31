import React from 'react';
import { Grid, styled, Box, Paper } from "@mui/material";

import { PORTFOLIO } from '../../../utils/constant';
import Typography from '../../atoms/typograpy';
import { useNavigate } from "react-router-dom";
const OuterContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  height: '70px',
  width: '100%',
  background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
});

const LeftContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flex: 1,
  cursor:'pointer'
});

const RightContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flex: 2,
  // Add this CSS property to keep the menu items in one line
  flexWrap: 'wrap',
});

const IconStyle = {
  marginRight: '5px',
};

const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <OuterContainer>
      <RightContainer>
        <Typography variant='h4' children={PORTFOLIO} color="white" />
      </RightContainer>
      <LeftContainer>
        <Typography variant='body2' onClick={()=>navigate('/somnath_Profile/home')}> Home</Typography>
        <Typography variant='body2' onClick={()=>navigate('/somnath_Profile/about')}> About Me</Typography>
        <Typography variant='body2' onClick={()=>navigate('/somnath_Profile/project')}> Projects</Typography>
        <Typography variant='body2' onClick={()=>navigate('/somnath_Profile/contact')}> Contact Form</Typography>
        <Typography variant='body2'> Download Resume</Typography>
      </LeftContainer>
      
    </OuterContainer>
  );
}

export default Dashboard;
