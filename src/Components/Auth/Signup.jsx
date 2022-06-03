import React, { useState } from "react";
import user from "../Images/user.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Signup.css";
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
};
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number, email, password } = credentials;
         console.log("Registration data is ",name,email,number,password)
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
                Create a account <br />
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
                <h3>Create An Account</h3>
              </div>
            </div>
            <div style={style.formcontainer}>
              <div  className="mobileform lapform" >
                <div>
                  <Button style={style.btn2}>
                    <GoogleIcon />{" "}
                    <span style={{ paddingLeft: "4%" }}>
                      Sign up with Google
                    </span>{" "}
                  </Button>

                  <Typography style={{ marginTop: "15px" }} align="center">
                    Or
                  </Typography>
                </div>
                <form onSubmit={handleSubmit} >
                  <div style={style.inputdiv} Htmlfor="name">
                    <label>Your name</label>
                    <input
                      className="input"
                      
                      type="text"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                      id="name"
                    />
                  </div>
                  <div style={style.inputdiv}>
                    <label Htmlfor="email">Your email</label>
                    <input
                      className="input"
                      type="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                      id="email"
                    ></input>
                  </div>
                  <div style={style.inputdiv}>
                    <label Htmlfor="number">Mobile number</label>
                    <input
                      className="input"
                      type="text"
                      name="number"
                      value={credentials.number}
                      onChange={onChange}
                      id="number"
                    ></input>
                  </div>
                  <div style={style.inputdiv}>
                    <label htmlFor="password">Password</label>
                    <input
                      className="input"
                      type="password"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                    ></input>
                  </div>
                 <Button style={style.btn} type="submit">
                  Submit
                </Button>
                </form>
              
                <Typography style={{ marginTop: "15px" }} align="center">
                  Already have an account?<a href="/">log in </a>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
