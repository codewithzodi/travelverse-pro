import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1e88e5' }, // Blue for a travel vibe
    secondary: { main: '#f50057' }, // Pink accent
    background: { default: '#f5f6fa' },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 500 },
  },
});

export default theme;