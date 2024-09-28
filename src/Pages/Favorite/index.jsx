import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";


//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment"
import PropertieCard from "../../Components/PropertieCard"


//Data
import { properitData } from "../../Assets/Data"

export default function FavoriteList() {

  const navigate = useNavigate()
  const headerText = (
    <>
      Favorite
    </>
  );


  const propertyFev = JSON.parse(localStorage.getItem("propertyFev") || "[]");
  let newData = []

  propertyFev.forEach((el) => {
    const favoriteProperty = properitData.find((elId) => elId.id === el);
    if (favoriteProperty) {
      newData.push(favoriteProperty);
    }
  });


  return (
    <>
      <Box className="property aboutPage TermsPage policyPage blogPage propertyListPage favoritePage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          {newData.length ?
            <Box className="blogInSection">
              {newData?.map((el, i) => (
                <PropertieCard btnText={"Featured"} key={i} value={el} />
              ))}
            </Box> :
            <Box className="blogInSection">
              <h1>You have no favorite property</h1>
            </Box>
          }

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
