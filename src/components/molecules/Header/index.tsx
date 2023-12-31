import React, { useState } from 'react';
import { styled, Paper, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavaData, PORTFOLIO } from '../../../utils/constant';
import { useNavigate } from "react-router-dom";
import Button from '../../atoms/button';

const OuterContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  height: '70px',
  width: '100%',
  background: 'linear-gradient(45deg, #F8D800, #43CBFF)',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
});

const LeftContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap:'2%',
  flex: 1,
});

const RightContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flex: 2,
  flexWrap: 'wrap',
});

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path:any) => {
    navigate(`/somnath_Profile${path}`);
    if (isMobile) {
      setDrawerOpen(false); // Close the drawer after selecting an option in mobile view
    }
  };

  return (
    <OuterContainer>
      <RightContainer>
        <Typography variant='h4' children={PORTFOLIO} />
      </RightContainer>

      {isMobile ? (
        
        
        <LeftContainer >
        <IconButton color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
           <MenuIcon />
         </IconButton>
          <Drawer   anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
           <Box >
            <List>
              {NavaData.map((path, index) => (
                <ListItem key={index} onClick={() => handleNavigation(path)}>
                  <ListItemText primary={path === '/' ? 'Home' : path.slice(1).replace('_', ' ')} />
                </ListItem>
              ))}
            </List>
            </Box>
          </Drawer>
        </LeftContainer>
       
      ) : (
        <LeftContainer>
          <Button onClick={() => handleNavigation('/')}  children={ <Typography variant="h6" >{"Home"}</Typography> }/>
          <Button onClick={() => handleNavigation('/about')} children={ <Typography variant="h6" >{"About"}</Typography> }/>
          <Button onClick={() => handleNavigation('/project')} children={ <Typography variant="h6" >{"Projects"}</Typography> }/>
         
          <Button onClick={() => handleNavigation('/contact')} children={ <Typography variant="h6" >{"Contact"}</Typography> }/>
         
          <Button onClick={() => handleNavigation('/resume')} children={ <Typography variant="h6" >{"Resume"}</Typography> }/>
        
        </LeftContainer>
      )}
    </OuterContainer>
  );
};

export default Header;
