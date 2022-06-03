import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
            <div
              style={{
                backgroundColor: " #adc0d1",

                padding: "5%",
              }}
            >
              <Typography
                variant="h3"
                align="center"
                style={{
                  fontSize: "150%",
                  display: "flex",
                  flexWrap: "wrap",
                  paddingTop: "12px",
                  justifyContent: "center",
                 
                  fontWeight: "600",
                }}
              >
                Do you want free, high quality and targeted <br />
                Instagram followers daily?
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" style={{ height: "45px",marginTop:"12px" }}>
                  free Instagram Follwers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getfollowers;
