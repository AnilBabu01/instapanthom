import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import UseraccountList from "./UseraccountList";
import clock from "../Dasgimages/clock.svg";
import cal from "../Dasgimages/cal.svg";
import lock from "../Dasgimages/l.svg";
import originn from "../Dasgimages/originn.svg";
import rupee from "../Dasgimages/rupee.svg";
import dol from "../Dasgimages/dol.svg";
import pay from "../Dasgimages/pay.svg";
import "./Placeorder.css";
const Plan = (props) => {
  return (
    <>
      <div className="freetext">
        <Typography align="center" className="textchoose">
          <img className='imgplan' src={rupee} alt="rupee" />{" "}
          {props.value}
        </Typography>
      </div>
    </>
  );
};

const Feature = (props) => {
  return (
    <>
      <Typography className='imgtext'>
        <img className="imgorder" src={props.img} alt="clock" />
        {props.txt}
      </Typography>
    </>
  );
};
const Placeorder = () => {
  return (
    <>
      <Sidebar />
      <div className="mainplaceorder">
        <Typography className="mobileplace" >
          Place your order
        </Typography>
        <div className="divcontentplaceorder">
          <div className="choosediv">
            <div className="chooseplan">
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
                    style={{ marginLeft: "40px",height:"441px" }}
                    className="textchoose"
                  >
                    Free
                  </Typography>
                </div>
                <Plan value={"199"} />
                <Plan value={"599"} />
                <Plan value={"999"} />
                <Plan value={"1999"} />
                <Plan value={"2999"} />
                <Plan value={"5999"} />

                <div className="freetext1"></div>
              </div>
              <div className="featuresdiv">
                <Typography className="feature">Features</Typography>
                <Feature txt={"Time taken : 2-5 days"} img={clock} />
                <Feature txt={"Organic followers"} img={originn} />
                <Feature txt={"100% safe & secure"} img={lock} />
                <Feature txt={" Money back guarantee"} img={dol} />
                <Feature txt={"1 time payement"} img={pay} />
                <Feature txt={"24 X 7 support"} img={cal} />
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
