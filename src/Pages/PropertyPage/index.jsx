import React, { useState, useEffect } from 'react';
import "./style.css"
import Axios from "axios";
import { Helmet } from "react-helmet-async";

//images
import HomeBG from "../../Assets/Images/propertyBg.png";
import pageBackground from "../../Assets/Images/Pro_blackBg.jpg";
import callIcon from "../../Assets/Images/callIcon.png"
import locationOutIcon from "../../Assets/Images/locationOutLineIcon.png";
import starIcon from "../../Assets/Images/star.png";
import shareIcon from "../../Assets/Images/shareIcon.svg"
import loveIcon from "../../Assets/Images/loveIconWLine.png"
import loveIconW from "../../Assets/Images/loveIconW.png"
import galleryIcon from "../../Assets/Images/gallery-24.png";
import badIcon from "../../Assets/Images/badIcon.png";
import bathIcon from "../../Assets/Images/bathIcon.png";
import roomAreaIcon from "../../Assets/Images/roomAreiIcon.png";
import messageIcon from "../../Assets/Images/messageIcon.svg";
import callIconSvg from "../../Assets/Images/callIconsvg.svg";
import avatar1 from "../../Assets/Images/avatar1.png";
import avatar2 from "../../Assets/Images/avatat2.png";
import whatsappIcon from "../../Assets/Images/whatsappIcon.png"
import crossIcon from "../../Assets/Images/crossIcon.png"
import SocioStay from "../../Assets/Images/SocioStaysIcon.png"

//facilities icons
import airConditionar from "../../Assets/Images/airConditionar.png";
import kitchenIcon from "../../Assets/Images/kitchen.png";
import tvIcon from "../../Assets/Images/TVv2.png";
import parkingIcon from "../../Assets/Images/carParking.png";
import ccTV from "../../Assets/Images/cctv.png";
import alarmIcon from "../../Assets/Images/alarm.png";
import wifi from "../../Assets/Images/wifiIconV2.png";
import SecuredEntry from "../../Assets/Images/securtyEntry.png";
import SpaceWork from "../../Assets/Images/SpaceWork.png";
import Laundry from "../../Assets/Images/Laundry.png";
import CustomerSupport from "../../Assets/Images/CustomerSupport.png";


//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import Footer from '../../Components/Footer';
import SimpleMap from "../../Components/Map"
import { AppBtn } from "../../Components/ButtonBox";
import { ImageSlider } from "../../Components/Carousel"
import FindApartment from "../../Components/FindApartment"
import SharePopup from "../../Components/SharePop"
import SimpleImageSlider from "react-simple-image-slider";
import EmailBox from "../../Components/EmailBox"
import { GoTop } from '../../Components/Tools';
import MapComponent from "../../Components/Map"


export default function PropertyPage() {
  const isPropertyFevData = JSON.parse(localStorage.getItem("propertyFev"));
  const propertyIndex = localStorage.getItem("propertyIndex");
  const headerText = "Our Properties Details";
  const [gellaryPop, setGellaryPop] = useState(false);
  const [testimonlText1, setTestimonlText1] = useState(false);
  const [testimonlText2, setTestimonlText2] = useState(false);
  const [estimatPop, setEstimatPop] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [IncPropertyData, setIncPropertData] = useState();
  const [fev, setFev] = useState();
  const [rentPop, setRectPop] = useState(false)
  const [userInfo, setUserInfo] = useState({})


  const formatted_Images = IncPropertyData?.images?.map((el, index) => ({
    url: el
  }));

  const handleCloseRentPop = (e) => {
    console.log(e.target.id);
    if (e.target.id === "rentPop") {
      setRectPop(false)
    }
  }
  //User whatsapp info
  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  ///not working ... Have to use whatsApp busines api
  const handleSendPropertyInfo = () => {
    setRectPop(false)
    if (userInfo.number) {
      const whatsappURL = `https://wa.me/${userInfo?.number}?text=${encodeURIComponent("Property Details")}`;
      window.open(whatsappURL, "_blank")
    }
  }

  useEffect(() => {
    if (gellaryPop || rentPop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [gellaryPop, rentPop]);

  const handleClose = (e) => {
    if (e.target.id === "gellaryBackdrop") {
      setGellaryPop(false)
    }
  }


  useEffect(() => {
    const dynamicUrl = IncPropertyData?.title || "id?=k4jj43lk3434444";
    window.history.replaceState(null, "", dynamicUrl);
  }, [IncPropertyData]);


  const handleFavoriteClick = () => {
    const isPropertyFev = JSON.parse(localStorage.getItem("propertyFev")) || [];
    if (isPropertyFev.includes(IncPropertyData?._id)) {
      const removeArray = isPropertyFev.filter(item => item !== IncPropertyData?._id);
      localStorage.setItem("propertyFev", JSON.stringify(removeArray));
      setFev(false);
    } else {
      const updatedFavorites = [...isPropertyFev, IncPropertyData?._id];
      localStorage.setItem("propertyFev", JSON.stringify(updatedFavorites));
      setFev(true);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${process.env.REACT_APP_PHONE_NUMBER}`;
  }
  const openWhatsapp = () => {
    const url = `https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}`;
    window.open(url, '_blank');
  }

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BASE_URL + `/flats/${propertyIndex}`)
      .then((val) => {
        setIncPropertData(val.data)
        return val.data;
      })
      .catch((err) => console.log(err));

    if (isPropertyFevData?.includes(IncPropertyData?._id)) {
      setFev(true)
    } else {
      setFev(false)
    }
  }, [])

  return (
    <>
      <Box className="property">
        {/* meta */}
        <Helmet>
          <title>{IncPropertyData?.title}</title>
          <meta
            name="description"
            content={IncPropertyData?.meta_description}
          />
        </Helmet>

        {/* Photo gellary */}
        <Box onClick={handleClose} id="gellaryBackdrop" className="backDrop" sx={{ display: gellaryPop ? "flex" : "none" }}>
          {
            IncPropertyData &&
            <ImageSlider data={IncPropertyData} />
          }
        </Box>

        {/* Send property Info pop */}
        <div id="rentPop" onClick={handleCloseRentPop} className="backDrop bd2" style={{ display: rentPop ? "flex" : "none" }}>
          <Box className="rentDelInputBox">
            <p className='rentPopHeader'>Please fill your contact info to get property details to your WhatsApp</p>
            <Box className="inputTowBox">
              <Box className="inputBox">
                <Typography>WhatsApp Number *</Typography>
                <input name='number' placeholder='Number' type='number' onChange={handleUserInfo} value={userInfo?.number} />
              </Box>
              <Box className="inputBox">
                <Typography>Email Id</Typography>
                <input name='email' placeholder='Enter email' type='email' onChange={handleUserInfo} value={userInfo?.email} />
              </Box>
            </Box>
            <div className="fromBtnBox">
              <AppBtn btnText="SEND" onClick={handleSendPropertyInfo} />
            </div>
          </Box>


        </div>

        <Box className="propertyHomeSection">
          <img src={HomeBG} className='HomeBG' />
          <NavBar />
          <Typography className='propertyheaderText'>{headerText.toUpperCase()}</Typography>
        </Box>
        {!IncPropertyData ?
          <p className='loadingText'>Loding...</p> :
          <Box className="propertyDetailSection">
            <img src={pageBackground} className='propertyBg' />
            <Box className="propertyTitleBox">
              <Box className="proTilInnerBox">
                <h3 className='propertyTitle'>{IncPropertyData?.title}</h3>
                <Typography className='propertyPriceText'>₹ {IncPropertyData?.price} <span>/ PER DAY</span></Typography>
              </Box>

              <Box className="proTilInnerBox">
                <SharePopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
                <Box className="propLocBox">

                  <Box className="locText">
                    <img src={locationOutIcon} />
                    <Typography>{IncPropertyData?.city}, {IncPropertyData?.sector}</Typography>
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

            <div className="Img_Slider" id="gellaryBackdrop">
              <SimpleImageSlider
                images={formatted_Images}
                showBullets={true}
                showNavs={true}
                autoPlay
              />
            </div>
            <Box className="properyImgBox">

              <Box className="imgBox2">
                <Box className="img2Inn">
                  <img src={IncPropertyData?.images[1]} />
                </Box>
                <Box className="img2Inn">
                  <img src={IncPropertyData?.images[2]} />
                </Box>
              </Box>

              <Box className="imgBox1">
                <video autoPlay muted loop src={IncPropertyData?.video}></video>
              </Box>

              <Box className="showAllBtn" onClick={() => {
                setGellaryPop(true)
                GoTop()
              }}>
                <img src={galleryIcon} />
                <Typography>View All Photos</Typography>
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
                    <Typography>{IncPropertyData?.city}, {IncPropertyData?.sector}</Typography>
                  </Box>
                  <Box className="proDetails">
                    <img src={badIcon} />
                    <Typography>{IncPropertyData?.room} Rooms</Typography>
                    <img src={bathIcon} />
                    <Typography>{IncPropertyData?.bath} Bath</Typography>
                    <img src={roomAreaIcon} />
                    <Typography>{IncPropertyData?.sector}</Typography>
                  </Box>
                </Box>
                <Box className="overAvatarInfoBox">
                  <Box className="avatarBox">
                    <Box className="avatarImg">
                      <img className='socioStayIcon' src={SocioStay} />
                    </Box>
                    <Box className="avatarNamBox">
                      <Typography>{IncPropertyData?.owner}</Typography>
                      <span>Property owner</span>
                    </Box>
                  </Box>

                  <Box className="mesCallBox">
                    <Box onClick={openWhatsapp} >
                      <img src={messageIcon} />
                    </Box>
                    <Box onClick={handleCall}>
                      <img src={callIconSvg} />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="propertyInfoInBox facilitiesBox">
                <Typography className='overViewTitle'>Home Facilities</Typography>
                <Box className="facilOuterBox">
                  {
                    IncPropertyData?.facilities?.map((el, i) => (
                      <Box className="facilitesItem" key={i}>
                        <img src={
                          el === "Air conditioning" ? airConditionar :
                            el === "Kitchen" ? kitchenIcon :
                              el === "Wifi" ? wifi :
                                el === "Free parking" ? parkingIcon :
                                  el === "Secured Entry" ? SecuredEntry :
                                    el === "Space for Work" ? SpaceWork :
                                      el === "Laundry Facilities" ? Laundry :
                                        el === "24/7 Customer Support" ? CustomerSupport :
                                          el === "Television" ? tvIcon :
                                            el === "CCTV" ? ccTV :
                                              el === "Emergency alarm" ? alarmIcon : null
                        } />
                        <Typography>{el}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
            </Box>

            <Box className="propertyInfoBox propertyInfoBoxv2">
              <Box className="propertyInfoInBox aboutLocBox">
                <Typography className='overViewTitle'>About location's neighborhood</Typography>
                <Typography my={3}>{IncPropertyData?.summery}</Typography>
                <Typography mb={5}>This apartment is equipped with a Washing Machine, Electric Stove, Microwave, Refrigerator, and Cutlery.</Typography>
                <Box className="costBtn">
                  <Typography>Average living cost</Typography>
                  <span>₹ {IncPropertyData?.price} /PER DAY</span>
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
              <MapComponent
                latitude={IncPropertyData?.mapLat} // Latitude
                longitude={IncPropertyData?.mapLong} // Longitude
                description={IncPropertyData?.city} // Description for the popup
              />
            </Box>

            <Box className="rentSection">
              <Box>
                <Typography className='propertyPriceText'>₹ {IncPropertyData?.price}<span> / PER DAY</span></Typography>
                <samp onClick={() => setEstimatPop(!estimatPop)}>Payment estimation</samp>
              </Box>
              <AppBtn btnText="Rent" onClick={() => {
                setRectPop(true)
                GoTop()
              }} />

              <div className={estimatPop ? "estimatPop estimatPopActive" : "estimatPop"}>
                <img src={crossIcon} onClick={() => setEstimatPop(false)} />
                <p>Day to night: {IncPropertyData?.price} per night</p>
                <p>Maximum no. of guests 10</p>
                <p>Plus Services and Taxes</p>
              </div>
            </Box>
            <FindApartment />
          </Box>
        }
        <EmailBox />
        <Footer />
      </Box >
    </>
  )
}
