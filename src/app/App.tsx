import React from 'react';
import './css/app.css';
import {Link, Route, Routes } from 'react-router-dom';
// import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Stack, Switch, Typography } from '@mui/material';
import { About } from './Screens/About';
import { Users } from './Screens/Users';
import { HomePage } from './Screens/homePage';
import { ProductsPage } from './Screens/productsPage';
import { UserPage } from './Screens/userPage';
import { OrdersPage } from './Screens/ordersPage';

function App() {
  return (
    <div>
      <nav>
      <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
          </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UserPage />} />
      </Routes>
    </div>
  );
}



export default App;
