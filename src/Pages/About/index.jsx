import React from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import twitterIcon from "../../Assets/Images/twitterSIcon.png";
import linkdinIcon from "../../Assets/Images/linkdinIcon.png";
import apartment from "../../Assets/Images/new-block-modern-apartments-with-balconies-blue-sky-background 1.png";
import lightIcon from "../../Assets/Images/lightIcon.png";
import arrowIcon from "../../Assets/Images/arrowInTargetIcon.png"
import blackBg from "../../Assets/Images/blackBg.jpg";
import stuHoBg from "../../Assets/Images/stuHoBg.png"
import yellowArrow from "../../Assets/Images/yellowArrow.png"
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";




//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";

//data
import { achieveData } from "../../Assets/Data"

export default function About() {
  const headerText = (
    <>
      Ditch the Ordinary, Embrace Luxury:<br /> Welcome to Socio Stays

    </>
  );

  return (
    <>
      <Box className="property aboutPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>

        <Box className="stuHoSection">
          {/* <img src={blackBg} className='ourMvBackground' /> */}

          <Box className="stuHoTextbox">
            <Box className="stuhoInnerText">
              <Typography className='stuhoHeaderText'>Socio Stays</Typography>
              <Typography className='stuhoSubText'><span>Imagine</span> stepping into a world of unparalleled comfort, exquisite design, and personalized service. Socio Stays isn't your average accommodation platform; it's a gateway to elevated experiences for discerning travelers like you</Typography>
              <Typography className='stuhoSubText'><span>Forget</span> the limitations of traditional rentals. Socio Stays offers a modern sanctuary for those who seek more than just a place to stay. We combine the power of technology with unwavering hospitality to curate unforgettable stays in prime locations.</Typography>
              {/* <Box className="countBox">
                <Box className="countInnerBox">
                  <span>More than</span>
                  <Typography>13.7M</Typography>
                  <span>Reviews</span>
                </Box>
                <img src={yellowArrow} />
                <Box className="countInnerBox">
                  <span>Hostels in over</span>
                  <Typography>102</Typography>
                  <span>Countries</span>
                </Box>
                <img src={yellowArrow} />
                <Box className="countInnerBox">
                  <span>Website and Apps in</span>
                  <Typography>10</Typography>
                  <span>Countries</span>
                </Box>
              </Box> */}
            </Box>

            <Box className="stuhoInnerImg">
              <img src={stuHoBg} />
            </Box>

          </Box>



        </Box>

        <Box className="ourMvSection">
          <img src={blackBg} className='ourMvBackground' />
          <Box className="ourtMvImageBox">
            <img src={apartment} />
          </Box>

          <Box className="ourMvTextBox">
            <Typography className='omtbHeader'>Here's what sets us apart!</Typography>
            <Box>
              {/* <img src={lightIcon} /> */}
              <Typography className='ourHeaderText'>Meticulously Selected Properties</Typography>
              <Typography className='oursubText'>Each Socio Stays residence is hand-picked to meet the highest standards of luxury. Think top-tier amenities, stylish interiors, and exceptional service that anticipates your every need. </Typography>
            </Box>

            <Box>
              {/* <img src={arrowIcon} /> */}
              <Typography className='ourHeaderText'>Seamless Booking & Curated Experiences</Typography>
              <Typography className='oursubText'>Our cutting-edge platform makes booking a breeze, while our team of experts crafts tailored experiences to suit your travel style, whether you're on a business trip or a leisure adventure.
              </Typography>
            </Box>
            <Box>
              {/* <img src={arrowIcon} /> */}
              <Typography className='ourHeaderText'>Unforgettable Memories</Typography>
              <Typography className='oursubText'>At Socio Stays, we prioritize quality, convenience, and your complete satisfaction. Our mission is to transform every stay into a treasured memory that will leave you wanting more.
                <Typography mt={2} className='oursubText'>Ready to redefine luxury travel? Explore Socio Stay today and discover a world of elevated experiences waiting to be explored.</Typography>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* <Box className="roadMap">
          <Typography className='roadMapText'>Our Journey</Typography>
          <Box className="roadMapbox">
            <Box className="YellowBox">
              <Typography>2009</Typography>
              <sapn>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
                by injected humour, or randomised
              </sapn>
              <Box className="blackDotBox blackDotright">
                <Box className="blackDot"></Box>
              </Box>
            </Box>
            <Box className="line"></Box>
            <Box className="YellowBox">
              <Typography>2011</Typography>
              <sapn>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
                by injected humour, or randomised
              </sapn>
              <Box className="blackDotBox blackDotright">
                <Box className="blackDot"></Box>
              </Box>
              <Box className="blackDotBox blackDotLeft">
                <Box className="blackDot"></Box>
              </Box>
            </Box>
            <Box className="line"></Box>
            <Box className="YellowBox">
              <Typography>2014-2015</Typography>
              <sapn>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
                by injected humour, or randomised
              </sapn>
              <Box className="blackDotBox blackDotright">
                <Box className="blackDot"></Box>
              </Box>
              <Box className="blackDotBox blackDotLeft">
                <Box className="blackDot"></Box>
              </Box>
            </Box>
            <Box className="line"></Box>
            <Box className="YellowBox">
              <Typography>2017-2020</Typography>
              <sapn>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
                by injected humour, or randomised
              </sapn>
              <Box className="blackDotBox blackDotLeft">
                <Box className="blackDot"></Box>
              </Box>
            </Box>
          </Box>
        </Box> */}

        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="achieveBox">
            <Typography className='hasselHeader'>Together everyone achieves more</Typography>
            <Typography className='achiveSubHeader'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Typography>
            <Box className="achieverListBox">
              {achieveData?.map((el, i) => (
                <Box key={i} className="achiverCard">
                  <Box className="imgBox">
                    <img src={el.img} />
                  </Box>
                  <Typography className='achiName'>{el.name}</Typography>
                  <Box className="achivIconBox">
                    <img src={twitterIcon} />
                    <img src={linkdinIcon} />
                  </Box>
                  <Typography className='achivCardSummery'>{el.summery}</Typography>
                  <AppBtn btnText="View Profile" width="165px" height="40px" />
                </Box>
              ))}
            </Box>
          </Box>
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
        {/* <Box className="aparEmailBox">
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
        </Box> */}
        <Footer />
      </Box>

    </>
  )
}
