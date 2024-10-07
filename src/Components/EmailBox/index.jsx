import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, Typography } from '@mui/material';

//Images
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import paperCut from "../../Assets/Images/paperCut.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon from "../../Assets/Images/blackArrow.png";


export default function EmailBox() {
  const [email, setEmail] = useState()


  const handleSubmit = async () => {
    toast.success("Uur team will contact you shortly!")
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz6KIO_lw9KUwi9UBIh6ZtOoDjgJHnoWVWXC8S4zVXdJdQGt1hUpBJqTOy7R-ozpXe8/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Email saved successfully');
      } else {
        alert('Failed to save email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setTimeout(() => {
      // window.scrollTo({ top: 0, behavior: "smooth" })
      window.location.reload()
    }, 1500)
  };


  return (
    <>
      <Box className="aparEmailBox">
        <ToastContainer />
        <img src={paperCut} className='paperTop' />
        <Box className="aparMailBox">
          <img className='InboxIcon' src={inboxIcon} />
          <Box >
            <Typography className='aptHeaderText'>Join Our Journey and Gain Industrial Experience</Typography>
            <Typography className='aptSubHeader_Text'>Sign up to our newsletter for deals, inspo and other travel treats!</Typography>
          </Box>
          <Box className="mailSendBox">
            <img src={mailIcon} className='mailIcon' />
            <Box className="sendMailBtn" onClick={handleSubmit}>
              <img src={arrowIcon} className='arrowIcon' />
            </Box>
            <input type="email" placeholder='Your Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
