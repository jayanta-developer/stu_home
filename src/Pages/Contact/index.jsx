import React from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import twitterIcon from "../../Assets/Images/twitterSIcon.png";
import linkdinIcon from "../../Assets/Images/linkdinIcon.png";
import apartment from "../../Assets/Images/new-block-modern-apartments-with-balconies-blue-sky-background 1.png";
import lightIcon from "../../Assets/Images/lightIcon.png";
import arrowIcon from "../../Assets/Images/arrowInTargetIcon.png"
import blackBg from "../../Assets/Images/blackBg.jpg";
import stuHoBg from "../../Assets/Images/stuHoBg.png"
import yellowArrow from "../../Assets/Images/yellowArrow.png"
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";
import locationIcon from "../../Assets/Images/locationS.png"
import callIcon from "../../Assets/Images/callIconS.png"
import mailIcon from "../../Assets/Images/mailIcon.png"


//components
import { Box, Typography } from '@mui/material';
import SimpleMap from "../../Components/Map"
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";

//data
import { achieveData } from "../../Assets/Data"

export default function Contact() {


  const GRowItem = ({ icon, title, subTitle }) => {
    return (
      <Box className="getTItem">
        <Box className='GTItemIconBox'>
          <img src={icon} />
        </Box>
        <Box>
          <Typography>{title}</Typography>
          <span>{subTitle}</span>
        </Box>
      </Box>
    )
  }


  return (
    <>
      <Box className="property aboutPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>Contact Us</Typography>
          <Typography className='contactSubHeader'>Get in touch and let us know how we can help.</Typography>
        </Box>

        <Box className="getTouchBox">
          <img src={blackBg} className='ourMvBackground' />
          <Box className="getTouchInnderBox">
            <Box className="getTTextBox">
              <Typography className='getTHeader'>Get in Touch</Typography>
              <Typography className='getTSubHeader'>Lorem ipsum dolor sit amet consectetur. Orci sapien arcu ligula morbi faucibus. Ultrices pellentesque augue malesuada scelerisque duis at auctor sed. Vestibulum quis nulla semper purus aenean convallis.</Typography>
              <Box className="getTItemBox">
                {GRowItem({ icon: locationIcon, title: "Head Office", subTitle: "2715 Ash Dr. San Jose, South Dakota 83475" })}
                {GRowItem({ icon: mailIcon, title: "Email Us", subTitle: "willie.jennings@example.com" })}
                {GRowItem({ icon: callIcon, title: "Call Us", subTitle: "(406) 555-0120" })}

              </Box>
            </Box>
            <Box className="getTMapBox">
              <SimpleMap />
            </Box>

          </Box>


        </Box>


        <Box className="aparEmailBox">
          <img src={paperCut} className='paperTop' />
          <Box className="aparMailBox">
            <img src={inboxIcon} />
            <Box >
              <Typography className='aptHeaderText'>Join Our Journey and
                Gain Industrial Experience</Typography>
              <Typography>Sign up to our newsletter for deals,
                inspo and other travel treats!</Typography>
            </Box>

            <Box className="mailSendBox">
              <img src={mailIcon} className='mailIcon' />
              <Box className="sendMailBtn">
                <img src={arrowIcon2} className='arrowIcon' />
              </Box>
              <input type="text" placeholder='Your Email address' />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>

    </>
  )
}
