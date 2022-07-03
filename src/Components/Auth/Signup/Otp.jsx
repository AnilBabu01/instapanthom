import React, { useState } from "react";
import Btn from "../Forgetpassword/Btn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "./Signup.css";
const Otp = (props) => {
  const nevigate = useNavigate();
  const [otp, setotp] = useState("");
  const [verify, setverify] = useState(false);
  const [resend, setresend] = useState(false);
  const [vererror, setvererror] = useState(false);
  const [resenderror, setresenderror] = useState(false);
  const success = "success";
  const error = "error";
  const onChange = (e) => {
    setotp(e.target.value);
  };
  const number = props.number;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/verify", {
        wnumber: number,
        otp: otp,
      });
      if (otp) {
        setTimeout(() => {
          setverify(false);
          nevigate("/login");
        }, 2000);
        setverify(true);
      }

      console.log(response.data);
    } catch (e) {
      console.log("error", e);

      setTimeout(() => {
        setresenderror(false);
      }, 1000);
      setresenderror(true);
    }
    console.log("otp data is ", otp, number);
  };

  const resendotp = async () => {
    console.log("resend opt ");
    try {
      const response = await axios.post("/api/resend/%7Bmob_number%7D", {
        wnumber: number,
      });
     console.log(response.data.status);
      setTimeout(() => {
        setresend(false);
      }, 1000);
      setresend(true);
    } catch (e) {
     
      setvererror(true)
      setTimeout(() => {
        setvererror(false)
      }, 1000);
    }
   
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputdiv">
          {verify || resend ? (
            <Alert variant="filled" severity={success}>
              {verify
                ? "verify opt and register successfully"
                : "resend otp successfully"}
            </Alert>
          ) : (
            ""
          )}
        </div>
        <div className="inputdiv">
          {vererror || resenderror ? (
            <Alert variant="filled" severity={error}>
              Internal server error
            </Alert>
          ) : (
            ""
          )}
        </div>
        <div className="otpinputdiv">
          <label>Enter OTP</label>
          <input
            type="text"
            className="input"
            placeholder="OTP"
            name="otp"
            value={otp}
            onChange={onChange}
            id="otp"
          ></input>
        </div>
        <div className="inputdiv">
          <Btn value={"Verify & Register"} />
        </div>
      </form>
      <div className="inputdiv">
        <button className="resenopt" onClick={resendotp}>
          Resend OTP
        </button>
      </div>
    </>
  );
};

export default Otp;
