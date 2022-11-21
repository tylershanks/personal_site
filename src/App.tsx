import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: green
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
