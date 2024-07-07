import React from 'react';
import './css/app.css';
import {Link, Route, Switch } from 'react-router-dom';
// import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
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
      {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      </div>
  );
}



export default App;
