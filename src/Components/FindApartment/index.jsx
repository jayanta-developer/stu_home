import React from 'react'
import { Box, Typography } from '@mui/material';
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import { AppBtn } from "../../Components/ButtonBox"


export default function FindApartment() {
  return (
    <>
      <Box className="apartmentBox">
        <Box className="apartmentInnerBox">
          <Typography className='aptHeaderText'>Home like stays at Sociostays</Typography>
          <Typography className='aptSubHeaderText'>Want to enjoy the comforts and flexibility of a private space near you ?</Typography>
          <AppBtn btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
          <img src={apartMentImg} className='apartMentImg' />
        </Box>
      </Box>
    </>
  )
}
