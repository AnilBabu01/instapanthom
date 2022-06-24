import React, { useState } from "react";
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
          <input
            className="otpinput"
            type="text"
            name="number"
            value={getotp}
            onChange={onChange}
            id="number"
          ></input>
          <button className="otpbtn">OTP</button>
        </div>
      </form>
    </>
  );
};

export default Otp;
