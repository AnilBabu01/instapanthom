import "./Reset.css";
import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Alert from "../../Context/Alert";
import { useNavigate } from "react-router-dom";
import  alertContext  from "../../Context/Alertcontext";

const id = "anilb99";

const Reset = () => {
  
  const nevigate = useNavigate();
 
  const [credentials, setCredentials] = useState({
    name: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setIssubmit] = useState(false);
const [showalert, setshowalert] = useState(false)
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormerror(validate(credentials));
    setIssubmit(true);
    const { name } = credentials;
    console.log("reset data is ", name);
  };
  useEffect(() => {
    console.log(formerror);
    if (Object.keys(formerror) && issubmit) {
      console.log(formerror);
    }
  }, [formerror]);

  const validate = (value) => {
    console.log("validate data", value.name);
    const errors = {};
    if (!value.name) {
      errors.name = "The instagram id field is required.";
    } else if (value.name !== id) {
      console.log(id);
      errors.name =
        "We cannot find a registered account with that Instagram username.";
    } else if (value.name === id) {
      setshowalert(true)
      setTimeout(() => {
        nevigate("/verify");
      }, 2000);
    }
    return errors;
  };
  return (
    <>
      <div style={{ background: "aliceblue", height: "100%" }}>
        <div className="maindiv1">
          <div className="aligndiv">
            <div className="headertext1">
              <Typography variant="h4" align="center">
                Forget Password
              </Typography>
             {showalert&& <Alert alert={alert} type={"success"}  msg={"We have e-mailed your password reset link"}/>}
              <form onSubmit={handleSubmit}>
                <div Htmlfor="name">
                  <input
                    className={
                      formerror.name && issubmit ? "input22" : "input2"
                    }
                    type="text"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    id="name"
                    placeholder="Your instagram username "
                  />
                </div>
                <p className="errorcolor">{formerror.name}</p>
                <div className="resetbtn">
                  <button className="btn01" type="submit">
                    Reset Password
                  </button>
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
