import React from 'react'
import Typography from '../../atoms/typograpy'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Button from '../../atoms/button'
const ResumeContainer=styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:"center",
    margin:"300px",
    gap:'20px',
    background:'green',
    alignItems:"center",
    height:'400px',

})
const Resume = () => {
  const myResume = () => {
   // eslint-disable-next-line no-restricted-globals
   location.replace("https://drive.google.com/drive/folders/1gLJIj5NxBgHxdhAn25vLUcOwGf6Ihlev");
  }

  return (
    <ResumeContainer>
      <Typography variant='h4'>
        Do you want to see my resume? Click on the link below 🥰
      </Typography>
      <Button variant='contained' onClick={myResume}>My Resume Link</Button>
    </ResumeContainer>
  )
}

export default Resume;
