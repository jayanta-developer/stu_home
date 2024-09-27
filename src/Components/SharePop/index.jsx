import React, { useState } from 'react';
import "./style.css"

//images
import copyLinkIcon from "../../Assets/Images/copyLink.png"
import emailIcon from "../../Assets/Images/emalIcon.png"
import WhatsApp from "../../Assets/Images/whatsappIcon.png"
import facebook from "../../Assets/Images/facebookIconV2.png"
import crossIcon from "../../Assets/Images/crossIcon.png"

const SharePopup = ({ isPopupOpen, setIsPopupOpen }) => {

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const copyLink = () => {
    const link = window.location.href; // Get the current URL
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const shareOnWhatsApp = () => {
    const phoneNumber = ''; // Add phone number if you want to open chat with a specific number
    const message = `Check this out: ${window.location.href}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const shareViaEmail = () => {
    const subject = 'Check this out';
    const body = `Here’s something you might like: ${window.location.href}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <>
      {isPopupOpen && (
        <div className="popup">
          <img src={copyLinkIcon} onClick={copyLink} />
          <img src={WhatsApp} onClick={shareOnWhatsApp} />
          <img src={emailIcon} onClick={shareViaEmail} />
          <img src={facebook} onClick={shareOnFacebook} />
          <img src={crossIcon} className='PopCross' onClick={togglePopup} />

        </div>
      )}
    </>
  );
};

export default SharePopup;
