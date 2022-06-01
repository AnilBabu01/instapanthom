import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import InstagramIcon from "@mui/icons-material/Instagram";
import Badge from "@mui/material/Badge";
import style from "./Steps.module.css";

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
        <div
          style={{
            margin: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "6px",
          }}
        >
          <Box
            pl={3}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              "& > :not(style)": {
                m: 1,

                width: 300,
                height: 300,
              },
            }}
          >
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30%",
                  cursor: "pointer",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={3}
                      style={{ padding: "20px", marginBottom: "10px" }}
                    >
                      <GroupAddIcon />
                    </Paper>
                  </div>

                  <Typography align="center" variant="h5">
                    Step1
                  </Typography>
                  <Typography align="center">Register & Login</Typography>
                </div>
              </div>
            </Paper>
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30%",
                  cursor: "pointer",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={3}
                      style={{ padding: "20px", marginBottom: "10px" }}
                    >
                      <ArrowRightAltIcon />
                    </Paper>
                  </div>

                  <Typography align="center" variant="h5">
                    Step2
                  </Typography>
                  <Typography align="center">Active the Free Plan</Typography>
                </div>
              </div>
            </Paper>
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30%",
                  cursor: "pointer",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={3}
                      style={{ padding: "20px", marginBottom: "10px" }}
                    >
                      <SettingsIcon />
                    </Paper>
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
            </Paper>
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30%",
                  cursor: "pointer",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={3}
                      style={{ padding: "20px", marginBottom: "10px" }}
                    >
                      <PermDataSettingIcon />
                    </Paper>
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
            </Paper>
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30%",
                  cursor: "pointer",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={3}
                      style={{ padding: "20px", marginBottom: "10px" }}
                    >
                      <Badge badgeContent={8} color="primary">
                        <InstagramIcon />
                      </Badge>
                    </Paper>
                  </div>

                  <Typography align="center" variant="h5">
                    Step5
                  </Typography>
                  <Typography align="center">Get Free Fan's</Typography>
                </div>
              </div>
            </Paper>
          </Box>
          <Button
            className={style.buttonfree}
            variant="contained"
            style={{ height: "45px", marginTop: "60px" }}
          >
            Register Your Free Account Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Steps;
