import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import './app/css/index.css';
import theme from './app/MaterialTheme';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();