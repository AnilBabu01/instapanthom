import React from "react";
import Home from "./Components/LandingPage/Home";
import Faq from "./Components/Faq/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
const Main = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
