import React, { useEffect, useState } from 'react';
import Axios from "axios";
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


export default function FavoriteList() {
  const [IncPropertyData, setIncPropertData] = useState([])

  const navigate = useNavigate()
  const headerText = (
    <>
      Favorite
    </>
  );


  const propertyFev = JSON.parse(localStorage.getItem("propertyFev") || "[]");
  let newData = []

  propertyFev.forEach((el) => {
    const favoriteProperty = IncPropertyData.find((elId) => elId?._id === el);
    if (favoriteProperty) {
      newData.push(favoriteProperty);
    }
  });


  useEffect(() => {
    Axios.get(process.env.REACT_APP_BASE_URL + "/flats")
      .then((val) => {
        setIncPropertData(val.data)
        return val.data;
      })
      .catch((err) => console.log(err));
  }, [])

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

          {IncPropertyData.length ?
            <Box className="blogInSection">
              {IncPropertyData?.map((el, i) => (
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
