import React, { useState, useEffect } from "react";
import user from "../../Images/user.jpg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Btn from "../Forgetpassword/Btn";
import Footer from "../../Footer/Footer";
import Common from "../Common";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import "../Signup/Signup.css";
import "./Login.css";
const url = "https://v1.instaphantom.com";
const Login1 = () => {
  const nevigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setIssubmit] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [logged, setlogged] = useState(false);
  const [lohinvalidcre, setlohinvalidcre] = useState(false);
  const [showpropress, setshowpropress] = useState(false);
  const success = "success";
  const warning = "warning";
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormerror(validate(credentials));
    setIssubmit(true);
    const { number, password } = credentials;
    setshowpropress(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/login`,
        {
          wnumber: number,
          password: password,
        }
      );

      if (response.data.user && response.data.status === true) {
        setshowpropress(false);
        setlogged(true);
        setTimeout(() => {
          setlogged(false);

          nevigate("/");
        }, 1500);
        localStorage.setItem("token", response.data.token);
      }

      // Save the auth token and redirect

      if (
        response.data.msg == "Please Enter the Corect Passwords" &&
        response.data.status === true
      ) {
        setshowpropress(false);
        setTimeout(() => {
          setlohinvalidcre(false);
        }, 1000);
        setlohinvalidcre(true);
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    if (Object.keys(formerror) && issubmit) {
    }
  }, [formerror]);

  const validate = (values) => {
    const errors = {};

    if (!values.number) {
      errors.number = "register number is required";
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
                  <div className="inputdiv">
                    {logged || lohinvalidcre ? (
                      <Alert
                        variant="filled"
                        severity={logged ? success : warning}
                      >
                        {logged
                          ? "you have login successfully"
                          : "Please Enter the Corect Passwords"}
                      </Alert>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="inputdiv" Htmlfor="number">
                    <label>Your number</label>
                    <input
                      className={
                        formerror.number && issubmit ? "input3" : "input"
                      }
                      type="text"
                      name="number"
                      value={credentials.number}
                      onChange={onChange}
                      id="number"
                      placeholder="Your instagram number "
                    />
                  </div>
                  <p className="errorcolor">
                    {issubmit ? formerror.number : ""}
                  </p>
                  <div className="inputdiv">
                    <label htmlFor="password">Password</label>
                    <div style={{ position: "relative" }}>
                      <input
                        className={
                          formerror.password && issubmit ? "input3" : "input"
                        }
                        type={showpassword ? "text" : "password"}
                        value={credentials.password}
                        onChange={onChange}
                        name="password"
                        id="password"
                        placeholder="Password"
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
                  <p className="errorcolor">
                    {issubmit ? formerror.password : ""}
                  </p>
                  <div className="rem">
                    <input type="checkbox" />
                    <p className="reminputtext">Remember me</p>
                  </div>
                  <div className="inputdiv">
                    <Btn value={"Login"} showpropress={showpropress} />
                  </div>
                </form>
                <div className="loginbtn">
                  <Link to="/forgetpassword">Forget Your Password</Link>
                </div>

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
      <Footer />
    </>
  );
};

export default Login1;
