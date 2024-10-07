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
import backIcon from "../../Assets/Images/backV2Icon.png"
import FindApartment from "../../Components/FindApartment"
import EmailBox from "../../Components/EmailBox"

//Data
import { BlogData } from "../../Assets/Data"

export default function BlogDetails() {
  const navigate = useNavigate()

  const headerText = (
    <>
      Our Blogs
    </>
  );

  const BlogIndex = localStorage.getItem("blogIndex")

  return (
    <>
      <Box className="property aboutPage TermsPage policyPage blogPage blogDetailsPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="blogInSection">
            <Box className="backTabe" onClick={() => navigate("/blogs")}>
              <img src={backIcon} />
              <Typography>Back</Typography>
            </Box>
            <Box className="blog1Box">
              <Box className="blog1A">
                <Typography className='blogTitle'>{BlogData[BlogIndex].title}</Typography>
                <Typography>{BlogData[BlogIndex].summery}</Typography>
              </Box>
              <Box className="blog1B">
                <img src={BlogData[BlogIndex].img} />
              </Box>
            </Box>
            {
              BlogData[BlogIndex].subPoint.map((el, i) => (
                <Box key={i}>
                  <Typography className='PSubHeader'>{el.header}</Typography>
                  <Typography className='PSubSummery'>{el.summery}</Typography>
                </Box>
              ))
            }
            <Typography className='blogTitle'>{BlogData[BlogIndex].Conclusion}</Typography>
            <Typography>{BlogData[BlogIndex].ConclusionSummery}</Typography>
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
