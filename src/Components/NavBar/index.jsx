import React from 'react';
import { useNavigate } from "react-router-dom"
import "./style.css"

//Images
import LogAvatarIcon from "../../Assets/Images/logAvatarIcon.png";
import shAppLogo from "../../Assets/Images/shAppLogo.png";
import HumMenu from "../../Assets/Images/HumMenu.png"

import { Box, Typography } from '@mui/material';


export default function NavBar() {
  const navigate = useNavigate()
  const curentUrl = window.location.href;


  return (
    <>
      <Box className="navBar">
        <img src={shAppLogo} className='navCLogo' onClick={() => navigate("/")} />
        <img src={HumMenu} className='humMenu' />
        <Box className="navRBox">
          <Typography>EXPLORE</Typography>
          <Typography onClick={() => navigate("/about")}>ABOUT US</Typography>
          <Box className="logInBox">
            <img src={LogAvatarIcon} />
            <Typography>LOG IN \ SIGN UP</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
