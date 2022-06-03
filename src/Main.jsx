import React from "react";
import Home from "./Components/LandingPage/Home";
import Faq from "./Components/Faq/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import Reset from "./Components/Auth/Forgetpassword/Reset";
const Main = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reset" element={<Reset/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
