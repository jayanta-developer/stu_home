import React from 'react'
import { Box, Typography } from '@mui/material';
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import { AppBtn } from "../../Components/ButtonBox"
import { useNavigate } from "react-router-dom";


export default function FindApartment() {
  const navigate = useNavigate()

  return (
    <>
      <Box className="apartmentBox">
        <Box className="apartmentInnerBox">
          <Typography className='aptHeaderText'>Home like stays at <br />Sociostays</Typography>
          <Typography className='aptSubHeaderText'>Want to enjoy the comforts and flexibility of a private space near you ?</Typography>
          <AppBtn onClick={() => {
            navigate("/")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }} btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
          <img src={apartMentImg} className='apartMentImg' />
        </Box>
      </Box>
    </>
  )
}
