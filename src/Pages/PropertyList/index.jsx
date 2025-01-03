import React, { useEffect, useState } from 'react';
import "./style.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

export default function PropertyList() {
  const [IncPropertyData, setIncPropertData] = useState([]);

  const navigate = useNavigate()
  const headerText = (
    <>
      Properties
    </>
  );


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
      <Helmet>
        <title>Explore</title>
      </Helmet>
      <Box className="property aboutPage TermsPage policyPage blogPage propertyListPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="blogInSection">
            {IncPropertyData?.map((el, i) => (
              <PropertieCard btnText={"Featured"} key={i} value={el} />
            ))}
          </Box>
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
