import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import UseraccountList from "./UseraccountList";
import clock from "../Dasgimages/clock.svg";
import cal from "../Dasgimages/cal.svg";
import loc from "../Dasgimages/loc.svg";
import originn from "../Dasgimages/originn.svg";
import rupee from "../Dasgimages/rupee.svg";
import dol from "../Dasgimages/dol.svg";
import pay from "../Dasgimages/pay.svg";
import "./Placeorder.css";
const Placeorder = () => {
  return (
    <>
      <Sidebar />
      <div className="mainplaceorder">
        <Typography className="mobileplace" variant="h3">
          Place your order
        </Typography>
        <div className="divcontentplaceorder">
          <div className="choosediv">
            <div style={{ marginLeft: "90px" }}>
              <Typography className="textchoose">Choose plane</Typography>
            </div>
            <div className="choosetext">
              <Typography className="textchoose1">Normal</Typography>
            </div>
            <div className="choosetext1">
              <Typography className="textchoose1">Fast</Typography>
            </div>
          </div>

          <div className="orderdivselect">
            <div className="freediv">
              <div>
                <div className="freetext">
                  <Typography
                    align="center"
                    style={{ marginLeft: "40px" }}
                    className="textchoose"
                  >
                    Free
                  </Typography>
                </div>
                <div className="freetext">
                  <Typography align="center" className="textchoose">
                    <img
                      style={{ marginRight: "4px" }}
                      src={rupee}
                      alt="rupee"
                    />{" "}
                    199
                  </Typography>
                </div>
                <div className="freetext">
                  <Typography align="center" className="textchoose">
                    <img
                      style={{ marginRight: "4px" }}
                      src={rupee}
                      alt="rupee"
                    />{" "}
                    599
                  </Typography>
                </div>
                <div className="freetext">
                  <Typography align="center" className="textchoose">
                    <img
                      style={{ marginRight: "4px" }}
                      src={rupee}
                      alt="rupee"
                    />{" "}
                    999
                  </Typography>
                </div>
                <div className="freetext">
                  <Typography align="center" className="textchoose">
                    <img
                      style={{ marginRight: "4px" }}
                      src={rupee}
                      alt="rupee"
                    />{" "}
                    1999
                  </Typography>
                </div>
                <div className="freetext">
                  <Typography align="center" className="textchoose">
                    <img
                      style={{ marginRight: "4px" }}
                      src={rupee}
                      alt="rupee"
                    />{" "}
                    2999
                  </Typography>
                </div>
                <div className="freetext">
                  <Typography align="center" className="textchoose">
                    <img
                      style={{ marginRight: "4px" }}
                      src={rupee}
                      alt="rupee"
                    />{" "}
                    5999
                  </Typography>
                </div>
                <div className="freetext1"></div>
              </div>
              <div className="featuresdiv">
                <Typography>Features</Typography>
                <Typography>
                  {" "}
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={clock}
                    alt="clock"
                  />{" "}
                  Time taken : 2-5 days
                </Typography>
                <Typography>
                  {" "}
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={originn}
                    alt="originn"
                  />{" "}
                  Organic followers
                </Typography>
                <Typography>
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={loc}
                    alt="loc"
                  />{" "}
                  100% safe & secure
                </Typography>
                <Typography>
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={dol}
                    alt="dol"
                  />{" "}
                  Money back guarantee
                </Typography>
                <Typography>
                  {" "}
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={pay}
                    alt="pay"
                  />
                  1 time payement
                </Typography>
                <Typography>
                  {" "}
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={cal}
                    alt="cal"
                  />
                  24 X 7 support
                </Typography>
              </div>
            </div>

            <div>
              <UseraccountList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeorder;
