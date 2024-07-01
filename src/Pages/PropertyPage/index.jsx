import React from 'react';
import "./style.css"


//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import callIcon from "../../Assets/Images/callIcon.png"
import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png";
import starIcon from "../../Assets/Images/star.png";
import shareIcon from "../../Assets/Images/shareIcon.svg"
import loveIcon from "../../Assets/Images/loverIcon.svg"
import searchIcon from "../../Assets/Images/searchIcon.svg"
import propertyImg from "../../Assets/Images/propertyImg.png";
import galleryIcon from "../../Assets/Images/gallery-24.png";
import badIcon from "../../Assets/Images/badIcon.png";
import bathIcon from "../../Assets/Images/bathIcon.png";
import roomAreaIcon from "../../Assets/Images/roomAreiIcon.png";
import avatart from "../../Assets/Images/avatar.png";
import messageIcon from "../../Assets/Images/messageIcon.svg";
import callIconSvg from "../../Assets/Images/callIconsvg.svg";
import AirIcon from "../../Assets/Images/airIconSvg.svg"
import kitchenIcon from "../../Assets/Images/kitchenSvg.svg"
import carIcon from "../../Assets/Images/carIconSvg.svg"
import wifiIcon from "../../Assets/Images/wifiIcon.svg"
import paperCut from "../../Assets/Images/paperCut.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon from "../../Assets/Images/blackArrow.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import Footer from '../../Components/Footer';
import SimpleMap from "../../Components/Map"
import { AppBtn } from "../../Components/ButtonBox"

export default function PropertyPage() {
  const headerText = "Our Properties Details";

  return (
    <>
      <Box className="property">
        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText.toUpperCase()}</Typography>
        </Box>

        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <Box className="propertyTitleBox">
            <Box className="proTilInnerBox">
              <Typography className='propertyTitle'>Entire Sea view Cabin Near Juhu Beach</Typography>
              <Typography className='propertyPriceText'>₹ 2,700 <span>/ month</span></Typography>
            </Box>

            <Box className="proTilInnerBox">
              <Box className="propLocBox">

                <Box className="locText">
                  <img src={locationOutIcon} />
                  <Typography>Juhu, Mumbai</Typography>
                </Box>

                <Box className="start_Box">
                  <img src={starIcon} />
                  <Typography>4.8 <span>(74)</span></Typography>
                </Box>

                <Box className="perpelBtn">
                  <img src={shareIcon} />
                  <Typography>Share</Typography>
                </Box>
                <Box className="perpelBtn">
                  <img src={loveIcon} />
                  <Typography>Favorite</Typography>
                </Box>
                <Box className="perpelBtn">
                  <img src={searchIcon} />
                  <Typography>Browse Nearby listing</Typography>
                </Box>
              </Box>

              <Box className="propContactBtn">
                <img src={callIcon} />
                <Typography>Contact Sellers</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="properyImgBox">
            <Box className="showAllBtn">
              <img src={galleryIcon} />
              <Typography>View All Photos</Typography>
            </Box>
            <Box className="imgBox1">
              <img src={propertyImg} />
            </Box>
            <Box className="imgBox2">
              <Box className="img2Inn">
                <img src={propertyImg} />
              </Box>
              <Box className="img2Inn">
                <img src={propertyImg} />
              </Box>
            </Box>
          </Box>

          <Box className="propertyInfoBox">
            <Box className="propertyInfoInBox overViewBox">
              <Box className="overTitelBOx">
                <Typography className='overViewTitle'>Overview</Typography>
                <Box className="cardBtn">
                  <Typography>Popular</Typography>
                </Box>
              </Box>

              <Box className="start_Box">
                <img src={starIcon} />
                <Typography>4.8 <span>(74)</span></Typography>
              </Box>
              <Typography className='overSubHeader'>Entire Sea view Cabin Near Juhu Beach</Typography>

              <Box className="locationBox">
                <Box className="CardlocationBox">
                  <img src={locationOutIcon} />
                  <Typography>Juhu, Mumbai</Typography>
                </Box>
                <Box className="proDetails">
                  <img src={badIcon} />
                  <Typography>3 Rooms</Typography>
                  <img src={bathIcon} />
                  <Typography>3 Bath</Typography>
                  <img src={roomAreaIcon} />
                  <Typography>673 m2</Typography>
                </Box>
              </Box>
              <Box className="overAvatarInfoBox">
                <Box className="avatarBox">
                  <Box className="avatarImg">
                    <img src={avatart} />
                  </Box>
                  <Box className="avatarNamBox">
                    <Typography>Louise Vuitton</Typography>
                    <span>Property owner</span>
                  </Box>
                </Box>

                <Box className="mesCallBox">
                  <Box>
                    <img src={messageIcon} />
                  </Box>
                  <Box>
                    <img src={callIconSvg} />
                  </Box>
                </Box>
              </Box>





            </Box>


            <Box className="propertyInfoInBox facilitiesBox">
              <Typography className='overViewTitle'>Home Facilities</Typography>
              <Box className="facilOuterBox">
                <Box className="facilitiesItemBox">
                  <Box className="facilitesItem">
                    <img src={AirIcon} />
                    <Typography>Air conditioner</Typography>
                  </Box>
                  <Box className="facilitesItem">
                    <img src={kitchenIcon} />
                    <Typography>Kitchen</Typography>
                  </Box>
                  <Box className="facilitesItem">
                    <img src={carIcon} />
                    <Typography>Free parking</Typography>
                  </Box>
                  <Box className="facilitesItem">
                    <img src={wifiIcon} />
                    <Typography>Free WiFi</Typography>
                  </Box>
                </Box>
                <Box className="facilitiesItemBox">
                  <Box className="facilitesItem">
                    <img src={AirIcon} />
                    <Typography>Air conditioner</Typography>
                  </Box>
                  <Box className="facilitesItem">
                    <img src={kitchenIcon} />
                    <Typography>Kitchen</Typography>
                  </Box>
                  <Box className="facilitesItem">
                    <img src={carIcon} />
                    <Typography>Free parking</Typography>
                  </Box>
                  <Box className="facilitesItem">
                    <img src={wifiIcon} />
                    <Typography>Free WiFi</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>

          <Box className="propertyInfoBox">
            <Box className="propertyInfoInBox aboutLocBox">
              <Typography className='overViewTitle'>About location’s neighborhood</Typography>
              <Typography my={3}>This cabin comes with Smart Home System and beautiful viking style. You can see sunrise in the morning with City View from full Glass Window.</Typography>
              <Typography mb={3}>This unit is surrounded by business district of West Surabaya that offers you the city life as well as wide range of culinary.</Typography>
              <Typography mb={5}>This apartment equipped with Washing Machine, Electric Stove, Microwave, Refrigerator, Cutlery.</Typography>
              <Box className="costBtn">
                <Typography>Average living cost</Typography>
                <span>500 ₹ /month</span>

              </Box>
            </Box>



            <Box className="propertyInfoInBox testimonialsBox">
              <Typography className='overViewTitle'>Testimonials</Typography>

              <Box className="reviewBox">
                <Box mb={1} className="avatarBox">
                  <Box className="avatarImg">
                    <img src={avatart} />
                  </Box>
                  <Box className="avatarNamBox">
                    <Typography>Louise Vuitton</Typography>
                    <Box>
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                    </Box>
                  </Box>
                </Box>
                <Typography className='reviewText'>My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer...   <span>Read more</span></Typography>
              </Box>

              <Box className="reviewBox">
                <Box mb={1} className="avatarBox">
                  <Box className="avatarImg">
                    <img src={avatart} />
                  </Box>
                  <Box className="avatarNamBox">
                    <Typography>Louise Vuitton</Typography>
                    <Box>
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                    </Box>
                  </Box>
                </Box>
                <Typography className='reviewText'>My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer...  <span>Read more</span></Typography>
              </Box>



            </Box>
          </Box>

          <Box className="MapBox">
            <SimpleMap />
          </Box>

          <Box className="rentSection">
            <Box>
              <Typography className='propertyPriceText'>₹ 2,700 <span>/ month</span></Typography>
              <samp>Payment estimation</samp>
            </Box>
            <AppBtn btnText="Rent" />
          </Box>

          <Box className="apartmentBox">
            <Box className="apartmentInnerBox">
              <Typography className='aptHeaderText'>Find New Apartments</Typography>
              <Typography className='aptSubHeaderText'>Enjoy the comforts and flexibility of a private space, with various amenities near more than 5000 colleges and universities.</Typography>
              <AppBtn btnText="SEARCH NOW" bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
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
                <img src={arrowIcon} className='arrowIcon' />
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
