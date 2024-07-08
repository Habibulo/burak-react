import React from 'react';
import './css/app.css';
import {Link, Route, Switch, useLocation } from 'react-router-dom';
// import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { About } from './Screens/About';
import { Users } from './Screens/Users';
import { HomePage } from './Screens/homePage';
import { ProductsPage } from './Screens/productsPage';
import { UserPage } from './Screens/userPage';
import { OrdersPage } from './Screens/ordersPage';
import { log } from 'console';
import path from 'path';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import { Footer } from './components/footer/footer';

function App() {
  const location  = useLocation()
  console.log("console:" , location);
  
  return (
    <>
      {location.pathname === '/' ? <HomeNavbar/> : <OtherNavbar/> }
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
      <Footer/>
      </>
  );
}



export default App;
