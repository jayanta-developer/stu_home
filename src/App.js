import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

//pages
import Home from "./Pages/Home";
import PropertyPage from "./Pages/PropertyPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TermsPage from "./Pages/TermsPage";
import PolicyPage from "./Pages/PolicyPage";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import PropertyList from "./Pages/PropertyList";
import FavoriteList from "./Pages/Favorite";

export default function App() {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<PropertyList />} />
        <Route path="/property/200L4" element={<PropertyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Blog-details" element={<BlogDetails />} />
        <Route path="/Terms-and-Conditions" element={<TermsPage />} />
        <Route path="/Pricacy-Policy" element={<PolicyPage />} />
        <Route path="/favorite-list" element={<FavoriteList />} />
      </Routes>
    </>
  );
}
