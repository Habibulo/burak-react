import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar(){
    const authMember = true

    return <div className="home-navbar">
        <Container sx={{mt:"55px", height: "642px"}}>
            <Stack 
                sx={{height: "50px"}} 
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Box>
                    <NavLink to={'/'} activeClassName="underline">
                        <img src="/icons/burak.svg" style={{width: '125px', height: '30px'}} alt="Burak"/>
                    </NavLink>
                </Box>
                <Stack 
                    minWidth={"700px"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    >
                </Stack>
                <Box className={"hover-line"}> <NavLink to={'/'} activeClassName="underline">Home</NavLink></Box>
                <Box className={"hover-line"}> <NavLink to={'/products'} activeClassName="underline">Produts</NavLink></Box>
                <Box className={"hover-line"}> <NavLink to={'/help'} activeClassName="underline">Help</NavLink></Box>
                <Box>
                    {authMember ? (<Box className={"hover-line"}><NavLink to={'/orders'} activeClassName="underline">Orders</NavLink></Box>)
                    : null }
                </Box>
                <Box>
                    { authMember? (<Box className={"hover-line"}> <NavLink to={'/member-page'} activeClassName="underline">MyPage</NavLink></Box>) 
                    : null}
                </Box>
                {/* Basket */}
                {!authMember? (<Box><Button variant="contained" sx={{background: '#3776CC', color: "#f8f8ff"}}>Login</Button></Box>) : <img/>}
            </Stack>
            <Stack>DETAILS</Stack>
        </Container>
    </div>
}