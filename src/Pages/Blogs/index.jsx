import React, { useEffect, useState } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Helmet } from "react-helmet-async";


//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment";
import EmailBox from "../../Components/EmailBox";


export default function Blogs() {
  const navigate = useNavigate()
  const [DBBlogData, setDBBlogData] = useState([]);

  const headerText = (
    <>
      Our Blogs
    </>
  );

  const storeBlogIndex = (i) => {
    localStorage.setItem("blogIndex", i)
    navigate("/blog-details/:blog-title")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  useEffect(() => {
    Axios.get(process.env.REACT_APP_BASE_URL + "/blogs")
      .then((val) => {
        setDBBlogData(val.data)
        return val.data;
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <Box className="property aboutPage TermsPage policyPage blogPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          {!DBBlogData.length ?
            <p className='loadingText'>No Data is there</p> :
            <Box className="blogInSection">
              {
                DBBlogData?.map((el, i) => (
                  <Box key={i} className="blogCard">
                    <img src={el?.images[0]?.image} alt={el?.images[0]?.altText} />
                    <Typography className='blogHeader'>{el?.SummeryArray[0]?.title.slice(0, 66)}...</Typography>
                    <Typography className='blogSubHeader'>{el?.SummeryArray[0]?.text?.slice(0, 140)}... </Typography>
                    <Box className="BlogCbtnBox">
                      <AppBtn btnText="Read More" onClick={() => storeBlogIndex(el?._id)} />
                    </Box>
                  </Box>
                ))
              }
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
