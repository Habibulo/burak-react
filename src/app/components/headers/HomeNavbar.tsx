import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void
  setLoginOpen: (isOpen: boolean) => void
}

export function HomeNavbar(props: HomeNavbarProps) {
  const { 
    cartItems, 
    onAdd, 
    onRemove, 
    onDelete, 
    onDeleteAll, 
    setLoginOpen, 
    setSignupOpen
  } = props;
  const authMember = null;
  

  /** HANDLERS */

  
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to={"/"} activeClassName="underline">
              <img src="/icons/burak.svg" className="brand-logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              {" "}
              <NavLink to={"/"} activeClassName="underline">
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              {" "}
              <NavLink to={"/products"} activeClassName="underline">
                Produts
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              {" "}
              <NavLink to={"/help"} activeClassName="underline">
                Help
              </NavLink>
            </Box>
            <Box>
              {authMember ? (
                <Box className={"hover-line"}>
                  <NavLink to={"/orders"} activeClassName="underline">
                    Orders
                  </NavLink>
                </Box>
              ) : null}
            </Box>
            <Box>
              {authMember ? (
                <Box className={"hover-line"}>
                  {" "}
                  <NavLink to={"/member-page"} activeClassName="underline">
                    MyPage
                  </NavLink>
                </Box>
              ) : null}
            </Box>
            {/* Basket */}
            <Basket 
                cartItems={cartItems}
                onAdd ={onAdd}
                onRemove ={onRemove}
                onDelete ={onDelete}
                onDeleteAll ={onDeleteAll} />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button" onClick={() => setLoginOpen(true)}>
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className="head-main-txt">World's most delicious Cousine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">24hours Service</Box>
            <Box className="signup">
              {!authMember ? (
                <Button variant="contained" className="signup-button" onClick={() => setSignupOpen(true)}>
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack className={"logo-frame"}>
            <div className="logo-img"></div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
