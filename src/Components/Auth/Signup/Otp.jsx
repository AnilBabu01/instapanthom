import React, { useState } from "react";
import Btn from "../Forgetpassword/Btn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Signup.css";
const Otp = (props) => {
  const nevigate = useNavigate();
  const [otp, setotp] = useState("");
  const onChange = (e) => {
    setotp(e.target.value);
  };
  const number = props.number;
  console.log("number from opt ", number);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("opt is ", otp);
    try {
      const response = await axios.post("/api/verify", {
        wnumber: number,
        otp: otp,
      });
      toast.success(" verify opt and register successfully ",{autoClose: 1000});
      setTimeout(() => {
        nevigate("/login");
      }, 2000);
      console.log(response.data.status);
    } catch (e) {
      console.log("error", e);
      toast.error("Internal server error",{autoClose: 1000});
     
    }
    console.log("otp data is ", otp, number);
  };

  const resendotp = async () => {
    console.log("resend opt ");
    try {
      const response = await axios.post("/api/resend/%7Bmob_number%7D", {
        wnumber: number,
      });
      toast.success("resend otp successfully",{autoClose: 1000});
      console.log(response.data.status);
    } catch (e) {
      console.log("error", e);
      toast.error("Internal server error",{autoClose: 1000});
    }
    console.log("otp data is ", otp, number);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
