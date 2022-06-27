import React from "react";
import Typography from "@mui/material/Typography";
import "./Placeordermobile.css";
const Common = (props) => {
  return (
    <>
      <div className="alignmobileorder">
        <div className="leftRs">
          <Typography className="textordermobile">{props.Rs1}</Typography>
        </div>
        <div className="rightRs">
          <Typography className="textordermobile">{props.Rs2}</Typography>
        </div>
      </div>
    </>
  );
};
const Placeordermobile = () => {
  return (
    <>
      <div className="showinmobile">
        <div className="freealinginmobile">
          <div>
            <div className="alignmobileorder">
              <div className="normalmobile">
                <Typography className="textordermobile">Normal</Typography>
              </div>
              <div className="normalmobile">
                <Typography className="textordermobile">Fast</Typography>
              </div>
            </div>
            <Common Rs1={"199Rs"} Rs2={"599Rs"} />
            <Common Rs1={"99Rs"} Rs2={"1999Rs"} />
            <Common Rs1={"2999Rs"} Rs2={"1999Rs"} />
            <Common Rs1={"2999Rs"} Rs2={"5999Rs"} />
             <div className="alignmobileorder">
              <div className="freers">
                <Typography className="textordermobile">Free</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeordermobile;
