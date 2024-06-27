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
      Over 65,000 people have found <br />
      their hostel / Flats
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
          <img src={blackBg} className='ourMvBackground' />

          <Box className="stuHoTextbox">
            <Box className="stuhoInnerText">
              <Typography className='stuhoHeaderText'>What is StuHo ?</Typography>
              <Typography className='stuhoSubText'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>
              <Typography className='stuhoSubText'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</Typography>
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
            <Box>
              <img src={lightIcon} />
              <Typography className='ourHeaderText'>Our Vision</Typography>
              <Typography className='oursubText'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>
            </Box>

            <Box>
              <img src={arrowIcon} />
              <Typography className='ourHeaderText'>Our Mission</Typography>
              <Typography className='oursubText'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>
            </Box>
          </Box>


        </Box>

        <Box className="roadMap">
          <Typography className='roadMapText'>Road Map</Typography>
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

        </Box>

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
                  <Typography className='achivCardSummery'>There are many variations of passages of Lorem Ipsum available, </Typography>
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
              <AppBtn btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" />
              <img src={apartMentImg} className='apartMentImg' />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>

    </>
  )
}
