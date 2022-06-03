import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Reset.css";
const style = {
  rem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  reminputtext: {
    paddingLeft: "10px",
    fontWeight: "600",
    fontSize: "20px",
    paddingBottom: "5px",
  },
  loginbtn: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  },
  btn: {
    background: "#3b53d8",
    border: "none",

    height: "28px",
    marginTop: "30px",
    borderRadius: "5px",
    color: "white",
  },
};
const Reset = () => {
  const [credentials, setCredentials] = useState({
    name: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = credentials;
    console.log("reset data is ", name);
  };
  return (
    <>
      <div style={{ background: "aliceblue", height: "100%" }}>
        <div className="maindiv1">
          <div className="aligndiv">
            <div className="headertext1">
              <Typography variant="h4" align="center">Forget Password</Typography>
              <form onSubmit={handleSubmit}>
                <div style={style.inputdiv} Htmlfor="name">
                  <input
                    className="input2"
                    type="text"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    id="name"
                    placeholder="Your instagram username "
                  />
                </div>
                <div style={style.loginbtn}>
                  <Button style={style.btn} type="submit">
                    Reset Password
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
