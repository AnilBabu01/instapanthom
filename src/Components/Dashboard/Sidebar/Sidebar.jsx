import React, { useState, useRef, useEffect } from "react";
import {NavLink } from "react-router-dom";
import Profileoptions from "../Sidebar/Profile/Profileoptions";
import Userdetails from "../Sidebar/Usedetails/Usredetails";
import burder from "../../Images/Component_1.svg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Alert from "@mui/material/Alert";
import "./Sidebar.css";
function Sidebar() {
  const [click, setclick] = useState(false);
  const ref = useRef(null);
  const [logout, setlogout] = useState(false);
  const success = "success";
  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.addEventListener("click", close);
  }, []);

  const close = (e) => {
    setclick(e && e.target === ref.current);
  };
  const handclick = () => setclick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img onClick={handclick} ref={ref} alt="burger" src={burder} />
        </div>
        <div className="showuserdetails">
          <Userdetails />
        </div>
        <div className="profilediv">
          <Profileoptions setlogout={setlogout} />
        </div>
        <div className={click ? "open1 " : "menu-div"}>
          <ul className="nav-menu" onClick={handclick}>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/dashboard/dashboard"
              >
                <DashboardIcon />
                <spna className="linkspan"> Dashboard</spna>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/dashboard/addacount"
              >
                <PersonAddIcon />
                <spna className="linkspan">Addacount </spna>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/dashboard/placeorder"
              >
                <CallMadeIcon />
                <spna className="linkspan">Placseorder </spna>
              </NavLink>
            </li>
          </ul>
        </div>
        
      </nav>
      {logout ? (
            <Alert variant="filled" severity={success}>
              you have logout successfully
             
            </Alert>
          ) : (
            ""
          )}
    </>
  );
}

export default Sidebar;
