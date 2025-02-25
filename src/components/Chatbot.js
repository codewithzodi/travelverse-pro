import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Where are you traveling? Tell me your destination, budget, interests, and dates.' },
  ]);
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    // Mock AI response
    const botResponse = `For ${input}, I recommend a 4-star hotel ($120/night), a round-trip flight ($350), and curated activities like museum tours. Sound good?`;
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>VerseBot - Your Travel Assistant</Typography>
      <Paper elevation={3} sx={{ p: 3, maxHeight: '500px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', mb: 2 }}
          >
            <Box
              sx={{
                display: 'inline-block',
                p: 2,
                bgcolor: msg.sender === 'user' ? 'primary.main' : 'grey.200',
                color: msg.sender === 'user' ? 'white' : 'black',
                borderRadius: '10px',
                maxWidth: '70%',
              }}
            >
              {msg.text}
            </Box>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </Paper>
      <Box sx={{ display: 'flex', mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" onClick={handleSend} sx={{ ml: 2 }}>Send</Button>
      </Box>
    </Container>
  );
}

export default Chatbot;