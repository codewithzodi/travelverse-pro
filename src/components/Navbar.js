import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

function Navbar() {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <FlightTakeoffIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          TravelVerse
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/chatbot">Chatbot</Button>
          <Button color="inherit" component={Link} to="/journal">Journal</Button>
          <Button color="inherit" component={Link} to="/expenses">Expenses</Button>
          <Button variant="outlined" color="inherit" sx={{ ml: 2 }}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;