import React, { useState, useEffect } from "react";
import user from "../Images/user.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./Signup.css";
import "./Login.css";
const style = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",

    paddingTop: "6%",
    paddingBottom: "6%",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  leftpart: {
    backgroundColor: "purple",
    paddingTop: "10%",
    paddingLeft: "4%",
    paddingRight: "4%",
    color: "white",
  },
  rightpart: {
    backgroundColor: "white",
  },
  img: {
    width: "10%",
    height: "10%",
  },
  imgcontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imgdiv: {
    justifyContent: "center",
    display: "flex",
  },
  formcontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputdiv: {
    display: "flex",
    flexDirection: "column",
  },

  btn: {
    backgroundColor: "purple",
    border: "none",
    width: "100%",
    height: "28px",
    marginTop: "30px",
    borderRadius: "5px",
    color: "white",
  },
  btn2: {
    backgroundColor: "purple",
    border: "none",
    width: "100%",
    height: "28px",
    color: "white",
    borderRadius: "5px",
  },
  logo: {
    width: "300px",
    height: "300px",
  },

  rem: {
    display: "flex",
    justifyContent: "center",
    height: "30px",
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
};
const Login1 = () => {
  const [credentials, setCredentials] = useState({
    name: "",

    password: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setIssubmit] = useState(false);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormerror(validate(credentials));
    setIssubmit(true);
    const { name, password } = credentials;
    console.log("Registration data is ", name, password);
  };
  useEffect(() => {
    console.log(formerror);
    if (Object.keys(formerror) && issubmit) {
      console.log(formerror);
    }
  }, [formerror]);

  const validate = (values) => {
    console.log("validate data", values.name);
    const errors = {};
    const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!values.name) {
      errors.name = "Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password more then 4";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more then 10";
    }

    return errors;
  };
  return (
    <>
      <div className="main mobileview">
        <div className="mainfirst mobileviewmainfirst">
          <div className="leftpart mobileviewrleftpart ">
            <div>
              <Typography>Instaphantom</Typography>
            </div>
            <div style={{ marginTop: "21%" }}>
              <Typography variant="h4">
                Login
                <br />
                To get followers
              </Typography>
            </div>
            <div style={{ marginTop: "10%", marginBottom: "42%" }}>
              <Typography>
                It is simple to get targeted, high quality,
                <br /> free Instagram followers or free Instagram <br />
                likes from our network!{" "}
              </Typography>
            </div>
          </div>
          <div style={style.rightpart}>
            <div style={style.imgcontent}>
              <div style={style.imgdiv}>
                <img src={user} style={style.img} alt="user"></img>
              </div>
              <div>
                <h3>Login</h3>
              </div>
            </div>
            <div style={style.formcontainer}>
              <div className="formdiv">
                <form onSubmit={handleSubmit}>
                  <div style={style.inputdiv} Htmlfor="name">
                    <label>Your name</label>
                    <input
                      className={
                        formerror.name && issubmit ? "input3" : "input"
                      }
                      type="text"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                      id="name"
                      placeholder="Your instagram username "
                    />
                  </div>
                  <p className="errorcolor">{issubmit ? formerror.name : ""}</p>
                  <div style={style.inputdiv}>
                    <label htmlFor="password">Password</label>
                    <input
                      className={
                        formerror.password && issubmit ? "input3" : "input"
                      }
                      style={style.input}
                      type="password"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                      placeholder="Password"
                    ></input>
                  </div>
                  <p className="errorcolor">
                    {issubmit ? formerror.password : ""}
                  </p>
                  <div style={style.rem}>
                    <input type="checkbox" />
                    <p style={style.reminputtext}>Remember me</p>
                  </div>
                  <div style={style.loginbtn}>
                    <Button style={style.btn} type="submit">
                      Login
                    </Button>
                  </div>
                </form>
                <div style={style.loginbtn}>
                  <Link to="/reset">Forget Your Password</Link>
                </div>
                <div style={style.loginbtn}>
                  <Typography style={{ marginTop: "15px" }} align="center">
                    Already have an account?<Link to="/signup">Signup </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login1;
