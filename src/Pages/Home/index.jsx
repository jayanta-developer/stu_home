import React from 'react';
import "./style.css";

//images
import shAppLogo from "../../Assets/Images/shAppLogo.png";
import HomeBG from "../../Assets/Images/homeBackgRound.png";
import LogAvatarIcon from "../../Assets/Images/logAvatarIcon.png";
import HomeYIcon from "../../Assets/Images/HomeYIcom.png";

import { Box, Typography } from '@mui/material';


export default function Home() {
  return (
    <>
      <Box className="homeContainer">
        <Box className="homeSection">
          <img src={HomeBG} className='HomeBG' />

          {/* Nav bar */}
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

          <Box className="homeCenterBox">
            <Box className="homeLabel">
              <Typography className='homeBoldText'>HOME AWAY FROM HOME</Typography>
              <img src={HomeYIcon} />
            </Box>
            <Typography className='HCNText'>36,000 properties, 178 countries <span>•</span> Over 13 million verified guest reviews <span>•</span> 24/7 customer service</Typography>
          </Box>


        </Box>

      </Box>
    </>
  )
}
