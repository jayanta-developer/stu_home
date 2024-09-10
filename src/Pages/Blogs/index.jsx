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
          <Box className="apartmentBox">
            <Box className="apartmentInnerBox">
              <Typography className='aptHeaderText'>Find New Apartments</Typography>
              <Typography className='aptSubHeaderText'>Enjoy the comforts and flexibility
                of a private space, with various amenities near more than 5000
                colleges and universities.</Typography>
              <AppBtn btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" textColor="#fff" />
              <img src={apartMentImg} className='apartMentImg' />
            </Box>
          </Box>
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