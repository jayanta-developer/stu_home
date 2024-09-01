import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom"


//images
import cLogo from "../../Assets/Images/shAppLogo.png";
import facebook from "../../Assets/Images/FacebookIcon.png";
import twitter from "../../Assets/Images/TwitterIcon.png";
import instaIcon from "../../Assets/Images/instaIcon.png";
import lingkdinIcon from "../../Assets/Images/lingkdinIcon.png";

import blackBg from "../../Assets/Images/blackBg.jpg";
import { Typography, Box } from '@mui/material';

export default function Footer() {
  const navigate = useNavigate()

  const footerList = [
    "Terms and Conditions",
    "Privacy Policy",
    "Terms & Legal",
    "Blogs",
    "Vouchers",
    "Website Testing",
    "Site Map",
  ]


  const DetactPageClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (e.target.textContent === "Terms and Conditions") {
      navigate("/Terms-and-Conditions")
    } else if (e.target.textContent === "Privacy Policy") {
      navigate("/Pricacy-Policy")
    }
  }


  return (
    <>
      <Box className="footer">
        <Box className="footerTextBox">
          <img src={blackBg} className='fobg' />

          <Box className="footerRowOuterBox">
            <Box className="footerInnerText">

              <Box className="footerRowItem footerClogo">
                <img className='footerClogoImg' src={cLogo} />
                <Typography className='conctText'>Connect with us</Typography>
                <Box className="social">
                  <img src={facebook} />
                  <img src={twitter} />
                  <img src={instaIcon} />
                  <img src={lingkdinIcon} />
                </Box>
              </Box>

              <Box className="footerRowItem">
                <Typography className='footerRowHText'>Accommodation</Typography>
                <Typography className='footerNText'>Flats</Typography>
                <Typography className='footerNText'>Rooms</Typography>
                {/* <Typography className='footerNText'>Bed and Breakfast</Typography> */}
              </Box>
              <Box className="footerRowItem">
                <Typography className='footerRowHText'>Customer Support</Typography>
                <Typography className='footerNText'>Talk to Us</Typography>
                <Typography className='footerNText'>Help</Typography>
              </Box>
              <Box className="footerRowItem">
                <Typography className='footerRowHText'>Quick Links</Typography>
                <Typography className='footerNText'>Blog</Typography>
                <Typography className='footerNText'>Booking </Typography>
                <Typography className='footerNText'>Guarantee </Typography>
                <Typography className='footerNText'>Hostel Awards </Typography>
              </Box>
              <Box className="footerRowItem">
                <Typography className='footerRowHText'>About Us</Typography>
                <Typography className='footerNText'>Hostelworld Group </Typography>
                <Typography className='footerNText'>PLC </Typography>
                <Typography className='footerNText'>Press </Typography>
                <Typography className='footerNText'>Careers</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="footerRowOuterBox">
            <Box className="footerRowList">
              {footerList?.map((el, i) => (
                <Typography onClick={DetactPageClick} className='footerNText' key={i}>{el}</Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="footerBottmBox">
          <Typography>© 2023 . All Rights Reserved</Typography>
        </Box>

      </Box>
    </>
  )
}
