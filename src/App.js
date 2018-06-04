import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import PersistentDrawer from "./PersistentDrawer";
import './App.css';
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#439889',
      main: '#00695c',
      dark: '#003d33',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff163',
      main: '#f9bf2d',
      dark: '#c28f00',
      contrastText: '#000',
    },
  },
}

);

function ThemedApp() {
  return (
    <MuiThemeProvider theme={theme}>
       <PersistentDrawer></PersistentDrawer>
    </MuiThemeProvider>
  );
}

class App extends Component {
  render() {
    return (
      <div style={{height:'900px'}}>
      <ThemedApp />
      </div>
    );
  }
}

export default App;
