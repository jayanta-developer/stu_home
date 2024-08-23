import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";

//images
import star from "../../Assets/Images/star.png";
import light from "../../Assets/Images/light.svg";
import badIcon from "../../Assets/Images/badIcon.png";
import bankSvg from "../../Assets/Images/bankSvg.svg";
import bathIcon from "../../Assets/Images/bathIcon.png";
import LoveIcon from "../../Assets/Images/loveIcon.png";
import HomeIcon from "../../Assets/Images/homeIcon.svg";
import paperCut from "../../Assets/Images/paperCut.png";
import awordSvg from "../../Assets/Images/awardSvg.svg";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import HomeYIcon from "../../Assets/Images/HomeYIcom.png";
import personSvg from "../../Assets/Images/personSvg.svg";
import arrowIcon from "../../Assets/Images/blackArrow.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import DropIcon from "../../Assets/Images/grayDropIcon.png";
import HomeBG from "../../Assets/Images/homeBackgRound.png";
import HomeBGTabe from "../../Assets/Images/homeBackgRoundTabe.png";
import HomeBGMobile from "../../Assets/Images/homeBackgRoundMobile.png";
import propertyImg2 from "../../Assets/Images/propertiImg2.png";
import roomAreaIcon from "../../Assets/Images/roomAreiIcon.png";
import locationIcon from "../../Assets/Images/locationIcon.png";
import calenderIcon from "../../Assets/Images/calenderIcon.svg";
import hasselIcon from "../../Assets/Images/hesselRoundIcon.png";
import propertyImg3 from "../../Assets/Images/PropertieImg3.png";
import propertyImg1 from "../../Assets/Images/propertieImg1.png";
import searchHomeIcon from "../../Assets/Images/searchHomeIcon.svg";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png";
import filterIcon from "../../Assets/Images/filter-circle.svg"
import searchIcon from "../../Assets/Images/searchIcon.png"
import whiteLine from "../../Assets/Images/whiteLine.png"

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer"

//data
import { properitData } from "../../Assets/Data"

export default function Home() {
  const navigate = useNavigate()
  const [searchSelector, setSearchSelecotr] = useState(0);
  const [locationDrop, setLocationDrop] = useState(false);
  const [locationDropVal, setLocationDropVal] = useState("");

  const LocationDropItem = [
    "Nagpur",
    "Solapur",
    "Mumbai",
    "Pune",
    "Thane",
  ];


  const PropertiesCard = ({ img, btnText, title, location, key }) => {
    return (
      <Box key={key} className="propertiesCard" onClick={() => {
        navigate("/property")
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}>
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
        <AppBtn btnText={BtnText} bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
      </Box>
    )
  }

  return (
    <>
      <Box className="homeContainer">
        <Box className="homeSection">
          <img src={HomeBG} className='HomeBG HomeBGDesktop' />
          <img src={HomeBGTabe} className='HomeBG HomeBGTabe' />
          <img src={HomeBGMobile} className='HomeBG HomeBGMobile' />
          {/* Nav bar */}
          <NavBar />
          <Box className="homeCenterBox">
            <Box className="homeLabel">
              <Typography className='homeBoldText'>MAKE EVERY TRIP WORTH THE STAY</Typography>
              <img src={HomeYIcon} />
            </Box>
            <Typography className='HCNText'>
              36,000 properties, 178 countries
              <span>•</span> Over 13 million verified
              guest reviews <span>•</span> 24/7 customer service
            </Typography>

            <Box className="mobileSearchBar">
              <input type="text" placeholder='Search...' />
              <Typography>{locationDropVal || "Location"}</Typography>
              <img src={searchIcon} className="searchIocn" />
              <img src={filterIcon} className="filterIcon" onClick={() => setLocationDrop(!locationDrop)} />
              <img src={whiteLine} className="whiteLine" />
              <Box className="MDropBox" sx={{ height: locationDrop ? "145px" : "0px" }}>
                {LocationDropItem?.map((el, i) => (
                  <Box key={i} className="dropItem" onClick={() => {
                    setLocationDropVal(el)
                    setLocationDrop(false)
                  }}>
                    <span>{el}</span>
                  </Box>
                ))}
              </Box>
            </Box>


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
                  <Typography className='locDropText'>{locationDropVal || "Select your location"}</Typography>
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
            <Box className="hasselInnerBox" sx={{ background: "#2B2625" }}>
              <img src={light} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Exclusive experiences</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>

            <Box className="hasselInnerBox" sx={{ background: "#3A3533" }}>
              <img src={bankSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Local & Authentic</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>

          </Box>
          <Box className="hessleInputBox">
            <Box className="hasselInnerBox" sx={{ background: "#292726" }}>
              <img src={personSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Hostel Activities</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>
            <Box className="hasselInnerBox" sx={{ background: "#2B2727" }}>
              <img src={awordSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Best selection of hostels</Typography>
              <Typography className='subSabel'>Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!</Typography>
            </Box>
          </Box>
        </Box>


        <Box className="PropertiesSection">
          <Typography className='hasselHeader'>Our Properties</Typography>
          <Box className="proertiseBox">

            {
              properitData?.map((el, i) => (
                PropertiesCard({
                  img: el.images[2],
                  btnText: "Featured",
                  title: el.title,
                  location: el.location,
                  key: i
                })
              ))
            }

          </Box>
          <Box className="btnBox">
            <AppBtn btnText="VIEW ALL" />
          </Box>
        </Box>

        <Box className="workSection">
          <img src={paperCut} className='paperTop' />
          <img style={{ rotate: "180deg" }} src={paperCut} className='paperBottom' />
          <Typography className='hasselHeader'>How it works?</Typography>
          <Typography className='HCNText'>Find furnished rooms for rent and off campus housing options near more than 5,000 colleges and universities</Typography>
          <Box className="workCardBox">

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

        <Box className="apartmentBox">

          <Box className="apartmentInnerBox">
            <Typography className='aptHeaderText'>Find New Apartments</Typography>
            <Typography className='aptSubHeaderText'>Enjoy the comforts and flexibility of a private space, with various amenities near more than 5000 colleges and universities.</Typography>
            <AppBtn btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
            <img src={apartMentImg} className='apartMentImg' />
          </Box>

        </Box>
        <Box className="aparEmailBox">
          <img src={paperCut} className='paperTop' />
          <Box className="aparMailBox">
            <img className='InboxIcon' src={inboxIcon} />
            <Box >
              <Typography className='aptHeaderText'>Join Our Journey and
                Gain Industrial Experience</Typography>
              <Typography className='aptSubHeader_Text'>Sign up to our newsletter for deals,
                inspo and other travel treats!</Typography>
            </Box>

            <Box className="mailSendBox">
              <img src={mailIcon} className='mailIcon' />
              <Box className="sendMailBtn">
                <img src={arrowIcon} className='arrowIcon' />
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
