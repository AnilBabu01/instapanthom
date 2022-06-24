import React, { useState, useEffect } from "react";
import user from "../../Images/user.jpg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Btn from "../Forgetpassword/Btn";
import Footer from "../../Footer/Footer";
import Common from "../Common";
import "../Signup/Signup.css";
import "./Login.css";
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
            <Common />
          </div>
          <div className="rightpart">
            <div className="imgcontent">
              <div className="imgdiv">
                <img src={user} className="img" alt="user"></img>
              </div>
              <div>
                <h3>Login</h3>
              </div>
            </div>
            <div className="formcontainer">
              <div className="formdiv">
                <form onSubmit={handleSubmit}>
                  <div className="inputdiv" Htmlfor="name">
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
                  <div className="inputdiv">
                    <label htmlFor="password">Password</label>
                    <input
                      className={
                        formerror.password && issubmit ? "input3" : "input"
                      }
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
                  <div className="rem">
                    <input type="checkbox" />
                    <p className="reminputtext">Remember me</p>
                  </div>
                  <div className="loginbtn">
                    <Btn value={"Login"} />
                  </div>
                </form>
                <div className="loginbtn">
                  <Link to="/forgetpassword">Forget Your Password</Link>
                </div>
                <div className="loginbtn">
                  <Typography className="gotAntherAuth" align="center">
                    don't have an account?
                    <Link style={{ textDecoration: "none" }} to="/signup">
                      <span className="gotAntherAuthText">Please Signup</span>{" "}
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login1;
