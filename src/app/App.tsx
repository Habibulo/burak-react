import React, { useState } from 'react';
import {Link, Route, Switch, useLocation } from 'react-router-dom';
// import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { About } from './Screens/About';
import { Users } from './Screens/Users';
import { HomePage } from "./Screens/homePage/" 
import { ProductsPage } from './Screens/productsPage';
import { log } from 'console';
import path from 'path';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import './css/app.css';
import './css/navbar.css'
import './css/product.css'
import Footer from './components/footer/footer';
import './css/footer.css'
import OrdersPage from './Screens/ordersPage';
import UserPage from './Screens/userPage';
import HelpPage from './Screens/helpPage';
import { CartItem } from './lib/types/search';
import useBasket from './hooks/useBasket';
import AuthenticationModal from './components/auth';
function App() {
  const location  = useLocation()
  const {
    cartItems, 
    onAdd, 
    onRemove,
    onDelete,
    onDeleteAll,} = useBasket()
  const [signupOpen, setSignupOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)

  /** HANDLERS **/
  const handleSignupClose = () => setSignupOpen(false)
  const handleLoginClose = () => setLoginOpen(false)

  return (
    <>
      {location.pathname === '/' 
        ? <HomeNavbar 
            cartItems = {cartItems} 
            onAdd = {onAdd}
            onRemove = {onRemove} 
            onDelete = {onDelete} 
            onDeleteAll = {onDeleteAll} /> 
        : <OtherNavbar
            cartItems = {cartItems} 
            onAdd = {onAdd}
            onRemove = {onRemove} 
            onDelete = {onDelete} 
            onDeleteAll = {onDeleteAll} /> 
        }
      <Switch>
        <Route path="/products"><ProductsPage onAdd = {onAdd}/></Route>
        <Route path="/orders"><OrdersPage /></Route>
        <Route path="/member-page"><UserPage/></Route>
        <Route path="/help"><HelpPage /></Route>
        <Route path="/"><HomePage/></Route>
      </Switch>
      <Footer/>
      <AuthenticationModal 
        signupOpen={signupOpen} 
        loginOpen={loginOpen} 
        handleSignupClose={handleSignupClose}
        handleLoginClose={handleLoginClose}
      />
    </>
  );
}



export default App;
