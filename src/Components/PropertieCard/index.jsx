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



export default function PropertieCard({ key, value, btnText }) {
  const isPropertyFevData = JSON.parse(localStorage.getItem("propertyFev"));
  const navigate = useNavigate()

  return (
    <>
      <Box key={key} className="propertiesCard" onClick={() => {
        navigate("/property/200L4")
        window.scrollTo({ top: 0, behavior: "smooth" })
        localStorage.setItem("propertyIndex", value?.id)
      }}>
        <Box className="coverImg">
          <img src={value?.images[2]} />
          <Box className='loveIcon'>
            <img src={
              isPropertyFevData?.includes(value?.id) ? LoveIcon : loveBlack
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
          <Typography className='proCardTitle'>{value?.title}</Typography>
          <Box className="CardlocationBox">
            <img src={locationOutIcon} />
            <Typography>{value?.city}, {value?.Sector}</Typography>
          </Box>
          <Box className="proDetails">
            <img src={badIcon} />
            <Typography>{value?.room} Rooms</Typography>
            <img src={bathIcon} />
            <Typography>{value?.bath} Bath</Typography>
            <img src={roomAreaIcon} />
            <Typography>{value?.area}</Typography>
          </Box>
          <Box className="priceBox">
            <Typography>₹ {value?.price} <samp>/ PER DAY</samp></Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
