import React, { useState } from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/homeBackgRound.png";
import HomeYIcon from "../../Assets/Images/HomeYIcom.png";
import locationIcon from "../../Assets/Images/locationIcon.png";
import DropIcon from "../../Assets/Images/grayDropIcon.png";

import light from "../../Assets/Images/light.svg";
import bankSvg from "../../Assets/Images/bankSvg.svg";
import personSvg from "../../Assets/Images/personSvg.svg";
import awordSvg from "../../Assets/Images/awardSvg.svg";
import propertyImg1 from "../../Assets/Images/propertieImg1.png";
import propertyImg2 from "../../Assets/Images/propertiImg2.png";
import propertyImg3 from "../../Assets/Images/PropertieImg3.png";
import star from "../../Assets/Images/star.png";
import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png"
import badIcon from "../../Assets/Images/badIcon.png"
import bathIcon from "../../Assets/Images/bathIcon.png"
import roomAreaIcon from "../../Assets/Images/roomAreiIcon.png"
import LoveIcon from "../../Assets/Images/loveIcon.png"
import paperTop from "../../Assets/Images/paperTop.png"
import paperBottom from "../../Assets/Images/paperBottom.png"
import searchHomeIcon from "../../Assets/Images/searchHomeIcon.svg"
import HomeIcon from "../../Assets/Images/homeIcon.svg"
import calenderIcon from "../../Assets/Images/calenderIcon.svg";
import BlackBackground from "../../Assets/Images/blackBg.jpg";

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
// import CircularDemo from '../../Components/Carousel'
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer"

export default function Home() {
  const [searchSelector, setSearchSelecotr] = useState(0);
  const [locationDrop, setLocationDrop] = useState(false);
  const [locationDropVal, setLocationDropVal] = useState("Select your location");

  const LocationDropItem = [
    "Ahmednagar",
    "Chandrapur",
    "Nagpur",
    "Solapur",
    "Mumbai",
    "Pune",
    "Thane",
  ];


  const PropertiesCard = ({ img, btnText, title, location }) => {
    return (
      <Box className="propertiesCard">
        <Box className="coverImg">
          <img src={img} />
          <Box className='loveIcon'>
            <img src={LoveIcon} />
          </Box>
        </Box>
        <Box className="propCardTextBox">
          <Box className="startBox">
            <Box className="starInBox">
              <img src={star} />
              <Typography>4.8 <span>(73)</span></Typography>
            </Box>
            <Box className="cardBtn">
              <Typography>{btnText}</Typography>
            </Box>
          </Box>
          <Typography className='proCardTitle'>{title}</Typography>
          <Box className="CardlocationBox">
            <img src={locationOutIcon} />
            <Typography>{location}</Typography>
          </Box>
          <Box className="proDetails">
            <img src={badIcon} />
            <Typography>3 Rooms</Typography>
            <img src={bathIcon} />
            <Typography>3 Bath</Typography>
            <img src={roomAreaIcon} />
            <Typography>673 m2</Typography>
          </Box>
          <Box className="priceBox">
            <span>$526 / month</span>
            <Typography>$420 <samp>/ month</samp></Typography>
          </Box>
        </Box>
      </Box>
    )
  }

  const WorkCard = ({ img, title, subTitle, BtnText }) => {
    return (
      <Box className="propertiesCard">
        <img src={img} />
        <Typography className='workCardTitle'>{title}</Typography>
        <Typography className='workCardSubTitle'>{subTitle}</Typography>
        <AppBtn btnText={BtnText} bgColor="#221E1D" hoverColor="#4d4745" />
      </Box>
    )
  }

  return (
    <>
      <Box className="homeContainer">
        <Box className="homeSection">
          <img src={HomeBG} className='HomeBG' />
          {/* Nav bar */}
          <NavBar />
          <Box className="homeCenterBox">
            <Box className="homeLabel">
              <Typography className='homeBoldText'>HOME AWAY FROM HOME</Typography>
              <img src={HomeYIcon} />
            </Box>
            <Typography className='HCNText'>36,000 properties, 178 countries <span>•</span> Over 13 million verified guest reviews <span>•</span> 24/7 customer service</Typography>

            <Box className="mainSearchBox">
              <Box className="selectorBox">
                <Box className={searchSelector === 0 ? "sltIBox sltBoxActive" : "sltIBox"} onClick={() => setSearchSelecotr(0)}>
                  <Typography>HOSTEL/PG</Typography>
                </Box>
                <Box className={searchSelector === 1 ? "sltIBox sltBoxActive" : "sltIBox"} onClick={() => setSearchSelecotr(1)}>
                  <Typography>FLATS</Typography>
                </Box>
              </Box>

              <Box className="innerSearchBox">
                <Box className="locationSechBox" onClick={() => setLocationDrop(!locationDrop)}>
                  <img src={locationIcon} />
                  <Typography className='locDropText'>{locationDropVal}</Typography>
                  <img className='dropIcon' src={DropIcon} style={{ rotate: locationDrop ? "180deg" : "0deg" }} />

                  <Box className="dropBox" sx={{ height: locationDrop ? "160px" : '0px' }}>
                    {LocationDropItem?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => setLocationDropVal(el)}>
                        <Typography>{el}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box className="sechInputBox">
                  <input type="text" placeholder='Search for locality, landmark' />
                  <Box className="searchBtn">
                    <Typography>Search</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className='hasselBox'>
          <Typography className='hasselHeader'>Be Hassel - Free</Typography>

          <Box className="hessleInputBox">
            <Box className="hasselInnerBox">
              <img src={light} />
              <Typography className='label'>Exclusive experiences</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>

            <Box className="hasselInnerBox">
              <img src={bankSvg} />
              <Typography className='label'>Local & Authentic</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>

          </Box>
          <Box className="hessleInputBox">
            <Box className="hasselInnerBox">
              <img src={personSvg} />
              <Typography className='label'>Hostel Activities</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>
            <Box className="hasselInnerBox">
              <img src={awordSvg} />
              <Typography className='label'>Best selection of hostels</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>
          </Box>
        </Box>


        <Box className="PropertiesSection">
          <Typography className='hasselHeader'>Our Properties</Typography>
          <Box className="proertiseBox">
            {
              PropertiesCard({
                img: propertyImg1,
                btnText: "Popular",
                title: "Entire Sea view Cabin near Juhu Beach",
                location: "Juhu, Mumbai"
              })
            }
            {
              PropertiesCard({
                img: propertyImg2,
                btnText: "Featured",
                title: "Entire Sea view Cabin near Juhu Beach",
                location: "Juhu, Mumbai"
              })
            }
            {
              PropertiesCard({
                img: propertyImg3,
                btnText: "Featured",
                title: "Entire Sea view Cabin near Juhu Beach",
                location: "Juhu, Mumbai"
              })
            }
          </Box>
          <Box className="btnBox">
            <AppBtn btnText="VIEW ALL" />
          </Box>
        </Box>

        <Box className="workSection">
          <img src={paperTop} className='paperTop' />
          <img src={paperBottom} className='paperBottom' />
          <Typography className='hasselHeader'>How it works?</Typography>
          <Typography className='HCNText'>Find furnished rooms for rent and off campus housing options near more than 5,000 colleges and universities</Typography>
          <Box className="proertiseBox">

            {WorkCard({
              img: searchHomeIcon,
              title: "Search",
              subTitle: "You can easily search for hundreds of listings around your school, metro station and city.",
              BtnText: "SEARCH NOW"
            })}
            {WorkCard({
              img: HomeIcon,
              title: "Match",
              subTitle: "Review the listings and profiles of the hosts or guests and match based on your housing needs.",
              BtnText: "EXPLORE NOW"
            })}
            {WorkCard({
              img: calenderIcon,
              title: "Move in",
              subTitle: "Once the booking is approved you can simply move in to your new home.",
              BtnText: "REQUEST NOW"
            })}
          </Box>
        </Box>


        <Footer />
      </Box>
    </>
  )
}
