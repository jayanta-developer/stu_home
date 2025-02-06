import React, { useState } from 'react';
import "./style.css";
import { Helmet } from "react-helmet-async";

//images
import blackBg from "../../Assets/Images/blackBg.jpg";
import HomeBG from "../../Assets/Images/propertyBg.png";
import mailIcon from "../../Assets/Images/mailIcon.png"
import callIcon from "../../Assets/Images/callIconS.png"
import locationIcon from "../../Assets/Images/locationS.png"
import facebookIcon from "../../Assets/Images/FacebookIcon.png";
import TwitterIcon from "../../Assets/Images/twitterSIcon.png";
import InstaIcon from "../../Assets/Images/instaIcon.png";
import lingkdinIcon from "../../Assets/Images/lingkdinIcon.png"

//data
import { countries } from "../../Assets/Data"

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { AppBtn } from "../../Components/ButtonBox"
import EmailBox from "../../Components/EmailBox";
import MapComponent from "../../Components/Map"


export default function Contact() {
  const [genderDrop, setGenderDrop] = useState(false)
  const [genderDropVal, setGenderDropVal] = useState("")
  const [countryDrop, setCountryDrop] = useState(false)
  const [countryDropVal, setCountryDropVal] = useState("")
  const [age, setAge] = useState("");
  const [contactVal, setContactVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    subject: "",
    message: "",
  });



  const GRowItem = ({ icon, title, subTitle, id }) => {
    return (
      <Box className="getTItem">
        <Box className='GTItemIconBox'>
          <img src={icon} />
        </Box>
        <Box>
          <Typography >{title}</Typography>
          <span id={id} onClick={handelInfoClick}>{subTitle}</span>
        </Box>
      </Box>
    )
  }

  const handelInfoClick = (e) => {
    if (e.target.id === "phone") {
      window.location.href = `tel:${process.env.REACT_APP_PHONE_NUMBER}`;
    } else if (e.target.id === "email") {
      window.location.href = `mailto:${"Platforms@sociostays.com"}`;
    } else if (e.target.id === "location") {
      const url = `https://www.google.com/maps?q=${28.427544567977957},${77.04680663898678}`;
      window.open(url, "_blank");
    }
  }

  const genders = [
    "Male",
    "Female",
    "Others"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation rules
    if (name === "phone" && !/^\d*$/.test(value)) return; // Only numbers
    if (name === "age" && (!/^\d*$/.test(value) || value.length > 3)) return; // Only numbers, max 3 digits
    if (name === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) return; // Basic email validation

    setContactVal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Box className="property aboutPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>Contact Us</Typography>
          <Typography className='contactSubHeader'>Get in touch and let us know how we can help.</Typography>
        </Box>

        <Box className="getTouchBox">
          <img src={blackBg} className='ourMvBackground' />
          <Box className="getTouchInnderBox">
            <Box className="getTTextBox">
              <Typography className='getTHeader'>Get in Touch</Typography>
              <Typography className='getTSubHeader'>For any specific questions or booking requests, don't hesitate to contact us. We're here to help make your stay perfect! </Typography>
              <Box className="getTItemBox">
                {GRowItem({ icon: locationIcon, title: "Head Office", subTitle: "Malibu Town, Sector 47 Gurugram, Harayana - 122018", id: "location" })}
                {GRowItem({ icon: mailIcon, title: "Email Us", subTitle: "Platforms@sociostays.com", id: "email" })}
                {GRowItem({ icon: callIcon, title: "Call Us", subTitle: "8920149160", id: "phone" })}
              </Box>
            </Box>
            <Box className="getTMapBox">
              <MapComponent
                latitude={28.42751626252157} // Latitude
                longitude={77.04680663898678} // Longitude
                description={'Harayana'} // Description for the popup
              />
            </Box>
          </Box>
        </Box>

        <Box className="messageBox">
          <Box className="messageHeaderBox">
            <Typography>Send us a Message</Typography>
            <span>Ready to experience Gurgaon like a local? Send us a message and let's plan your stay!</span>
          </Box>
          <Box className="messageFooterBox">
            <img src={blackBg} className='ourMvBackground' />
            <Box className="mideaText">
              <Typography>Follow Our Social Media</Typography>
              <Box className="mideaBox">
                <Box>
                  <img src={facebookIcon} />
                </Box>
                <Box>
                  <img src={TwitterIcon} />
                </Box>
                <Box>
                  <img src={InstaIcon} />
                </Box>
                <Box>
                  <img src={lingkdinIcon} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="messageInputBox">
            <Box className="inputTowBox">
              <Box className="inputBox">
                <Typography>First Name *</Typography>
                <input placeholder='JHON' name='firstName' value={contactVal.firstName} onChange={handleChange} />
              </Box>
              <Box className="inputBox">
                <Typography>Last Name *</Typography>
                <input placeholder='STIVEN' name='lastName' value={contactVal.lastName} onChange={handleChange} />
              </Box>
            </Box>

            <Box className="inputTowBox">
              <Box className="inputBox">
                <Typography>Email ID *</Typography>
                <input placeholder='info@student.com' name='email' value={contactVal.email} onChange={handleChange} />
              </Box>
              <Box className="inputBox">
                <Typography>Phone Number *</Typography>
                <input placeholder='123-456-7890' type='text' name='phone' value={contactVal.phone} onChange={handleChange} />
              </Box>
            </Box>

            <Box className="inputTowBox">
              <Box className="inputBox" onClick={() => setGenderDrop(!genderDrop)}>
                <Typography>Your Gender</Typography>
                <input type="text" value={genderDropVal} placeholder='Select Your Gender' />
                <Box className="dropBox" sx={{ height: genderDrop ? "130px" : "0px" }}>
                  {
                    genders?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => setGenderDropVal(el)}>
                        <span>{el}</span>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
              <Box className="inputBox" onClick={() => setCountryDrop(!countryDrop)}>
                <Typography>Age</Typography>
                <img style={{ display: countryDropVal?.flag ? "block" : "none" }} className='countryDropImg' src={countryDropVal?.flag} />
                <input placeholder='How old are you ?' name='age' value={contactVal.age} onChange={handleChange} />

              </Box>
            </Box>

            <Box className="inputBox subjectInput">
              <Typography>Subject</Typography>
              <input placeholder='Your Subject' name='subject' value={contactVal.subject} onChange={handleChange} />
            </Box>

            <Box className="inputBox messageInput">
              <Typography>Message</Typography>
              <textarea placeholder='Write something here...' name='message' value={contactVal.message} onChange={handleChange} />
            </Box>
            <Box className="fromBtnBox">
              <AppBtn btnText="SEND MESSAGE" />
            </Box>
          </Box>

        </Box>

        <EmailBox />
        <Footer />
      </Box>

    </>
  )
}
