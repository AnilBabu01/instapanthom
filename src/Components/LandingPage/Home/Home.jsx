import React from "react";
import Typography from "@mui/material/Typography";
import Footer from "../../Footer/Footer";
import Steps from "../Steps/Steps";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="mainhome">
        <Typography align="center" className="mainhometxt">
          <span className="spanhometxt">
            Free Instagram Followers | Free Instagram Likes
          </span>
        </Typography>
        <div className="spanhometxt1">
          <div>
            <Typography variant="h6" align="center" className="spanhometxt2">
              Get Fast & Targeted Growth <br />
              with Free Instagram Followers & Likes Today!
            </Typography>
          </div>
        </div>
         
        <Typography align="center" style={{  marginTop: "40px", marginBottom: '20px', fontSize: "20px"}}>
          Use our service to get targeted, high quality, free Instagram
          followers and free <br /> Instagram Likes! Unlimited activations to
          continue receiving daily growth. No surveys!
        </Typography>
        <div className="spanhometxt4  buttonfree">
          <button className="btn1 btn homebtn">
            Get free Instagram Follwers & likes
          </button>
          <div style={{ padding: "10px" }}>
            <Typography align="center" className="homeOR">
              or
            </Typography>
          </div>

          <button className="btn btn1 homebtn">Buy Instagram Followers</button>
        </div>
      </div>
      <Steps />
      <Footer />
    </>
  );
};

export default Home;
