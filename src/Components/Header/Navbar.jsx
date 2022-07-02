import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
 const token = localStorage.getItem("token");
 
 console.log("toekn from nav",token)
   useEffect(() => {
     
  }, [isMobile,token]);
 
  
  return (
    <>
      <nav className={style.navbar}>
        <h3 className={style.logo}>Instaphantom</h3>
        <ul
          className={isMobile ? style.mobilelinks : style.navlinks}
          onClick={() => setisMobile(false)}
        >
          {!localStorage.getItem("token") ? (
            <></>
          ) : (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? style.active : style.home
                }
              >
                Dashbosrd
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : style.home
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? style.active : style.about
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? style.active : style.about
              }
            >
              Faq
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? style.active : style.login
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? style.active : style.singup
              }
            >
              Sign up
            </NavLink>
          </li>
        </ul>
        <i
          style={{ marginRight: "20px" }}
          onClick={() => setisMobile(!isMobile)}
          className={style.mobileMenuIcon}
        >
          {isMobile ? (
            <>
              <CloseIcon style={{ height: "40px" }} className={style.burger} />
            </>
          ) : (
            <>
              <MenuIcon style={{ height: "40px" }} className={style.burger} />
            </>
          )}
        </i>
      </nav>
    </>
  );
};

export default Navbar;
