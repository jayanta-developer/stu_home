import React from 'react';
import "./style.css"

//Images
import LogAvatarIcon from "../../Assets/Images/logAvatarIcon.png";
import shAppLogo from "../../Assets/Images/shAppLogo.png";

import { Box, Typography } from '@mui/material';


export default function NavBar() {
  return (
    <>
      <Box className="navBar">
        <img src={shAppLogo} className='navCLogo' />
        <Box className="navRBox">
          <Typography>EXPLORE</Typography>
          <Typography>ABOUT US</Typography>
          <Box className="logInBox">
            <img src={LogAvatarIcon} />
            <Typography>LOG IN \ SIGN UP</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
