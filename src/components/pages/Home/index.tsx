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
import { DESCRIPTION, DOWNLOAD_CV } from '../../../utils/constant';
import Button from '../../atoms/button';
import LandingPageTemplate from '../../templates/Layout';
import Header from '../../molecules/Header';
import { Typewriter } from 'react-simple-typewriter'

const HomeGrid = styled(Grid)({
  display: "flex",
  justifyContent: 'center',
  boxShadow: '30px 30px 20px rgba(0, 0, 0, 0.3)',
  height:'89vh',
  width:'100%',
  
  background:'linear-gradient(120deg, #FF758C, #FF7EB3, #A7C0FD, #6D5BBA)',
})

const DesignGrid=styled(Grid)({
  display:'flex',
  marginTop:'250px',
  gap:'30px',
  marginLeft:'200px',
  width:'43.75rem',
  justifyContent:"space-between",
  '@media (max-width: 768px)': {
  
    width: 'auto',
    height:'auto',
    marginLeft: '30px',
    marginRight: '20px',
     transform: 'none',
  },
})
const ImageBox=styled(Box)({
 display:'flex'

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


  const handleType = (count: number) => {

    console.log(count);
  }
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <HomeGrid>
      <DesignGrid>
      <TypoBox>
      <Typography  variant='h4'>Hello 👋</Typography>
      <Typography variant='h4'>I'm Somnath More</Typography>
      <Typography variant='h6'>I am a{" "}
      <span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={talents}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </Typography>
      
      <Typography variant='body1'>
{
  DESCRIPTION
}
</Typography> 
      <Button sx={{display:'flex',width:'100%', background:'black',marginTop:'1.25rem'}} variant="contained">{DOWNLOAD_CV}</Button>
      <Box sx={{display:'flex' ,justifyContent:'space-evenly', gap:'1.25rem',marginTop:'1.25rem'}}>
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
