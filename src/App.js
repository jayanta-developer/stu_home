import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import PropertyPage from "./Pages/PropertyPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TermsPage from "./Pages/TermsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Terms-and-Conditions" element={<TermsPage />} />
      </Routes>
    </>
  );
}
