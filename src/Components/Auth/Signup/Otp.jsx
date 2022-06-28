import React, { useState } from "react";
import Btn from "../Forgetpassword/Btn";
import "./Signup.css";
const Otp = () => {
  const [getotp, setgetotp] = useState("");
  const onChange = (e) => {
    const { otp } = e.target;
    console.log("opt is ", otp);
    setgetotp(e.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { otp } = getotp;
    console.log("Registration data is ", otp);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="otpinputdiv">
        <label>Enter OTP</label>
          <input
            className="otpinput"
            type="text"
            name="number"
            value={getotp}
            onChange={onChange}
            id="number"
          ></input>
        </div>
        <div className="inputdiv">
          <Btn value={"Verify&Register"} />
        </div>
      </form>
    </>
  );
};

export default Otp;
