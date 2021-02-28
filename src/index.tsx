import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'


export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ab47bc',
      },
      secondary: {
        main: '#d1c4e9',
      },
    },
})


ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
