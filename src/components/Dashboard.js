import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Fix for MUI's Button with React Router Link
const CustomLink = React.forwardRef((props, ref) => <Link ref={ref} {...props} />);

function Dashboard() {
  const upcomingTrip = { destination: 'Paris', date: 'June 1-7, 2025' };
  const rewards = 250;
  const totalSpent = 820;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Your Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Upcoming Trip</Typography>
                <Typography>{upcomingTrip.destination}</Typography>
                <Typography color="textSecondary">{upcomingTrip.date}</Typography>
                <Button component={CustomLink} to="/chatbot" sx={{ mt: 1 }}>Plan More</Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Rewards</Typography>
              <Typography variant="h5">{rewards} VerseCoins</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Expenses</Typography>
              <Typography>Total Spent: ${totalSpent}</Typography>
              <Button component={CustomLink} to="/expenses" sx={{ mt: 1 }}>View Details</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
