import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import User from './User';
import "./Addacount.css";

const Addacount = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

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
      <Sidebar />
      <div className="mainAddacount">
        <div className="addacountlinltext">
          <Typography variant="h3" className="addtext">
            Please add your instagram account
          </Typography>
          <Link style={{ paddingLeft: "20px", paddingTop: "20px" }} to="/">
            Don’t worry your account <br /> will be safe
          </Link>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="formdivaddacout">
              <div Htmlfor="name">
                <input
                
                  className="inputaddacout"
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                  id="name"
                  placeholder="Enter your Username "
                />
              </div>

              <div>
                <input
                   className="inputaddacout"
                  type="password"
                  value={credentials.password}
                  onChange={onChange}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                ></input>
              </div>

              <div>
                <button className="addacoutbtn" type="submit">Add</button>
              </div>
            </div>
          </form>
        </div>
          <div className="userdiv">
           
            
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          
          </div>

      </div>
    </>
  );
};

export default Addacount;
