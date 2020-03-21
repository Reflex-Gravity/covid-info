import React from 'react';
import Header from './components/header'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Home from './pages/home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5c6bc0'
    },
    secondary: red
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full">
        <Header title="COVID-19 Info"/>
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
