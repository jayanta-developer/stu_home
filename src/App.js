import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import PropertyPage from "./Pages/PropertyPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<PropertyPage />} />
      </Routes>
    </>
  );
}
