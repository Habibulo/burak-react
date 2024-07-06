import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
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
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
{
  "name": "burak-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@mui/material": "^5.15.21",
    "@reduxjs/toolkit": "^1.8.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.0.0",
    "react-redux": "^7.2.8",
    "react-scripts": "5.0.0",
    "typescript": "~4.1.5",
    "web-vitals": "^2.1.4",
    "@emotion/react": "^11.0.0",
    "@emotion/styled": "^11.0.0",
    "react-router-dom": "^6.x.x"
  },
  "devDependencies": {
    "@types/jest": "^27.5.2",
    "@types/node": "^17.0.45",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "@types/react-router-dom": "^5.x.x"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

*/