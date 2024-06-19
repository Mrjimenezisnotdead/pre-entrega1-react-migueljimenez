import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MAX OUTLET 
        </Typography>
        <IconButton color="inherit">
          <CartWidget />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;




