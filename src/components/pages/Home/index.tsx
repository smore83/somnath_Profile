import styled from '@emotion/styled'
import { Box, Grid, Icon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Typography from '../../atoms/typograpy'
import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Face } from '@mui/icons-material';
import { IconComp } from '../../atoms/Image';
import LinkedPic from "../../../icons/icons8-linkedin-60.png"
import MyPhoto from "../../../icons/MyPhoto.png";
import FacebookPic from "../../../icons/icons8-facebook-48.png"
import InstagramPic from "../../../icons/icons8-instagram-48.png"
import TwitterPic from "../../../icons/icons8-twitter-48.png"
import { DESCRIPTION } from '../../../utils/constant';
import Button from '../../atoms/button';
import LandingPageTemplate from '../../templates/Layout';
import Header from '../../molecules/Header';

const HomeGrid = styled(Grid)({
  display: "flex",
  justifyContent: 'center',
  boxShadow: '30px 30px 20px rgba(0, 0, 0, 0.3)',
  height:'89vh',
  width:'100%',
  background:'linear-gradient(120deg, #FF758C, #FF7EB3, #A7C0FD, #6D5BBA)',
  '@media (max-width: 768px)': {
   
  },
})
const DesignGrid=styled(Grid)({
  display:'flex',
  marginTop:'250px',
  // gap:'40px',
  // top:'40%',
  marginLeft:'200px',
  width:'43.75rem',
  justifyContent:"space-between",
  '@media (max-width: 768px)': {
  
    width: 'auto',
    height:'auto',
    marginLeft: '30px',
    marginRight: 'auto',
     transform: 'none',
  },
})
const ImageBox=styled(Box)({
 

})
const TypoBox=styled(Box)({
  display: 'table-column',
})

const HideImageBox = styled(Box)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Home = () => {
  const [talentIndex, setTalentIndex] = useState(0);
  const talents = ["Web Developer","Thinker", "Learner", "Engineer", "Programmer", "Helper"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTalentIndex((prevIndex) => (prevIndex + 1) % talents.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [talents.length]);

  return (
    <HomeGrid>
      <DesignGrid>
      <TypoBox>
      <Typography  variant='h4'>Hello 👋</Typography>
      <Typography variant='h4'>I'm Somnath More</Typography>
      <Typography variant='h6'>I am a {talents[talentIndex]}</Typography>
      <Typography variant='body1'>{DESCRIPTION}</Typography>
      <Button sx={{background:'black'}} variant="contained">{"Download CV"}</Button>
      <Box sx={{display:'flex' ,gap:'15px',marginTop:'15px'}}>
      <IconComp src={LinkedPic} height='30px' width='30px' alt='my image'/>
      <IconComp src={FacebookPic} height='30px' width='30px' alt='my image'/>
      <IconComp src={InstagramPic} height='30px' width='30px' alt='my image'/>
      <IconComp src={TwitterPic} height='30px' width='30px' alt='my image'/>
   
      </Box>


      </TypoBox>
       
       <HideImageBox>
      <ImageBox>
      <IconComp src={MyPhoto} sx={{ boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.3)',}} height='400px' width='350px' alt='my image'/>
      </ImageBox>
      </HideImageBox>
      </DesignGrid>
    </HomeGrid>
  )
}



const HomePage = () => {
  return (
   <LandingPageTemplate content={<Home/>}/>
  )
}

export default HomePage
