import React, { useState } from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/homeBackgRound.png";
import HomeYIcon from "../../Assets/Images/HomeYIcom.png";
import locationIcon from "../../Assets/Images/locationIcon.png";
import DropIcon from "../../Assets/Images/grayDropIcon.png";

import light from "../../Assets/Images/light.svg";
import bankSvg from "../../Assets/Images/bankSvg.svg"
import personSvg from "../../Assets/Images/personSvg.svg"
import awordSvg from "../../Assets/Images/awardSvg.svg"

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";

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
  ]

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

      </Box>
    </>
  )
}
