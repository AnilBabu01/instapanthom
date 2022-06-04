import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const style = {
 
 
 
  
  inputdiv: {
    display: "flex",
    flexDirection: "column",
  },
 
  btn: {
    background: "#3b53d8",
    border: "none",

    height: "28px",
    marginTop: "30px",
    borderRadius: "5px",
    color: "white",
  },

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
};
const Login = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });
const navigate =useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = credentials;
    console.log("Login data is ", name, password);
  };
  return (
    <>
      <div style={{ background: "aliceblue" }}>
        <div className="maindiv">
          <div className="mobileview">
            <div className="headertext">
              <p>
                Welcome to Instaphanthom Login below or create an account.Please do
                NOT use your same Instagram password when registering an account
                with us.
              </p>
            </div>
            <div className="formdiv">
              <Typography variant="h4" align="center">
                Account Details
              </Typography>
              <form onSubmit={handleSubmit} >
                <div style={style.inputdiv} Htmlfor="name">
                  <label>Your name</label>
                  <input
                    className="input1"
                    
                    type="text"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    id="name"
                    placeholder="Your instagram username "
                  />
                </div>

                <div style={style.inputdiv}>
                  <label htmlFor="password">Password</label>
                  <input
                    className="input1"
                    style={style.input}
                    type="password"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    placeholder="Password"
                  ></input>
                </div>
                <div>
                  <input type="checkbox" />
                  <p >Remember me</p>
                </div>
                <div style={style.loginbtn}>
                  <Button style={style.btn} type="submit">
                    Login
                  </Button>
                </div>
              </form>
              <div style={style.loginbtn}>
                <a href="/reset"
                 >Forget Your Password</a>
              </div>
              <div style={style.loginbtn}>
                <button 
                  onClick={()=>navigate("/signup")}
                className="createactbtn">Create An Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
