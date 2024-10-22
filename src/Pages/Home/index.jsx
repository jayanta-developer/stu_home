import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";

//images
import light from "../../Assets/Images/light.svg";
import bankSvg from "../../Assets/Images/bankSvg.svg";
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
import locationIcon from "../../Assets/Images/locationIcon.png";
import calenderIcon from "../../Assets/Images/calenderIcon.svg";
import hasselIcon from "../../Assets/Images/hesselRoundIcon.png";
import searchHomeIcon from "../../Assets/Images/searchHomeIcon.svg";
import filterIcon from "../../Assets/Images/filter-circle.svg"
import searchIcon from "../../Assets/Images/SearchIconV2.png"
import whiteLine from "../../Assets/Images/whiteLine.png"

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import FindApartment from "../../Components/FindApartment"
import Footer from "../../Components/Footer"
import PropertieCard from "../../Components/PropertieCard"
import EmailBox from "../../Components/EmailBox";

//data
import { properitData } from "../../Assets/Data"

export default function Home() {
  const navigate = useNavigate()
  const [locationDrop, setLocationDrop] = useState(false);
  const [locationDropVal, setLocationDropVal] = useState("");

  const [sectorDrop, setSectorDrop] = useState(false);
  const [sectorDropVal, setSectorDropVal] = useState();



  const [searchSelector, setSearchSelecotr] = useState(0);
  const [selectedPropertyId, setSelectedPropertyId] = useState()

  const cityData = properitData.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.city === item.city)
  );
  const sectorData = properitData.filter((el) => el.city === locationDropVal)

  const handleWorkBtnClick = (BtnText) => {
    if (BtnText === "SEARCH NOW") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (BtnText === "BOOK NOW") {
      navigate("/explore")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (BtnText === "EXPLORE NOW") {
      navigate("/blogs")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const WorkCard = ({ img, title, subTitle, BtnText }) => {
    return (
      <Box className="propertiesCard" onClick={() => handleWorkBtnClick(BtnText)}>
        <img src={img} />
        <Typography className='workCardTitle'>{title}</Typography>
        <Typography className='workCardSubTitle'>{subTitle}</Typography>
        <AppBtn onClick={() => handleWorkBtnClick(BtnText)} btnText={BtnText} bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
      </Box>
    )
  }

  const GoProperty = () => {
    navigate("/property/200L4")
    window.scrollTo({ top: 0, behavior: "smooth" })
    localStorage.setItem("propertyIndex", selectedPropertyId)
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
              Experience luxurious <span>•</span> suite-like stays with personalized care <span>•</span> fresh meals <span>•</span> and all the comforts
              of home—at a price that’s better than any hotel
            </Typography>

            <Box className="mobileSearchBar">
              <input type="text" placeholder='Search...' />
              <Typography>{locationDropVal || "Location"}</Typography>
              <img src={searchIcon} className="searchIocn" onClick={GoProperty} />
              <img src={filterIcon} className="filterIcon" onClick={() => setLocationDrop(!locationDrop)} />
              <img src={whiteLine} className="whiteLine" />
              <Box className="MDropBox" sx={{ height: locationDrop ? "145px" : "0px" }}>
                {properitData?.map((el, i) => (
                  <Box key={i} className="dropItem" onClick={() => {
                    setLocationDropVal(el?.location)
                    setLocationDrop(false)
                    setSelectedPropertyId(el.id)
                  }}>
                    <span>{el?.location}</span>
                  </Box>
                ))}
              </Box>
            </Box>


            <Box className="mainSearchBox">
              <Box className="selectorBox">
                <Box className={searchSelector === 0 ? "sltIBox sltBoxActive" : "sltIBox"} onClick={() => setSearchSelecotr(0)}>
                  <Typography>FLATS</Typography>
                </Box>
                <Box className={searchSelector === 1 ? "sltIBox sltBoxActive" : "sltIBox"} onClick={() => setSearchSelecotr(1)}>
                  <Typography>ROOMS </Typography>
                </Box>
              </Box>
              {/* -------------------------------------------------------------------------- */}
              <Box className="innerSearchBox">

                {/* city */}
                <Box className="locationSechBox" onClick={() => setLocationDrop(!locationDrop)}>
                  <img src={locationIcon} />
                  <Typography className='locDropText'>{locationDropVal || "Select your city"}</Typography>
                  <img className='dropIcon' src={DropIcon} style={{ rotate: locationDrop ? "180deg" : "0deg" }} />

                  <Box className="dropBox" sx={{ height: locationDrop ? "auto" : '0px' }}>
                    {cityData?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => {
                        setLocationDropVal(el?.city)
                      }}>
                        <Typography>{el?.city}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* sector */}
                <Box className="locationSechBox" onClick={() => setSectorDrop(!sectorDrop)}>
                  <Typography className='locDropText'>{sectorDropVal || "Area"}</Typography>
                  <img className='dropIcon' src={DropIcon} style={{ rotate: sectorDrop ? "180deg" : "0deg" }} />

                  <Box className="dropBox" sx={{ height: sectorDrop ? "auto" : '0px' }}>
                    {sectorData?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => {
                        setSectorDropVal(el?.Sector)
                        setSelectedPropertyId(el.id)
                      }}>
                        <Typography>{el?.Sector}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>





                <Box className="sechInputBox">
                  <input type="text" placeholder='Search for locality, landmark' />
                  <Box className="searchBtn" onClick={GoProperty}>
                    <Typography>Search</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className='hasselBox'>
          <Typography className='hasselHeader'>Skip The Hassle!</Typography>

          <Box className="hessleInputBox">
            <Box className="hasselInnerBox" sx={{ background: "#2B2625" }}>
              <img src={light} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Experience Like Never Before</Typography>
              <Typography className='subSabel'>Ditch the ordinary! Immerse yourself in local culture, discover hidden gems, and enjoy the comforts of a private haven.</Typography>
            </Box>

            <Box className="hasselInnerBox" sx={{ background: "#3A3533" }}>
              <img src={bankSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Best Selection of Stays </Typography>
              <Typography className='subSabel'>From cozy studios to luxurious villas, we offer unique listings for every budget and travel style. Find your perfect home away from home.</Typography>
            </Box>

          </Box>
          <Box className="hessleInputBox">
            <Box className="hasselInnerBox" sx={{ background: "#292726" }}>
              <img src={personSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Social Activities</Typography>
              <Typography className='subSabel'>Craving social interaction? We offer options with shared spaces and curated adventures. Want privacy? Relax in your own space and add activities on demand.</Typography>
            </Box>
            <Box className="hasselInnerBox" sx={{ background: "#2B2727" }}>
              <img src={awordSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Local and Authentic</Typography>
              <Typography className='subSabel'>Live like a local in vibrant neighborhoods. Connect with welcoming hosts and experience the true essence of your destination.</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="PropertiesSection">
          <Typography className='hasselHeader'>Our Properties</Typography>
          <Box className="proertiseBox">

            {
              properitData?.map((el, i) => (
                <PropertieCard value={el} btnText={"Featured"} key={i} />
              ))
            }

          </Box>
          <Box className="btnBox" onClick={() => {
            navigate("/explore")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}>
            <AppBtn btnText="VIEW ALL" />
          </Box>
        </Box>

        <Box className="workSection">
          <img src={paperCut} className='paperTop' />
          <img style={{ rotate: "180deg" }} src={paperCut} className='paperBottom' />
          <Typography className='hasselHeader'>How Does It Work?</Typography>
          <Typography className='HCNText'>Find easy stays for rent on and off campus near more than 5,000 colleges and universities!</Typography>
          <Box className="workCardBox">

            {WorkCard({
              img: searchHomeIcon,
              title: "Search & Discover",
              subTitle: "Explore unique listings in vibrant neighborhoods, from budget-friendly studios to luxurious villas. Find your perfect local haven.",
              BtnText: "SEARCH NOW"
            })}
            {WorkCard({
              img: HomeIcon,
              title: "Book & Connect",
              subTitle: "Secure your stay with a few clicks and connect with your friendly host. Get insider tips on local gems!",
              BtnText: "BOOK NOW"
            })}
            {WorkCard({
              img: calenderIcon,
              title: "Experience & Explore",
              subTitle: "Immerse yourself in the local culture, discover hidden treasures, and relax in the comfort of your private space.",
              BtnText: "EXPLORE NOW"
            })}
          </Box>
        </Box>
        <FindApartment />

        <EmailBox />
        <Footer />
      </Box>
    </>
  )
}
