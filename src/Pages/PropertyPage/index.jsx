import React from 'react';
import "./style.css"


//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import callIcon from "../../Assets/Images/callIcon.png"
import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png";
import starIcon from "../../Assets/Images/star.png";
import shareIcon from "../../Assets/Images/shareIcon.svg"
import loveIcon from "../../Assets/Images/loverIcon.svg"
import searchIcon from "../../Assets/Images/searchIcon.svg"
import propertyImg from "../../Assets/Images/propertyImg.png";



//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";

export default function PropertyPage() {
  const headerText = "Our Properties Details";

  return (
    <>
      <Box className="property">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText.toUpperCase()}</Typography>
        </Box>

        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <Box className="propertyTitleBox">
            <Box className="proTilInnerBox">
              <Typography className='propertyTitle'>Entire Sea view Cabin Near Juhu Beach</Typography>
              <Typography className='propertyPriceText'>₹ 2,700 <span>/ month</span></Typography>
            </Box>

            <Box className="proTilInnerBox">
              <Box className="propLocBox">

                <Box className="locText">
                  <img src={locationOutIcon} />
                  <Typography>Juhu, Mumbai</Typography>
                </Box>

                <Box className="start_Box">
                  <img src={starIcon} />
                  <Typography>4.8 <span>(74)</span></Typography>
                </Box>

                <Box className="perpelBtn">
                  <img src={shareIcon} />
                  <Typography>Share</Typography>
                </Box>
                <Box className="perpelBtn">
                  <img src={loveIcon} />
                  <Typography>Favorite</Typography>
                </Box>
                <Box className="perpelBtn">
                  <img src={searchIcon} />
                  <Typography>Browse Nearby listing</Typography>
                </Box>
              </Box>

              <Box className="propContactBtn">
                <img src={callIcon} />
                <Typography>Contact Sellers</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="properyImgBox">
            <Box className="imgBox1">
              <img src={propertyImg} />
            </Box>
            <Box className="imgBox2">
              <Box className="img2Inn">
                <img src={propertyImg} />
              </Box>
              <Box className="img2Inn">
                <img src={propertyImg} />
              </Box>
            </Box>
          </Box>


        </Box>

      </Box>
    </>
  )
}
