import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { blue, blueGrey, cyan, green, grey, lightGreen, pink, red } from '@mui/material/colors';
import About from './components/About';
import { Typography } from '@mui/material';
import Projects from './components/Projects';

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: lightGreen
  },
  typography: {
    fontFamily: 'Montserrat',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Navbar />
          <About />
          <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
