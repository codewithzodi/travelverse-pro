import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleAddExpense = () => {
    if (!category || !amount) return;
    const newExpense = { id: Date.now(), category, amount: parseFloat(amount), note };
    setExpenses([...expenses, newExpense]);
    setCategory('');
    setAmount('');
    setNote('');
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Expense Tracker</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Amount ($)"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          label="Note"
          variant="outlined"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddExpense}>Add</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((exp) => (
            <TableRow key={exp.id}>
              <TableCell>{exp.category}</TableCell>
              <TableCell>${exp.amount.toFixed(2)}</TableCell>
              <TableCell>{exp.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" sx={{ mt: 2 }}>Total: ${total.toFixed(2)}</Typography>
    </Container>
  );
}

export default ExpenseTracker;