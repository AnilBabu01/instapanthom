import React from "react";
import Typography from "@mui/material/Typography";
import progress from '../Dasgimages/progress.svg';
import "./TrackOrder.css";
const Trackcommon = () => {
  return (
    <>
      <div className="divtrack">
        <div style={{padding: "5px"}}>
          <div className="alignordertext">
            <Typography className="ordertext1">Order:</Typography>
            <Typography className="gaintext"> #5487464</Typography>
          </div>

          <div className="alignordertext">
            <Typography className="ordertext1">Initial Followers:</Typography>
            <Typography className="gaintext">25</Typography>
          </div>
          <div className="alignordertext">
            <Typography className="ordertext1">Date : </Typography>
            <Typography className="gaintext">25 June 2022</Typography>
          </div>
          <div className="alignordertext">
            <Typography className="gaintext"> <img style={{marginRight:'10px'}} src={progress} alt='progress'/>In Progress</Typography>
          </div>
        </div>
        <div className="gain">
            
            <Typography className="gaintext1">85</Typography>
          <Typography className="gaintextorder">Followers&Gain</Typography>
            
          
        </div>
        <div className="plandiv">
          <div>
            <div className="alignordertext">
              <Typography className="ordertext1">Username : </Typography>
              <Typography className="gaintext">anil Babu</Typography>
            </div>

            <div className="alignordertext">
              <Typography className="ordertext1">Your Plan :</Typography>
              <Typography className="gaintext">599Rs</Typography>
            </div>
            <div className="alignordertext">
              <button className="restartbtn">Restart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trackcommon;
