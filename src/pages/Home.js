import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // ✅ Import Link

function Home() {
  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
          Welcome to TravelVerse
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Plan, Track, and Share Your Adventures with Ease
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" component={Link} to="/chatbot">
            Start Planning
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ ml: 2 }}>
            Learn More
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Home;
