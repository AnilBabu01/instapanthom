import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Profileoptions from "../Sidebar/Profile/Profileoptions";
import Userdetails from "../Sidebar/Usedetails/Usredetails";
import burder from "../../Images/Component_1.svg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CallMadeIcon from "@material-ui/icons/CallMade";
import "./Sidebar.css";
function Sidebar() {
  const [click, setclick] = useState(false);
  const ref = useRef(null);

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
                <DashboardIcon />
                <spna className="linkspan"> Dashboard</spna>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                to="/dashboard/addacount"
                className="nav-link"
              >
                <PersonAddIcon />
                <spna className="linkspan">Addacount </spna>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClassName="active"
                to="/dashboard/placeorder"
                className="nav-link"
              >
                <CallMadeIcon />
                <spna className="linkspan">Placseorder </spna>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
