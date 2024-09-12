import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import "./style.css"

//Images
import LogAvatarIcon from "../../Assets/Images/logAvatarIcon.png";
import shAppLogo from "../../Assets/Images/ClogoNew-removebg-preview.png";
// import shAppLogo from "../../Assets/Images/shAppLogo.png";
import HumMenu from "../../Assets/Images/HumMenu.png"
import backIcon from "../../Assets/Images/backIcon.png"

import { Box, Typography } from '@mui/material';


export default function NavBar() {
  const navigate = useNavigate()
  const curentUrl = window.location.href;
  const [sideMenu, setSideMenu] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(true)


  useEffect(() => {
    if (sideMenu) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setMenuVisibility(true)
      }, 200)
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        setMenuVisibility(false)
      }, 300)
    }
  }, [sideMenu])


  return (
    <>
      <Box className="navBar">
        <img src={shAppLogo} className='navCLogo pointer' onClick={() => navigate("/")} />
        <img src={HumMenu} className='humMenu' onClick={() => setSideMenu(!sideMenu)} />


        {/* side menu icon */}
        <Box className={menuVisibility ? "sideMenu" : "sideMenu subItemDeactivate"} sx={{ width: sideMenu ? "100%" : "0px" }}>
          <img src={backIcon} className='backIcon' onClick={() => setSideMenu(false)} />


          <Box className="navItem" onClick={() => navigate("/")}>
            <Typography>HOME</Typography>
          </Box>
          <Box className="navItem" onClick={() => navigate("/property")}>
            <Typography>EXPLORE</Typography>
          </Box>
          <Box className="navItem" onClick={() => navigate("/contact")}>
            <Typography>CONTACT</Typography>
          </Box>
          <Box className="navItem" onClick={() => navigate("/blogs")}>
            <Typography>BLOGS</Typography>
          </Box>
          <Box className="navItem" onClick={() => navigate("/about")}>
            <Typography>ABOUT US</Typography>
          </Box>

        </Box>



        <Box className="navRBox">
          <Typography onClick={() => navigate("/property")}>EXPLORE</Typography>
          <Typography onClick={() => navigate("/contact")}>CONTACT</Typography>
          <Typography onClick={() => navigate("/blogs")}>BLOGS</Typography>
          <Typography onClick={() => navigate("/about")}>ABOUT US</Typography>
          <Box className="logInBox">
            <img src={LogAvatarIcon} />
            {/* <Typography>LOG IN \ SIGN UP</Typography> */}
          </Box>
        </Box>
      </Box>
    </>
  )
}
