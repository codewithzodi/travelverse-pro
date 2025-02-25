import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

function TravelJournal() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleAddEntry = () => {
    if (!text.trim()) return;
    const newEntry = {
      id: Date.now(),
      text,
      photo: photo ? URL.createObjectURL(photo) : null,
      date: new Date().toLocaleDateString(),
    };
    setEntries([newEntry, ...entries]);
    setText('');
    setPhoto(null);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Travel Journal</Typography>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your travel story..."
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          style={{ margin: '10px 0' }}
        />
        <Button variant="contained" onClick={handleAddEntry}>Add Entry</Button>
      </Box>
      <Box>
        {entries.map((entry) => (
          <motion.div key={entry.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card sx={{ mb: 2 }}>
              {entry.photo && <CardMedia component="img" height="200" image={entry.photo} alt="Travel pic" />}
              <CardContent>
                <Typography variant="body1">{entry.text}</Typography>
                <Typography variant="caption" color="textSecondary">{entry.date}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default TravelJournal;