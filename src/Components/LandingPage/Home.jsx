import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from "./Home.module.css";
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
              padding: "4px",
              color: "white",
            }}
          >
            Free Instagram Followers | Free Instagram Likes
          </span>
        </Typography>
        <Typography
          className={style.Headingsize}
          align="center"
          variant="h3"
          style={{ fontWeight: "600" }}
        >
          Get Fast & Targeted Growth
          <br /> with Free Instagram Followers & <br /> Likes Today!
        </Typography>

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
          }}
          className={style.buttonfree}
        >
          <Button
            className={style.buttonfree}
            variant="contained"
            style={{ height: "45px" }}
          >
            Get free Instagram Follwers & likes
          </Button>
          <p style={{ margin: "20px", color: "gray" }}>or</p>
          <Button
            className={style.buttonfree}
            variant="contained"
            style={{ height: "45px" }}
          >
            Buy Instagram Followers
          </Button>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default Home;