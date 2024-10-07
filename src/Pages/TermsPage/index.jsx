import React from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";


//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import FindApartment from "../../Components/FindApartment"
import EmailBox from "../../Components/EmailBox"

export default function TermsPage() {
  const headerText = (
    <>
      Terms and Conditions
    </>
  );

  return (
    <>
      <Box className="property aboutPage TermsPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="termsMainSection">
          <img src={pageBackground} className='propertyBg' />
          <Box className="termsTextSection">
            <Typography className='termsHeader'>1. Scope of Service</Typography>
            <Typography className='termNText'>Socio Stays is a platform that connects property owners with guests seeking accommodations. We own and operate all properties listed on our platform.</Typography>

            <Typography className='termsHeader'>2. Services and Contract </Typography>
            <Typography className='termNText'>2.1. On the Socio Stays platform, you can compare various accommodations and book directly with property owners</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>2.2. Socio Stays is not a party to the booking contract between the guest and the property owner. The terms and conditions of the property owner will apply to the booking.</Typography>

            <Typography className='termsHeader'>3. Socio Stays Community</Typography>
            <Typography className='termNText'>3.1. Users may join the Socio Stays Community to interact with other users and share experiences.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>3.2. Users are responsible for the accuracy and completeness of their profile information.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>3.3. Users agree to use the Community in a respectful and appropriate manner, adhering to our community guidelines.</Typography>

            <Typography className='termsHeader'>4. Privacy</Typography>
            <Typography className='termNText'>Socio Stays is committed to protecting your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.</Typography>

            <Typography className='termsHeader'>5. User Obligations</Typography>
            <Typography className='termNText'>5.1. Users agree to use Socio Stays in compliance with all applicable laws and regulations.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>5.2. Users are responsible for the content they upload or share on the platform, ensuring it does not violate any third-party rights or our community guidelines.</Typography>

            <Typography className='termsHeader'>6. Liability</Typography>
            <Typography className='termNText'>6.1. Socio Stays is not liable for any damages, injuries, or losses incurred by users or property owners while using our platform.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>6.2. Users are responsible for their own safety and well-being during their stays.</Typography>

            <Typography className='termsHeader'>7. Governing Law and Dispute Resolution </Typography>
            <Typography className='termNText'>7.1. These Terms of Service shall be governed by and construed in accordance with the laws of India.</Typography>
            <Box className="gapBox"></Box>
            <Typography className='termNText'>7.2. Any disputes arising from these Terms of Service shall be resolved by the law.</Typography>

            <Typography className='termsHeader'> 8. Updates to Terms</Typography>
            <Typography className='termNText'>Socio Stays may update these Terms of Service from time to time. Any changes will be effective upon posting on our website.</Typography>

          </Box>

        </Box>
        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <FindApartment />
        </Box>
        <EmailBox />
        <Footer />
      </Box>

    </>
  )
}
