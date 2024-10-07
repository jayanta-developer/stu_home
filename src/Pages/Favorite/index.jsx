import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment"
import PropertieCard from "../../Components/PropertieCard"
import EmailBox from "../../Components/EmailBox"

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
        <EmailBox />
        <Footer />
      </Box>

    </>
  )
}
