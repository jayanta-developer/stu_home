import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Helmet } from "react-helmet-async";
import "./style.css";

//images
import light from "../../Assets/Images/light.svg";
import bankSvg from "../../Assets/Images/bankSvg.svg";
import HomeIcon from "../../Assets/Images/homeIcon.svg";
import paperCut from "../../Assets/Images/paperCut.png";
import awordSvg from "../../Assets/Images/awardSvg.svg";
import HomeYIcon from "../../Assets/Images/HomeYIcom.png";
import personSvg from "../../Assets/Images/personSvg.svg";
import DropIcon from "../../Assets/Images/grayDropIcon.png";
import HomeBG from "../../Assets/Images/homeBackgRound.png";
import HomeBGTabe from "../../Assets/Images/homeBackgRoundTabe.png";
import HomeBGMobile from "../../Assets/Images/homeBackgRoundMobile.png";
import locationIcon from "../../Assets/Images/locationIcon.png";
import calenderIcon from "../../Assets/Images/calenderIcon.svg";
import hasselIcon from "../../Assets/Images/hesselRoundIcon.png";
import searchHomeIcon from "../../Assets/Images/searchHomeIcon.svg";
import discountCoverImg from "../../Assets/Images/discountCover.jpg"

//components
import { Box, Typography } from '@mui/material';
import NavBar from "../../Components/NavBar";
import { AppBtn } from "../../Components/ButtonBox";
import FindApartment from "../../Components/FindApartment"
import Footer from "../../Components/Footer"
import PropertieCard from "../../Components/PropertieCard";
import EmailBox from "../../Components/EmailBox";
import axios from 'axios';
import { GoTop } from "../../Components/Tools"

export default function Home() {
  const navigate = useNavigate()
  GoTop()
  const [locationDrop, setLocationDrop] = useState(false);
  const [locationDropVal, setLocationDropVal] = useState("");
  const [sectorDrop, setSectorDrop] = useState(false);
  const [sectorDropVal, setSectorDropVal] = useState();
  const [selectedPropertyId, setSelectedPropertyId] = useState();
  const [IncPropertyData, setIncPropertData] = useState([]);
  const [discountPop, setDiscountPop] = useState()
  const [userInfoVal, setUserInfoVal] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [bannerDBImg, setBannerDBImg] = useState()


  const cityData = IncPropertyData?.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.city === item?.city)
  );

  const sectorData = IncPropertyData?.filter((el) => el?.city === locationDropVal)

  const handleWorkBtnClick = (BtnText) => {
    if (BtnText === "SEARCH NOW") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (BtnText === "BOOK NOW") {
      navigate("/explore")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (BtnText === "EXPLORE NOW") {
      navigate("/blogs")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const WorkCard = ({ img, title, subTitle, BtnText }) => {
    return (
      <Box className="propertiesCard" onClick={() => handleWorkBtnClick(BtnText)}>
        <img src={img} />
        <Typography className='workCardTitle'>{title}</Typography>
        <Typography className='workCardSubTitle'>{subTitle}</Typography>
        <AppBtn onClick={() => handleWorkBtnClick(BtnText)} btnText={BtnText} bgColor="#221E1D" hoverColor="#4d4745" textColor="#FFF" />
      </Box>
    )
  }

  const GoProperty = () => {
    navigate("/property-details/:property-title")
    window.scrollTo({ top: 0, behavior: "smooth" })
    localStorage.setItem("propertyIndex", selectedPropertyId);
  }

  const handleCloseRentPop = (e) => {
    if (e.target.id === "rentPop") {
      setDiscountPop(false)
    }
  }

  const handleChangeDisVal = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    if (name === "email" && value && !/^[a-zA-Z0-9._%+-@]*$/.test(value)) {
      return;
    }
    setUserInfoVal((prev) => ({ ...prev, [name]: value }));
  };

  //send useer val
  const sendUserVal = () => {
    if (userInfoVal.name.length && userInfoVal.phone.length && userInfoVal.email.length) {
      axios.post(process.env.REACT_APP_BASE_URL + "/user/create", {
        name: userInfoVal?.name,
        phone: userInfoVal?.phone,
        email: userInfoVal?.email,
      }).then((res) => {
        setDiscountPop(false)
        setUserInfoVal({
          name: "",
          email: "",
          phome: ""
        })
        localStorage.setItem("socio_userVal", 1)
      })
    } else {
      alert("please fill all fields !");
    }
  }

  //check discount value
  useEffect(() => {
    const discountVal = localStorage.getItem("socio_userVal")
    if (discountVal === 1) {
      setDiscountPop(false)
    } else if (discountVal === 0 || !discountVal) {
      setDiscountPop(true)
    }
  })

  // useEffect(() => {
  //   if (discountPop) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [discountPop]);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BASE_URL + "/flats")
      .then((val) => {
        setIncPropertData(val.data)
        return val.data;
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    Axios.get("https://socioserver-jg6j.onrender.com/socio/api/banner").then((res) => {
      setBannerDBImg(res.data[0])
    })
  }, [])


  return (
    <>
      <Helmet>
        <title>Socio Stays</title>
      </Helmet>
      <Box className="homeContainer">


        <Box className="homeSection">
          <img src={HomeBG} className='HomeBG HomeBGDesktop' />
          <img src={HomeBGTabe} className='HomeBG HomeBGTabe' />
          <img src={HomeBGMobile} className='HomeBG HomeBGMobile' />
          {/* Nav bar */}
          <NavBar />
          <Box className="homeCenterBox">
            {/* user info input box */}
            <div id="rentPop" onClick={handleCloseRentPop} className="backDrop" style={{ display: discountPop ? "none" : "none" }}>
              <div className="userInfoInputBox">
                <div className="disImgBox">
                  {/* <div className="disTextImBox">
                    <p className='disText1'>Give your contact info to get</p>
                    <p className='disText2'>50%</p>
                    <p className='disText1'>OFF</p>
                  </div> */}
                  <img src={bannerDBImg?.url} />
                </div>
                <div className="disInputBox">

                  <Box className="inputBox">
                    <Typography>Name*</Typography>
                    <input name='name' placeholder='Enter Name' type='text' value={userInfoVal?.name} onChange={handleChangeDisVal} />
                  </Box>
                  <Box className="inputBox">
                    <Typography>Phone Number*</Typography>
                    <input name='phone' placeholder='Enter phone number' type='text' value={userInfoVal?.phone} onChange={handleChangeDisVal} />
                  </Box>
                  <Box className="inputBox">
                    <Typography>Email Id*</Typography>
                    <input name='email' placeholder='Enter email' value={userInfoVal?.email} onChange={handleChangeDisVal} />
                  </Box>
                  <div className="fromBtnBox">
                    <AppBtn btnText="SEND" width="100%" onClick={sendUserVal} />
                  </div>


                </div>

              </div>
            </div>



            <Box className="homeLabel">
              <Typography className='homeBoldText'>MAKE EVERY TRIP WORTH THE STAY</Typography>
              <img src={HomeYIcon} />
            </Box>
            <Typography className='HCNText'>
              Experience luxurious <span>•</span> suite-like stays with personalized care <span>•</span> fresh meals <span>•</span> and all the comforts
              of home—at a price that’s better than any hotel
            </Typography>


            {/* ----------------------------------Search section---------------------------------------- */}
            <Box className="mainSearchBox">
              <Box className="innerSearchBox">

                {/* city */}
                <Box className="locationSechBox" onClick={() => setLocationDrop(!locationDrop)}>
                  <img src={locationIcon} className='locationIcon' />
                  <Typography className='locDropText'>{locationDropVal || "Select City"}</Typography>
                  <img className='dropIcon' src={DropIcon} style={{ rotate: locationDrop ? "180deg" : "0deg" }} />

                  <Box className="dropBox" sx={{ height: locationDrop ? "auto" : '0px' }}>
                    {cityData?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => {
                        setLocationDropVal(el?.city)
                      }}>
                        <Typography>{el?.city}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* sector */}
                <Box className="locationSechBox" onClick={() => setSectorDrop(!sectorDrop)}>
                  <Typography className='locDropText'>{sectorDropVal || "Area"}</Typography>
                  <img className='dropIcon' src={DropIcon} style={{ rotate: sectorDrop ? "180deg" : "0deg" }} />
                </Box>

                <Box className={selectedPropertyId ? "searchBtn" : "searchBtn searchBtnDecibel"} onClick={GoProperty}>
                  <Typography>Go</Typography>
                </Box>
              </Box>

              {/* Properti search list */}
              <Box className="dropBox PropertyList" sx={{ height: sectorDrop ? "auto" : '0px' }}>
                {sectorData?.map((el, i) => (
                  <Box key={i} className="dropItem" onClick={() => {
                    setSectorDropVal(el?.area)
                    setSelectedPropertyId(el._id)
                    setSectorDrop(false)
                  }}>
                    <div className="PDImgBox"><img src={el?.images[0].image} /></div>
                    <div className="PDTitleBox">
                      <p>{el?.title}</p>
                      <span>{el?.owner} | {el?.sector}</span>
                    </div>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="PropertiesSection">
          <Typography className='hasselHeader'>Our Properties</Typography>
          <Box className="proertiseBox">
            {
              IncPropertyData?.map((el, i) => (
                <PropertieCard value={el} btnText={"Featured"} key={i} />
              ))
            }
          </Box>
          <Box className="btnBox" onClick={() => {
            navigate("/explore")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}>
            <AppBtn btnText="VIEW ALL" />
          </Box>
        </Box>

        <Box className='hasselBox'>
          <Typography className='hasselHeader'>Skip The Hassle!</Typography>

          <Box className="hessleInputBox">
            <Box className="hasselInnerBox" sx={{ background: "#2B2625" }}>
              <img src={light} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Experience Like Never Before</Typography>
              <Typography className='subSabel'>Ditch the ordinary! Immerse yourself in local culture, discover hidden gems, and enjoy the comforts of a private haven.</Typography>
            </Box>

            <Box className="hasselInnerBox" sx={{ background: "#3A3533" }}>
              <img src={bankSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Best Selection of Stays </Typography>
              <Typography className='subSabel'>From cozy studios to luxurious villas, we offer unique listings for every budget and travel style. Find your perfect home away from home.</Typography>
            </Box>

          </Box>
          <Box className="hessleInputBox">
            <Box className="hasselInnerBox" sx={{ background: "#292726" }}>
              <img src={personSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Social Activities</Typography>
              <Typography className='subSabel'>Craving social interaction? We offer options with shared spaces and curated adventures. Want privacy? Relax in your own space and add activities on demand.</Typography>
            </Box>
            <Box className="hasselInnerBox" sx={{ background: "#2B2727" }}>
              <img src={awordSvg} />
              <img src={hasselIcon} className='hasselIcon' />
              <Typography className='label'>Local and Authentic</Typography>
              <Typography className='subSabel'>Live like a local in vibrant neighborhoods. Connect with welcoming hosts and experience the true essence of your destination.</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="workSection">
          <img src={paperCut} className='paperTop' />
          <img style={{ rotate: "180deg" }} src={paperCut} className='paperBottom' />
          <Typography className='hasselHeader'>How Does It Work?</Typography>
          <Typography className='HCNText'>Find easy stays for rent on and off campus near more than 5,000 colleges and universities!</Typography>
          <Box className="workCardBox">

            {WorkCard({
              img: searchHomeIcon,
              title: "Search & Discover",
              subTitle: "Explore unique listings in vibrant neighborhoods, from budget-friendly studios to luxurious villas. Find your perfect local haven.",
              BtnText: "SEARCH NOW"
            })}
            {WorkCard({
              img: HomeIcon,
              title: "Book & Connect",
              subTitle: "Secure your stay with a few clicks and connect with your friendly host. Get insider tips on local gems!",
              BtnText: "BOOK NOW"
            })}
            {WorkCard({
              img: calenderIcon,
              title: "Experience & Explore",
              subTitle: "Immerse yourself in the local culture, discover hidden treasures, and relax in the comfort of your private space.",
              BtnText: "EXPLORE NOW"
            })}
          </Box>
        </Box>
        <FindApartment />

        <EmailBox />
        <Footer />
      </Box>
    </>
  )
}
