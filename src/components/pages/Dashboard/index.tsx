import React from 'react';
import { Grid, styled, Box, Paper } from "@mui/material";

import { PORTFOLIO } from '../../../utils/constant';
import Typography from '../../atoms/typograpy';
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
const OuterContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  height: '70px',
  width: '100%',
  background: 'linear-gradient(45deg, #F8D800, #43CBFF)',
});

const LeftContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flex: 1,
  cursor:'pointer',

});

const RightContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flex: 2,
  // Add this CSS property to keep the menu items in one line
  flexWrap: 'wrap',
});


const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <OuterContainer>

      <RightContainer>
       <Typography variant='h4' children={PORTFOLIO} />
      </RightContainer>
      <LeftContainer>
     <Typography variant="h6" onClick={()=>navigate('/')}>Home</Typography>
        <Typography variant='h6' onClick={()=>navigate('/about')}>About Me</Typography>
        <Typography variant='h6' onClick={()=>navigate('/project')}>Projects</Typography>
        <Typography variant='h6' onClick={()=>navigate('/contact')}>Contact Me</Typography>
        <Typography variant='h6' onClick={()=>navigate('/resume')}>Resume</Typography>
      </LeftContainer>
      
    </OuterContainer>
  );
}

export default Dashboard;
