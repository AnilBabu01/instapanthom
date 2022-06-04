import React from "react";
import Typography from "@mui/material/Typography";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import InstagramIcon from "@mui/icons-material/Instagram";
import Badge from "@mui/material/Badge";
import "./Steps.css";

const Steps = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "30px 0 80px",
          backgroundColor: "aliceblue",
        }}
      >
        <Typography variant="h4" align="center" style={{ fontWeight: "500" }}>
          Simple Steps To Activate Our Free Service
        </Typography>

        <Typography
          align="center"
          style={{
            marginTop: "40px",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          It is simple to get targeted, high quality, free Instagram followers
          or free Instagram likes from <br /> our network! The process takes
          only 2 minutes to activate a plan and here are the steps:
        </Typography>
        <div>
          <div className="centerallSteps">
            <div className="maindiv maindivmobile">
              <div className="iconmaindiv iconmaindivmobile">
               
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="icondiv">
                      <GroupAddIcon />
                    </span>
                  </div>

                  <Typography align="center" variant="h5">
                    Step1
                  </Typography>
                  <Typography align="center">Register & Login</Typography>
                </div>
              </div>

              <div className="iconmaindiv iconmaindivmobile">
                {" "}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="icondiv">
                      <ArrowRightAltIcon />
                    </span>
                  </div>

                  <Typography align="center" variant="h5">
                    Step2
                  </Typography>
                  <Typography align="center">Active the Free Plan</Typography>
                </div>
              </div>
              <div className="iconmaindiv iconmaindivmobile ">
                {" "}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="icondiv">
                      <SettingsIcon />
                    </span>
                  </div>

                  <Typography align="center" variant="h5">
                    Step3
                  </Typography>
                  <Typography align="center">
                    Follow Profile of <br />
                    Interest
                  </Typography>
                </div>
              </div>
              <div className="iconmaindiv iconmaindivmobile">
                {" "}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="icondiv">
                      <PermDataSettingIcon />
                    </span>
                  </div>

                  <Typography align="center" variant="h5">
                    Step4
                  </Typography>
                  <Typography align="center">
                    -2 Minutes Later
                    <br /> You're Done
                  </Typography>
                </div>
              </div>
              <div className="iconmaindiv iconmaindivmobile">
                {" "}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="icondiv">
                      <Badge badgeContent={8} color="primary">
                        <InstagramIcon />
                      </Badge>
                    </span>
                  </div>

                  <Typography align="center" variant="h5">
                    Step5
                  </Typography>
                  <Typography align="center">Get Free Fan's</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btndiv">
          <button className="btn btn2">
            <InstagramIcon /> <span style={{paddingLeft:"10px"}}>Register Your Free Acount Now </span>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Steps;
