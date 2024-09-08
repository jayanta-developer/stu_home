import React from 'react';
import "./style.css";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import paperCut from "../../Assets/Images/paperCut.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon2 from "../../Assets/Images/blackArrow.png";
import bulletIcon from "../../Assets/Images/bulletIcon.png"
import blogImg1 from "../../Assets/Images/blogImg1.jpeg"
import blogImg2 from "../../Assets/Images/blogImg2.jpeg"
import blogImg3 from "../../Assets/Images/blogImg3.jpeg"
import blogImg4 from "../../Assets/Images/blogImg4.jpeg"
import blogImg5 from "../../Assets/Images/blogImg5.jpg"
import blogImg6 from "../../Assets/Images/blogImg6.webp"


//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import Footer from "../../Components/Footer";

export default function Blogs() {
  const headerText = (
    <>
      Our Blogs
    </>
  );

  return (
    <>
      <Box className="property aboutPage TermsPage policyPage blogPage">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText}</Typography>
        </Box>
        <Box className="BlogSection">
          <img src={pageBackground} className='propertyBg' />

          <Box className="blogInSection">
            <Typography className='blogHeader' data-aos="fade-up">Discover Delhi’s Top Budget-Friendly Fun Stays: Affordable Flats for an Unforgettable Experience</Typography>
            <Typography className='blogSubText' data-aos="fade-up">Delhi’s vibrant atmosphere doesn’t have to come with a hefty price tag. If you’re looking for budget-friendly accommodations that offer both comfort and fun, we’ve got you covered. Here’s a curated list of affordable flats in Delhi that promise an unforgettable experience without stretching your budget.</Typography>


            <Box className="blogRow fbRowBox">
              <Box className="BImgBox" data-aos="fade-right" >
                <img src={blogImg1} />
              </Box>
              <Box className="BTextBox" data-aos="fade-left">
                <Typography className='rowHeader'>Cozy Corner in Paharganj</Typography>
                <Typography className='rowSubHeader'>Start your budget adventure at the Cozy Corner in Paharganj. This charming flat offers a welcoming atmosphere with modern amenities at an affordable price. Located in one of Delhi’s most eclectic neighborhoods, you’ll be close to local markets, street food, and vibrant nightlife while enjoying a cozy and comfortable stay.</Typography>
                <Box className="RtGapBox"></Box>
                <Typography className='rowHeader'>The Affordable Haven in Karol Bagh</Typography>
                <Typography className='rowSubHeader'>The Affordable Haven in Karol Bagh is ideal for those who want to be in the heart of the action. This budget-friendly flat features modern furnishings and a central location that provides easy access to shopping and dining options. It’s perfect for travelers who want to explore the city without spending too much.
                </Typography>
              </Box>
            </Box>



            <Box className="blogRow fbRowBox">
              <Box className="BTextBox" data-aos="fade-right" >
                <Typography className='rowHeader'>Socio Stays, Gurugram: 4BHK (4 Floors)</Typography>
                <Typography className='rowSubHeader'>Just a short drive from Delhi, Socio Stays in Gurugram offers excellent value for large groups. With four floors, each hosting a 4BHK flat, you can enjoy ample space and privacy. This setup is ideal for budget-conscious travelers who want to accommodate multiple guests comfortably while still keeping costs down.</Typography>
                <Box className="RtGapBox"></Box>
                <Typography className='rowHeader'>Urban Retreat in South Delhi</Typography>
                <Typography className='rowSubHeader'>The Urban Retreat in South Delhi offers a stylish yet budget-friendly option for those seeking comfort and tranquility. This 3-bedroom flat provides a relaxed atmosphere with a communal garden space, making it perfect for unwinding after a day of exploring. Its location provides easy access to local attractions and dining spots.</Typography>
              </Box>
              <Box className="BImgBox" data-aos="fade-left">
                <img src={blogImg2} />
              </Box>
            </Box>

            <Box className="blogRow fbRowBox">
              <Box className="BImgBox" data-aos="fade-right">
                <img src={blogImg6} />
              </Box>
              <Box className="BTextBox" data-aos="fade-left">
                <Typography className='rowHeader'>Budget Bliss in Saket</Typography>
                <Typography className='rowSubHeader'>Experience comfort on a budget at Budget Bliss in Saket. This flat combines affordability with modern amenities, including a spacious living area and a fully equipped kitchen. Located near Saket’s shopping and dining hubs, it’s a great choice for travelers who want convenience without the high price tag.
                </Typography>
                <Box className="RtGapBox"></Box>
                <Typography className='rowHeader'>The Value Nest in Hauz Khas
                </Typography>
                <Typography className='rowSubHeader'>The Value Nest in Hauz Khas offers a chic and affordable option in one of Delhi’s trendiest neighborhoods. This flat features stylish interiors and is close to local bars, cafes, and markets, making it ideal for those who want to experience the city’s vibrant scene without overspending.
                </Typography>
              </Box>
            </Box>


            <Box className="blogRow fbRowBox">
              <Box className="BTextBox" data-aos="fade-right">
                <Typography className='rowHeader'>Savvy Stay in Chanakyapuri
                </Typography>
                <Typography className='rowSubHeader'>Savvy Stay in Chanakyapuri provides a comfortable and cost-effective solution for travelers seeking a bit of luxury on a budget. With modern amenities and a central location, this flat offers a great balance of affordability and comfort, ensuring a pleasant stay in the capital.
                </Typography>
                <Box className="RtGapBox"></Box>
                <Typography className='rowHeader'>The Budget Gem in Janakpuri</Typography>
                <Typography className='rowSubHeader'>The Budget Gem in Janakpuri is perfect for travelers who want a peaceful retreat without straining their finances. This flat features a cozy atmosphere with easy access to local transportation and shopping areas, making it a great base for exploring Delhi.
                </Typography>
              </Box>
              <Box className="BImgBox" data-aos="fade-left">
                <img src={blogImg4} />
              </Box>
            </Box>


            <Box className="blogRow fbRowBox">
              <Box className="BImgBox" data-aos="fade-right">
                <img src={blogImg5} />
              </Box>
              <Box className="BTextBox" data-aos="fade-left">
                <Typography className='rowHeader'>Affordable Luxury in Vasant Kunj
                </Typography>
                <Typography className='rowSubHeader'>Affordable Luxury in Vasant Kunj offers a taste of elegance at a budget-friendly price. This flat provides a stylish and comfortable setting with modern amenities, and its location ensures you’re well-connected to key areas of the city while enjoying great value.

                </Typography>
                <Box className="RtGapBox"></Box>
                <Typography className='rowHeader'>The Thrifty Escape in Rohini

                </Typography>
                <Typography className='rowSubHeader'>Complete your budget-friendly stay with The Thrifty Escape in Rohini. This flat offers practical amenities and a convenient location at an affordable price. Ideal for travelers who prioritize value and convenience, it provides a comfortable base for exploring Delhi without overspending.

                </Typography>
              </Box>
            </Box>
            <Box className="RtGapBox"></Box>
            <Box className="RtGapBox"></Box>
            <Box className="RtGapBox"></Box>

            <Typography className='blogHeader' data-aos="fade-up">Conclusion</Typography>
            <Typography className='blogSubText' data-aos="fade-up">Delhi offers a range of budget-friendly flats that promise a fun and memorable experience without compromising on quality. From the vibrant energy of Paharganj to the relaxed atmosphere of South Delhi, these top picks ensure that your stay is both affordable and enjoyable. Choose your ideal budget stay, and get ready to explore Delhi’s dynamic cityscape without breaking the bank!</Typography>
            <Box className="RtGapBox"></Box>



          </Box>
        </Box>

        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <Box className="apartmentBox">
            <Box className="apartmentInnerBox">
              <Typography className='aptHeaderText'>Find New Apartments</Typography>
              <Typography className='aptSubHeaderText'>Enjoy the comforts and flexibility
                of a private space, with various amenities near more than 5000
                colleges and universities.</Typography>
              <AppBtn btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" textColor="#fff" />
              <img src={apartMentImg} className='apartMentImg' />
            </Box>
          </Box>
        </Box>
        <Box className="aparEmailBox">
          <img src={paperCut} className='paperTop' />
          <Box className="aparMailBox">
            <img src={inboxIcon} />
            <Box >
              <Typography className='aptHeaderText'>Join Our Journey and
                Gain Industrial Experience</Typography>
              <Typography>Sign up to our newsletter for deals,
                inspo and other travel treats!</Typography>
            </Box>

            <Box className="mailSendBox">
              <img src={mailIcon} className='mailIcon' />
              <Box className="sendMailBtn">
                <img src={arrowIcon2} className='arrowIcon' />
              </Box>
              <input type="text" placeholder='Your Email address' />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>

    </>
  )
}
