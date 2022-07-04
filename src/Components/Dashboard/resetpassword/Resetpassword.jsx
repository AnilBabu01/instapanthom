import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./Resetpassword.css";

const initialdata = {
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
};

const Resetpassword = ({ setopendashboard }) => {
  const [state, setstate] = useState(initialdata);
  const [newshowpassword, setnewshowpassword] = useState(false);
  const { oldpassword, newpassword, confirmpassword } = state;

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!oldpassword || !newpassword || !confirmpassword) {
    }
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    setopendashboard(true);

    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setopendashboard(false);
  }, [!token, token]);

  return (
    <>
      <Sidebar />

      <div className="editbgcolor">
        <div className="restalign">
          <p>Reset Your Password</p>
        </div>

        <div className="maindivedit">
          <form className="formaligedit" onSubmit={handlesubmit}>
            <label className="label" htmlFor="oldpassword">
              Old Password
            </label>

            <input
              className="fullname editinput"
              type="password"
              id="oldpassword"
              name="oldpassword"
              placeholder="Enter Old password ..."
              value={oldpassword}
              onChange={handleinput}
            />

            <label className="label" htmlFor="newpassword">
              New Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                className="fullname editinput"
                type={newshowpassword ? "text" : "password"}
                id="newpassword"
                name="newpassword"
                placeholder="Enter New password ..."
                value={newpassword}
                onChange={handleinput}
              />
              <li
                className="showpasswordd"
                onClick={() => setnewshowpassword(!newshowpassword)}
              >
                {newshowpassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </li>
            </div>

            <label className="label" htmlFor="confirmpassword">
              Confirm Password
            </label>

            <input
              className="emiledit editinput"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Enter Confirm password ..."
              value={confirmpassword}
              onChange={handleinput}
            />

            <input type="submit" value="Reset Password" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
