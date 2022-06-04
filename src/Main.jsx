import React from "react";
import Home from "./Components/LandingPage/Home";
import Faq from "./Components/Faq/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Signup from "./Components/Auth/Signup";
import Login1 from "./Components/Auth/Login1";
import Reset from "./Components/Auth/Forgetpassword/Reset";

import Verify from "./Components/Auth/Forgetpassword/Verify";
const Main = () => {
  return (
    <>
      <Router>
       
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login1/>} />
          <Route path="/forgetpassword" element={<Reset/>} />
          <Route path="/verify" element={<Verify/>} />
        </Routes>
       
      </Router>
    </>
  );
};

export default Main;
