import React from 'react';
import './css/app.css';
import {Link, Route, Routes } from 'react-router-dom';
// import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Stack, Switch, Typography } from '@mui/material';
import { About } from './Screens/About';
import { Users } from './Screens/Users';

function App() {
  return (
    <div>
      <nav>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <Container>Home</Container>;
}



export default App;
