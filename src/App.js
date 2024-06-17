import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
