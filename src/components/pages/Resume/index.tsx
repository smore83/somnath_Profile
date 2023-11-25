import React from 'react'
import Typography from '../../atoms/typograpy'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Button from '../../atoms/button'
const ResumeBox=styled(Box)({
  display:'flex',
  height:'90vh',
  width:'100%',
  background:'linear-gradient(pink,green,yellow)'
})
const ResumeContainer=styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:"center",
    marginLeft:"400px",
    height:"500px",
    width:"1000px",
    gap:'20px',
    alignItems:"center",
    backgroundColor:'linear-gradient(pink,green,yellow)',
    boxShadow: '30px 30px 20px rgba(0, 0, 0, 0.3)',
})
const Resume = () => {
  const myResume = () => {
   // eslint-disable-next-line no-restricted-globals
   location.replace("https://drive.google.com/drive/folders/1gLJIj5NxBgHxdhAn25vLUcOwGf6Ihlev");
  }

  return (
    <ResumeBox>
    <ResumeContainer>
      <Typography variant='h4'>
        Do you want to see my resume? Click on the link below 🥰
      </Typography>
      <Button variant='contained' onClick={myResume}>My Resume Link</Button>
    </ResumeContainer>
    </ResumeBox>
  )
}

export default Resume;
