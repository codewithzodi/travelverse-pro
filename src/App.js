import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import TravelJournal from './components/TravelJournal';
import ExpenseTracker from './components/ExpenseTracker';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/journal" element={<TravelJournal />} />
          <Route path="/expenses" element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;