import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profileoptions from "./Profileoptions";
import Userdetails from "../Sidebar/Usredetails";
import burder from "../../Images/Component_1.svg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CallMadeIcon from "@material-ui/icons/CallMade";
import "./Maindashboard.css";
function Sidebar() {
  const [click, setclick] = useState(false);
  const handclick = () => setclick(!click);
  return (
    <>
      <nav className="navbar">
        <div onClick={handclick} className="nav-logo">
          <img alt="burger" src={burder} />
        </div>
        <div className="showuserdetails">
          <Userdetails />
        </div>
        <div style={{ paddingRight: "50px" }}>
          <Profileoptions />
        </div>
        <div className={click ? "open " : "menu-div"}>
          <ul className="nav-menu" onClick={handclick}>
            <li className="nav-item">
              <Link
                activeClassName="active"
                to="/dashboard/dashboard"
                className="nav-link"
              >
                <DashboardIcon />{" "}
                <spna style={{ paddingLeft: "10px" }}> Dashboard</spna>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                to="/dashboard/addacount"
                className="nav-link"
              >
                <PersonAddIcon />{" "}
                <spna style={{ paddingLeft: "10px" }}>Addacount </spna>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClassName="active"
                to="/dashboard/placeorder"
                className="nav-link"
              >
                <CallMadeIcon />{" "}
                <spna style={{ paddingLeft: "10px" }}>Placseorder </spna>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
