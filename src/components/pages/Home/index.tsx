import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React from 'react'
import Typography from '../../atoms/typograpy'
const HomeGrid=styled(Grid)({
  display:"flex",
  justifyContent:'center'
})
const Home = () => {
  return (
    <HomeGrid>
      <Typography variant='h2'> 🙋‍♀️ Hey Namaste You !!🤝 </Typography>

    </HomeGrid>
  )
}

export default Home