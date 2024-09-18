import React from 'react'
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";



import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png";
import bathIcon from "../../Assets/Images/bathIcon.png";
import roomAreaIcon from "../../Assets/Images/roomAreiIcon.png";
import badIcon from "../../Assets/Images/badIcon.png";
import star from "../../Assets/Images/star.png";
import LoveIcon from "../../Assets/Images/loveIcon.png";
import loveBlack from "../../Assets/Images/loveB.png"



export default function PropertieCard({ img, btnText, title, location, key, price, id }) {
  const isPropertyFevData = JSON.parse(localStorage.getItem("propertyFev"));
  const navigate = useNavigate()

  return (
    <>
      <Box key={key} className="propertiesCard" onClick={() => {
        navigate("/property/200L4")
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}>
        <Box className="coverImg">
          <img src={img} />
          <Box className='loveIcon'>
            <img src={
              isPropertyFevData?.includes(id) ? LoveIcon : loveBlack
            } />
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
            <Typography>₹ {price} <samp>/ PER DAY</samp></Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
