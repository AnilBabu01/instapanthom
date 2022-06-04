import "./Reset.css";
import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Alert from "../../Context/Alert";
import { useNavigate } from "react-router-dom";
const Verify = () => {
  return (
    <>
      <div style={{ background: "aliceblue", height: "100%" }}>
        <div className="maindiv1">
          <div className="aligndiv">
            <div className="headertext1">
              <Typography variant="h3" align="center">
                Verify Your Email Address
              </Typography>
              <Typography variant="p" align="center">
                Before Proceeding ,please check your email for a verification
                link .if you did not receive the email , click here to request
                another
              </Typography>
              <div className="resetbtn">
                  <button className="btn01" type="submit">
                    Request New Link
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
