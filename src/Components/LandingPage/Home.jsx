import React from "react";
import Typography from "@mui/material/Typography";
import style from "./Home.module.css";
import Footer from '../Footer/Footer'
import Steps from "./Steps";
const st = {
  margin: "auto",
  width: "100%",

  padding: "6px",
};

const Home = () => {
  return (
    <>
      <div style={st}>
        <Typography
          align="center"
          style={{ marginTop: "40px", marginBottom: "20px" }}
        >
          <span
            style={{
              backgroundColor: "#9e9191",
              padding: "2px",
              color: "white",
              fontSize:"15px"
            }}
          >
            Free Instagram Followers | Free Instagram Likes
          </span>
        </Typography>
        <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
        <div>
        <Typography
        variant="h3"
        align="center"
          style={{
            fontSize: "150%",
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "12px",
            justifyContent: "center",
           
            fontWeight: "600" 
          }}
        >
          Get Fast & Targeted Growth <br/>
          with Free Instagram Followers & Likes Today!
        </Typography>
      
        </div>
        </div>
        
        <Typography
          className={style.textpara}
          align="center"
          style={{
            marginTop: "40px",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          Use our service to get targeted, high quality, free Instagram
          followers and free <br /> Instagram Likes! Unlimited activations to
          continue receiving daily growth. No surveys!
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "15px",
          }}
          className={style.buttonfree}
        >
          <button className="btn1 btn" style={{ height: "45px" }}>
            Get free Instagram Follwers & likes
          </button>
          <div style={{ padding: "10px" }}>
            <Typography
              align="center"
              style={{ color: "gray", fontSize: "40" }}
            >
              or
            </Typography>
          </div>

          <button className="btn btn1 " style={{ height: "45px" }}>
            Buy Instagram Followers
          </button>
        </div>
      </div>
      <Steps />
      <Footer/>
    </>
  );
};

export default Home;
