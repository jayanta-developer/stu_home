import React, { useState } from 'react';
import "./style.css";

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
import SimpleMap from "../../Components/Map"
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { AppBtn } from "../../Components/ButtonBox"
import EmailBox from "../../Components/EmailBox";

export default function Contact() {
  const [genderDrop, setGenderDrop] = useState(false)
  const [genderDropVal, setGenderDropVal] = useState("")
  const [countryDrop, setCountryDrop] = useState(false)
  const [countryDropVal, setCountryDropVal] = useState("")

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
      window.location.href = `tel:${7738082241}`;
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


  return (
    <>
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
              <SimpleMap latVal={28.42751626252157} lngVal={77.04680663898678} zoomVal={10} />
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
                <input placeholder='JHON' />
              </Box>
              <Box className="inputBox">
                <Typography>Last Name *</Typography>
                <input placeholder='STIVEN' />
              </Box>
            </Box>

            <Box className="inputTowBox">
              <Box className="inputBox">
                <Typography>Email ID *</Typography>
                <input placeholder='info@student.com' />
              </Box>
              <Box className="inputBox">
                <Typography>Phone Number *</Typography>
                <input placeholder='123-456-7890' />
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
                <Typography>Nationality *</Typography>
                <img style={{ display: countryDropVal?.flag ? "block" : "none" }} className='countryDropImg' src={countryDropVal?.flag} />
                <input style={{ paddingLeft: "40px" }} type="text" value={countryDropVal?.name} placeholder='Select Your Gender' />
                <Box className="dropBox" sx={{ height: countryDrop ? "130px" : "0px" }}>
                  {
                    countries?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => setCountryDropVal(el)}>
                        <span>{el.name}</span>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
            </Box>

            <Box className="inputBox subjectInput">
              <Typography>Subject</Typography>
              <input placeholder='Your Subject' />
            </Box>

            <Box className="inputBox messageInput">
              <Typography>Message</Typography>
              <textarea placeholder='Write something here...' />
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
