import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";
import bulletIcon from "../../Assets/Images/bulletIcon.png"
import blogImg1 from "../../Assets/Images/blogImg1.jpeg"
import blogImg2 from "../../Assets/Images/blogImg2.jpeg"
import blogImg3 from "../../Assets/Images/blogImg3.jpeg"
import blogImg4 from "../../Assets/Images/blogImg4.jpeg"
import blogImg5 from "../../Assets/Images/blogImg5.jpg"
import blogImg6 from "../../Assets/Images/blogImg6.webp"


//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment"
import PropertieCard from "../../Components/PropertieCard"


//Data
import { properitData } from "../../Assets/Data"

export default function PropertyList() {
  const navigate = useNavigate()
  const headerText = (
    <>
      Properties
    </>
  );


  return (
    <>
      <Box className="property aboutPage TermsPage policyPage blogPage propertyListPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="blogInSection">
            {properitData?.map((el, i) => (
              <PropertieCard img={el.images[2]} btnText={"Featured"} title={el.title} location={el.location} key={i} price={el.price} id={el.id} />
            ))}
          </Box>
        </Box>

        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <FindApartment />
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
