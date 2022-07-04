import React, { useState } from "react";
import Btn from "../Forgetpassword/Btn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Signup.css";
const Otp = (props) => {
  const nevigate = useNavigate();
  const [otp, setotp] = useState("");
  const [verify, setverify] = useState(false);
  const [resend, setresend] = useState(false);
  const [vererror, setvererror] = useState(false);
  const [resenderror, setresenderror] = useState(false);
  const [showpropress, setshowpropress] = useState(false);
  const [resendprogress, setresendprogress] = useState(false);
  const [wrongotp, setwrongotp] = useState(false);
  const success = "success";
  const error = "error";
  const warning = "warning";
  const onChange = (e) => {
    setotp(e.target.value);
  };
  const number = props.number;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setshowpropress(false);
    } else {
      setshowpropress(true);
    }
    try {
      const response = await axios.post("/api/verify", {
        wnumber: number,
        otp: otp,
      });

      if (otp) {
        setTimeout(() => {
          setverify(false);

          setshowpropress(false);
        }, 2000);
      }
      if (response.data) {
        setTimeout(() => {
          setverify(false);

          setshowpropress(false);
        }, 1000);
      }

      if (
        response.data.msg.message ===
        "(Rows matched: 0  Changed: 0  Warnings: 0"
      ) {
        console.log("verify");
        setTimeout(() => {
          setwrongotp(false);
        }, 1000);
        setwrongotp(true);
      }
      if (
        response.data.msg.message ===
        "(Rows matched: 1  Changed: 1  Warnings: 0"
      ) {
        setTimeout(() => {
          setverify(false);
          nevigate("/login");
        }, 1000);
        setverify(true);
      }
      console.log("ver", response.data.msg.message);
    } catch (e) {
      console.log("error", e);

      setTimeout(() => {
        setresenderror(false);
        setshowpropress(false);
      }, 1000);
      setresenderror(true);
    }
    console.log("otp data is ", otp, number);
  };

  const resendotp = async () => {
    console.log("resend opt ", number);
    
    try {
      setresendprogress(true);
      const response = await axios.get("/api/resend/%7Bmob_number%7D", {
        wnumber: number,
      });
     
      console.log(response.data.status);
      if (response) {
        setresendprogress(false);
        setTimeout(() => {
          setresend(false);
        }, 1500);
      }

      setresend(true);
    } catch (e) {
      setresend(false);
      setvererror(true);
      setTimeout(() => {
        setvererror(false);
        setresendprogress(false);
      }, 1000);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputdiv">
          {verify || wrongotp ? (
            <Alert variant="filled" severity={verify ? success : warning}>
              {verify
                ? "verify opt and register successfully"
                : "Please enter the correct otp"}
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
          {resendprogress ? (
            <Alert variant="filled" severity={success}>
              message sent succsessfully
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
          <Btn value={"Verify & Register"} showpropress={showpropress} />
        </div>
      </form>
      <div className="inputdiv">
        <button className="resenopt" onClick={resendotp}>
          {resendprogress ? (
            <CircularProgress color="secondary" />
          ) : (
            " Resend OTP"
          )}
        </button>
      </div>
    </>
  );
};

export default Otp;
