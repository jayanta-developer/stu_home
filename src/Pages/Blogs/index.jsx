import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment"
import EmailBox from "../../Components/EmailBox"

//Data
import { BlogData } from "../../Assets/Data"

export default function Blogs() {
  const navigate = useNavigate()

  const headerText = (
    <>
      Our Blogs
    </>
  );

  const storeBlogIndex = (i) => {
    localStorage.setItem("blogIndex", i)
    navigate("/Blog-details")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Box className="property aboutPage TermsPage policyPage blogPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="blogInSection">
            {
              BlogData?.map((el, i) => (
                <Box key={0} className="blogCard">
                  <img src={el.img} />
                  <Typography className='blogHeader'>{el?.title.slice(0, 66)}...</Typography>
                  <Typography className='blogSubHeader'>{el?.summery?.slice(0, 140)}... </Typography>
                  <Box className="BlogCbtnBox">
                    <AppBtn btnText="Read More" onClick={() => storeBlogIndex(i)} />
                  </Box>
                </Box>
              ))
            }
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
