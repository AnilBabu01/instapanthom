import React from "react";
import Typography from "@mui/material/Typography";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import InstagramIcon from "@mui/icons-material/Instagram";
import Badge from "@mui/material/Badge";
import "./Steps.css";

const Com = (props) => {
  return (
    <>
      <div className="iconmaindiv iconmaindivmobile">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span className="icondiv">{props.icon}</span>
          </div>

          <Typography align="center" variant="h5">
            {props.step}
          </Typography>
          <Typography align="center">{props.text}</Typography>
        </div>
      </div>
    </>
  );
};
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
              <Com
                step={"step1"}
                text={"Register & Login"}
                icon={<GroupAddIcon />}
              />
              <Com
                step={"step2"}
                text={"Active the Free Plan"}
                icon={<ArrowRightAltIcon />}
              />
              <Com
                step={"step3"}
                text={" Follow Profile of interest"}
                icon={<SettingsIcon />}
              />
              <Com
                step={"step4"}
                text={"2 Minutes You're Done"}
                icon={<PermDataSettingIcon />}
              />
              <Com
                step={"step5"}
                text={"Get Free Fan's"}
                icon={<InstagramIcon />}
                Badge={Badge}
              />
            </div>
          </div>
        </div>
        <div className="btndiv">
          <button className="btn btn2">
            <InstagramIcon />{" "}
            <span style={{ paddingLeft: "10px" }}>
              Register Your Free Acount Now{" "}
            </span>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Steps;
