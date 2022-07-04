import React, { useState, useEffect } from "react";
import user from "../../Images/user.jpg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Btn from "../Forgetpassword/Btn";
import Footer from "../../Footer/Footer";
import Common from "../Common";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Otp from "./Otp";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../Login/Login.css";
import "./Signup.css";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setIssubmit] = useState(false);
  const [showotpform, setshowotpform] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [successful, setsuccessful] = useState(false);
  const [userallready, setuserallready] = useState(false);
  const [showpropress, setshowpropress] = useState(false);
  const success = "success";
  const warning = "warning";
  const onChange = (e) => {
    const { name, email, number, password } = e.target;
    console.log("Registration data is ", name, email, number, password);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormerror(validate(credentials));
    setIssubmit(true);
    const { name, number, email, password } = credentials;
    console.log("Registration data is ", name, email, number, password);
    setshowpropress(true);
    try {
      const response = await axios.post("/api/register", {
        name: name,
        email: email,
        wnumber: number,
        password: password,
      });

      console.log(response.data);
      if (
        name &&
        email &&
        number &&
        password &&
        response.data.status === true
      ) {
        setshowpropress(false);
        setsuccessful(true);
        setTimeout(() => {
          setsuccessful(false);
          setshowotpform(true);
         
        }, 1500);
      }
      if (response.data.status === false) {
        setuserallready(true);
        setshowpropress(false);
        setTimeout(() => {
          setuserallready(false);
        }, 1500);
      }
    } catch (e) {
      console.log("error", e);
    }
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
    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.number) {
      errors.number = "Mobile number is required";
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
                <h3>Account Details</h3>
              </div>
            </div>
            <div className="formcontainer">
              <div className="mobileform lapform">
                {showotpform && <Otp number={credentials.number} />}
                {!showotpform && (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="inputdiv">
                        {successful || userallready ? (
                          <Alert
                            variant="filled"
                            severity={successful ? success : warning}
                          >
                            {successful
                              ? "SMS sent successfully"
                              : "Email or Mobile Number already exist "}
                          </Alert>
                        ) : (
                          ""
                        )}
                      </div>

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
                        />
                      </div>

                      <p className="errorcolor">
                        {issubmit ? formerror.name : ""}
                      </p>

                      <div className="inputdiv">
                        <label Htmlfor="email">Your email</label>
                        <input
                          className={
                            formerror.email && issubmit ? "input3" : "input"
                          }
                          type="email"
                          name="email"
                          value={credentials.email}
                          onChange={onChange}
                          id="email"
                        ></input>
                      </div>
                      <p className="errorcolor">{formerror.email}</p>
                      <div className="inputdiv">
                        <label Htmlfor="number">Mobile number</label>
                        <input
                          className={
                            formerror.number && issubmit ? "input3" : "input"
                          }
                          type="text"
                          name="number"
                          value={credentials.number}
                          onChange={onChange}
                          id="number"
                        ></input>
                      </div>
                      <p className="errorcolor">{formerror.number}</p>

                      <div className="inputdiv">
                        <label htmlFor="password">Password</label>
                        <div style={{ position: "relative" }}>
                          <input
                            className={
                              formerror.password && issubmit
                                ? "input3"
                                : "input"
                            }
                            type={showpassword ? "text" : "password"}
                            value={credentials.password}
                            onChange={onChange}
                            name="password"
                            id="password"
                          />
                          <li
                            className="showpassworddsignup"
                            onClick={() => setshowpassword(!showpassword)}
                          >
                            {showpassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </li>
                        </div>
                      </div>
                      <p className="errorcolor">{formerror.password}</p>
                      <div className="inputdiv">
                        <Btn value={"Next"} showpropress={showpropress} />
                      </div>
                    </form>
                    <Typography className="gotAntherAuth" align="center">
                      Already have an account?
                      <Link style={{ textDecoration: "none" }} to="/login">
                        <span className="gotAntherAuthText">Please login</span>{" "}
                      </Link>
                    </Typography>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
