import React ,{useState}from "react";
import Home from "./Components/LandingPage/Home/Home";
import Faq from "./Components/Faq/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Signup from "./Components/Auth/Signup/Signup";
import Login1 from "./Components/Auth/Login/Login1";
import Reset from "./Components/Auth/Forgetpassword/Reset";
import Verify from "./Components/Auth/Forgetpassword/Verify";
import Maindashboard from "./Components/Dashboard/maindashboard/Maindashboard";
import Addacount from './Components/Dashboard/Addacount/Addacount';
import Placeorder from './Components/Dashboard/Placeorder/Placeorder';
import Dashboard from './Components/Dashboard/dashboard/Dashboard';
import About from './Components/About/About'
import TrackOrder from "./Components/Dashboard/TrackOrder/TrackOrder";
import Editprofile from "./Components/Dashboard/EditProfile/Editprofile";
const Main = () => {
const [opendashboard, setopendashboard] = useState(false);

  return (
    <>
     <Router>
       
          {!opendashboard && <Navbar />}
       
        <Routes>
           {!opendashboard && <Route path="/" element={<Home />} />}
          <Route path="/faq" element={<Faq/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login1/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/forgetpassword" element={<Reset/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/dashboard"  element={<Maindashboard setopendashboard={setopendashboard}/>} />
          <Route path="dashboard/addacount" element={<Addacount/>} />
          <Route path="dashboard/placeorder" element={<Placeorder />} />
          <Route path="/dashboard/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit-profile" element={<Editprofile/>} />
          <Route path="/dashboard/track-order" element={<TrackOrder/>} />
        </Routes>
       </Router>
    </>
  );
};

export default Main;


