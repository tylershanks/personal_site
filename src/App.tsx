import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { blue, blueGrey, cyan, green, grey, lightGreen, pink, red } from '@mui/material/colors';
import About from './components/About';
import { CssBaseline, Typography } from '@mui/material';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box } from '@mui/system';
import InitialLoadAnimation from './components/InitialLoadAnimation';
import { dark } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: lightGreen,
    mode: 'dark',
    background: {
      default: '#121212'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
          <InitialLoadAnimation />
          
          <Box sx={{height:64}}></Box>
          <Navbar />
          <About />
          <Projects />
          <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
