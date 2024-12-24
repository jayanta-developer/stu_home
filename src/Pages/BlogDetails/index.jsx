import React, { useState, useEffect } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

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


export default function BlogDetails() {
  const BlogIndex = localStorage.getItem("blogIndex")
  const navigate = useNavigate()
  const [blogData, setBlogData] = useState({})

  const headerText = (
    <>
      Our Blogs
    </>
  );

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BASE_URL + `/blog/${BlogIndex}`)
      .then((val) => {
        setBlogData(val.data)
        return val.data;
      })
      .catch((err) => console.log(err));
  }, [])
  const isEmpty = (obj) => !Object.keys(obj).length;

  return (
    <>
      <Box className="property aboutPage TermsPage policyPage blogPage blogDetailsPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box ox className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="blogInSection">
            {
              isEmpty(blogData) ?
                <p className='loadingText'>No Data is there</p> :
                <>
                  <Box className="backTabe" onClick={() => navigate("/blogs")}>
                    <img src={backIcon} />
                    <Typography>Back</Typography>
                  </Box>
                  <Box className="blog1Box">
                    <Box className="blog1A">
                      <Typography className='blogTitle'>{blogData?.SummeryArray[0]?.title}</Typography>
                      <Typography>{blogData?.SummeryArray[0]?.text}</Typography>
                    </Box>
                    <Box className="blog1B">
                      <img src={blogData?.images[0]} />
                    </Box>
                  </Box>
                  {
                    blogData?.SummeryArray?.splice(1)?.map((el, i) => (
                      <Box key={i}>
                        <Typography className="PSubHeader">{el?.title}</Typography>
                        <Typography className="PSubSummery">{el?.text}</Typography>
                      </Box>
                    ))
                  }
                  <Typography className='blogTitle'>Conclusion</Typography>
                  <Typography>{blogData?.conclusion}</Typography>
                </>
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
