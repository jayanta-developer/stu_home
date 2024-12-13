import React, { useEffect, useState } from 'react';
import "./style.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";
import bulletIcon from "../../Assets/Images/bulletIcon.png";



//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
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
    Axios.get("https://socioserver.onrender.com/socio/api/flats")
      .then((val) => {
        setIncPropertData(val.data)
        return val.data;
      })
      .catch((err) => console.log(err));
  }, [])


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
