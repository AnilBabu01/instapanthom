import React from "react";
import Typography from "@mui/material/Typography";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import "./Getfollowers.css";
const Getfollowers = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="maindivgetfollowers">
              <Typography
               
                align="center"
                className="maindivgetfolltext"
              >
                Do you want free, high quality and targeted Instagram followers
                daily?
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="grtbtn">
                  <GroupAddIcon />
                  <span style={{padding: "10px"}}>free Instagram Follwers</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getfollowers;
