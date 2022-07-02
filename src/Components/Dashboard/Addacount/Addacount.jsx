import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import User from "./User";
import axios from "axios";
import { toast } from "react-toastify";
import "./Addacount.css";

const Addacount = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });
  const [users, setusers] = useState([]);
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const { name, password } = credentials;

      const res = await axios.post("/api/addaccount", {
        username: name,
        password: password,
      });
     
      if(res.data.status===true)
      {
        toast.success("Account add successfully", { autoClose: 1000 });
      }
      if(res.data.status===false)
      {
        toast.error("This insta id already exit in database", { autoClose: 1000 });
      }

    } catch (error) {
      toast.error("internal server error", { autoClose: 1000 });
    }
   
  };

  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "token"
  )}`;

  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "token"
  )}`;

  const getuseraccount = async () => {
    const res = await axios.get("/api/addaccount");
    setusers(res.data.data);
   
  };

  useEffect(() => {
    getuseraccount();
  }, [handleSubmit]);

  return (
    <>
      <Sidebar />
      <div className="mainpaccount">
        <div className="mainAddacount">
          <div className="addacountlinltext">
            <Typography variant="h4" className="addtext">
              Please add your instagram account
            </Typography>
            <Link className="addlink" to="/">
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
                  <button className="addacoutbtn" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="userdiv">
            {users.map((item) => {
              return <User username={item.insta_id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addacount;
