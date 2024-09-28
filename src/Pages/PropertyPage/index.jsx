import React, { useState, useEffect } from 'react';
import "./style.css"


//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import callIcon from "../../Assets/Images/callIcon.png"
import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png";
import starIcon from "../../Assets/Images/star.png";
import shareIcon from "../../Assets/Images/shareIcon.svg"
import loveIcon from "../../Assets/Images/loveIconWLine.png"
import loveIconW from "../../Assets/Images/loveIconW.png"
import searchIcon from "../../Assets/Images/searchIcon.svg"
import propertyImg from "../../Assets/Images/propertyImg.png";
import galleryIcon from "../../Assets/Images/gallery-24.png";
import badIcon from "../../Assets/Images/badIcon.png";
import bathIcon from "../../Assets/Images/bathIcon.png";
import roomAreaIcon from "../../Assets/Images/roomAreiIcon.png";
import avatart from "../../Assets/Images/avatar.png";
import messageIcon from "../../Assets/Images/messageIcon.svg";
import callIconSvg from "../../Assets/Images/callIconsvg.svg";
import paperCut from "../../Assets/Images/paperCut.png";
import mailIcon from "../../Assets/Images/sMailIcon.png";
import arrowIcon from "../../Assets/Images/blackArrow.png";
import inboxIcon from "../../Assets/Images/InboxIcon.png";
import apartMentImg from "../../Assets/Images/apartment-house-real.png";
import avatar1 from "../../Assets/Images/avatar1.png";
import avatar2 from "../../Assets/Images/avatat2.png";
import whatsappIcon from "../../Assets/Images/whatsappIcon.png"
import crossIcon from "../../Assets/Images/crossIcon.png"

//components
import { Box, Typography, useScrollTrigger } from '@mui/material';
import NavBar from "../../Components/NavBar";
import Footer from '../../Components/Footer';
import SimpleMap from "../../Components/Map"
import { AppBtn } from "../../Components/ButtonBox";
import { ImageSlider } from "../../Components/Carousel"
import FindApartment from "../../Components/FindApartment"
import SharePopup from "../../Components/SharePop"

//data
import { properitData } from "../../Assets/Data"

export default function PropertyPage() {
  const isPropertyFevData = JSON.parse(localStorage.getItem("propertyFev"));
  const propertyIndex = localStorage.getItem("propertyIndex")
  const correntPropertyData = properitData.find((el) => el.id === propertyIndex);

  const headerText = "Our Properties Details";
  const [gellaryPop, setGellaryPop] = useState(false);
  const [testimonlText1, setTestimonlText1] = useState(false);
  const [testimonlText2, setTestimonlText2] = useState(false);
  const [fev, setFev] = useState(isPropertyFevData?.includes(correntPropertyData?.id) ? true : false);
  const [estimatPop, setEstimatPop] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);



  useEffect(() => {
    if (gellaryPop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [gellaryPop]);

  const handleClose = (e) => {
    if (e.target.id === "gellaryBackdrop") {
      setGellaryPop(false)
    }
  }



  const handleFavoriteClick = () => {
    const isPropertyFev = JSON.parse(localStorage.getItem("propertyFev")) || []; // Ensure it's an array
    if (isPropertyFev.includes(correntPropertyData?.id)) {
      // Remove the property if it's already in favorites
      const removeArray = isPropertyFev.filter(item => item !== correntPropertyData?.id);
      localStorage.setItem("propertyFev", JSON.stringify(removeArray));
      setFev(false);
    } else {
      // Add the property to favorites
      const updatedFavorites = [...isPropertyFev, correntPropertyData?.id];
      localStorage.setItem("propertyFev", JSON.stringify(updatedFavorites));
      setFev(true);
    }
  };


  const handleCall = () => {
    window.location.href = `tel:${8920149160}`;
  }
  const openWhatsapp = () => {
    const url = `https://wa.me/${7304140237}`;
    window.open(url, '_blank');
  }

  return (
    <>
      <Box className="property">
        <Box onClick={handleClose} id="gellaryBackdrop" className="backDrop" sx={{ display: gellaryPop ? "flex" : "none" }}>
          <ImageSlider data={correntPropertyData} />
        </Box>

        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText.toUpperCase()}</Typography>
        </Box>

        <Box className="propertyDetailSection">
          <img src={pageBackground} className='propertyBg' />
          <Box className="propertyTitleBox">
            <Box className="proTilInnerBox">
              <Typography className='propertyTitle'>{correntPropertyData?.title}</Typography>
              <Typography className='propertyPriceText'>₹ {correntPropertyData?.price} <span>/ PER DAY</span></Typography>
            </Box>

            <Box className="proTilInnerBox">
              <SharePopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
              <Box className="propLocBox">

                <Box className="locText">
                  <img src={locationOutIcon} />
                  <Typography>{correntPropertyData?.location}</Typography>
                </Box>

                <div className="pIconBtnBox">
                  <Box className="start_Box">
                    <img src={starIcon} />
                    <Typography>4.8 <span>(74)</span></Typography>
                  </Box>

                  <Box className="perpelBtn" onClick={() => setIsPopupOpen(true)}>
                    <img src={shareIcon} />
                    <Typography>Share</Typography>
                  </Box>
                  <Box className="perpelBtn" onClick={handleFavoriteClick}>
                    {
                      fev ?
                        <img className='loveIcon' src={loveIconW} /> :
                        <img className='loveIcon' src={loveIcon} />
                    }
                    <Typography>Favorite</Typography>
                  </Box>
                </div>
                {/* <Box className="perpelBtn">
                  <img src={searchIcon} />
                  <Typography>Browse Nearby listing</Typography>
                </Box> */}
              </Box>


              <Box className="contactBtnBox">
                <img src={whatsappIcon} className='whatsappIcon' onClick={openWhatsapp} />
                <Box className="propContactBtn" onClick={handleCall}>
                  <img src={callIcon} />
                  <Typography>Contact Sellers</Typography>
                </Box>
              </Box>

            </Box>
          </Box>

          <Box className="properyImgBox">
            <Box className="showAllBtn" onClick={() => {
              setGellaryPop(true)
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <img src={galleryIcon} />
              <Typography>View All Photos</Typography>
            </Box>
            <Box className="imgBox1">
              <img src={correntPropertyData?.images[0]} />
            </Box>
            <Box className="imgBox2">
              <Box className="img2Inn">
                <img src={correntPropertyData?.images[1]} />
              </Box>
              <Box className="img2Inn">
                <img src={correntPropertyData?.images[2]} />
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
              <Typography className='overSubHeader'>360* View Elite Guest House with Rooftop in Malibu Town</Typography>

              <Box className="locationBox">
                <Box className="CardlocationBox">
                  <img src={locationOutIcon} />
                  <Typography>{correntPropertyData?.location}</Typography>
                </Box>
                <Box className="proDetails">
                  <img src={badIcon} />
                  <Typography>4 Rooms</Typography>
                  <img src={bathIcon} />
                  <Typography>4 Bath</Typography>
                  <img src={roomAreaIcon} />
                  <Typography>1000+ sq.ft</Typography>
                </Box>
              </Box>
              <Box className="overAvatarInfoBox">
                <Box className="avatarBox">
                  <Box className="avatarImg">
                    <img src={avatart} />
                  </Box>
                  <Box className="avatarNamBox">
                    <Typography>{correntPropertyData?.owner}</Typography>
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
                {
                  correntPropertyData?.Facilities?.map((el, i) => (
                    <Box className="facilitesItem" key={i}>
                      <img src={el.icon} />
                      <Typography>{el.title}</Typography>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          </Box>

          <Box className="propertyInfoBox propertyInfoBoxv2">
            <Box className="propertyInfoInBox aboutLocBox">
              <Typography className='overViewTitle'>SocioStays welcomes you to Elite Guest House in Gurgaon! </Typography>
              <Typography my={3}>{correntPropertyData?.summery}</Typography>
              <Typography mb={5}>We ensure the best comfort & convenience for a memorable stay @ SocioStays!</Typography>
              <Box className="costBtn">
                <Typography>Average living cost</Typography>
                <span>₹ {correntPropertyData?.price} /PER DAY</span>
              </Box>
            </Box>

            <Box className="propertyInfoInBox testimonialsBox">
              <Typography className='overViewTitle'>Testimonials</Typography>

              <Box className="reviewBox">
                <Box mb={1} className="avatarBox">
                  <Box className="avatarImg">
                    <img src={avatar2} />
                  </Box>
                  <Box className="avatarNamBox">
                    <Typography>Kiran Malwankar</Typography>
                    <Box>
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ display: testimonlText1 ? "block" : "none" }} className='reviewText'>I recently stayed at House No. 479 in sector 47 Gurugaon through Socio Stays, and it was an absolutely wonderful experience. The property was exactly as described, clean, comfortable, and in a great location. The host was incredibly welcoming and helpful, always available to answer any questions or provide recommendations. I felt right at home and would definitely recommend Socio Stays to anyone looking for a unique and affordable accommodation option. <span onClick={() => setTestimonlText1(false)}>Less view</span></Typography>
                <Typography sx={{ display: testimonlText1 ? "none" : "block" }} className='reviewText'>I recently stayed at House No. 479 in sector 47 Gurugaon through Socio Stays, and it was an absolutely wonderful... <span onClick={() => {
                  setTestimonlText1(true)
                  setTestimonlText2(false)
                }}>Read more</span></Typography>
              </Box>

              <Box className="reviewBox">
                <Box mb={1} className="avatarBox">
                  <Box className="avatarImg">
                    <img src={avatar1} />
                  </Box>
                  <Box className="avatarNamBox">
                    <Typography>Shivesh Desai</Typography>
                    <Box>
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                      <img src={starIcon} />
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ display: testimonlText2 ? "block" : "none" }} className='reviewText'>My stay here through Socio Stays was nothing short of amazing. The property was beautifully furnished and had everything I needed for a comfortable stay. The host was incredibly friendly and went above and beyond to ensure I had a great time. I loved the local vibe of the neighborhood and felt like I was truly experiencing the city like a local. I would highly recommend Socio Stays to anyone looking for a memorable and authentic travel experience. <span onClick={() => setTestimonlText2(false)}>Less view</span></Typography>
                <Typography sx={{ display: testimonlText2 ? "none" : "block" }} className='reviewText'>My stay here through Socio Stays was nothing short of amazing. The property was beautifully furnished and had... <span onClick={() => {
                  setTestimonlText2(true)
                  setTestimonlText1(false)
                }}>Read more</span></Typography>
              </Box>

            </Box>
          </Box>

          <Box className="MapBox">
            <SimpleMap latVal={correntPropertyData?.map[0]} lngVal={correntPropertyData?.map[1]} zoomVal={15} />
          </Box>

          <Box className="rentSection">
            <Box>
              <Typography className='propertyPriceText'>₹ {correntPropertyData.price}<span> / PER DAY</span></Typography>
              <samp onClick={() => setEstimatPop(!estimatPop)}>Payment estimation</samp>
            </Box>
            <AppBtn btnText="Rent" />

            <div className={estimatPop ? "estimatPop estimatPopActive" : "estimatPop"}>
              <img src={crossIcon} onClick={() => setEstimatPop(false)} />
              <p>Day to night: 6999 per night</p>
              <p>Add dates</p>
              <p>Add no. of guests</p>
              <p>Rs.6999 x ___ Nights </p>

            </div>
          </Box>

          <FindApartment />

        </Box>
        <Box className="aparEmailBox">
          <img src={paperCut} className='paperTop' />
          <Box className="aparMailBox">
            <img src={inboxIcon} />
            <Box >
              <Typography className='aptHeaderText'>Join Our Journey and
                Gain Industrial Experience</Typography>
              <Typography sx={{ textAlign: "center" }}>Sign up to our newsletter for deals,
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
