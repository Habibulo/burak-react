import React from 'react';
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
import './css/app.css';
import './css/navbar.css'
import { HelpPage } from './Screens/helpPage';
import Footer from './components/footer/footer';
import './css/footer.css'
function App() {
  const location  = useLocation()
  console.log("console:" , location);
  return (
    <>
      {location.pathname === '/' ? <HomeNavbar/> : <OtherNavbar/> }
      <Switch>
        <Route path="/"><HomePage/> </Route>
        <Route path="/products"><ProductsPage /></Route>
        <Route path="/orders"><OrdersPage /></Route>
        <Route path="/member-page"><UserPage/></Route>
        <Route path="/help"><HelpPage /></Route>
      </Switch>
      <Footer/>
    </>
  );
}



export default App;
