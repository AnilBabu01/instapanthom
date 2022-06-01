import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Images/logo.png";
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {}, [isMobile]);

  return (
    <>
      <nav className={style.navbar}>
        <h3 className={style.logo}><img src={logo} style={{width:"300px",height:"300px"}} alt='logo'></img></h3>

        <ul
          className={isMobile ? style.mobilelinks : style.navlinks}
          onClick={() => setisMobile(false)}
        >
          <li>
            <Link to="/faq" className={style.home}>
              Faq
            </Link>
          </li>
          <li>
            <Link to="/" className={style.home}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={style.about}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/login" className={style.login}>
              Login
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/signup" className={style.singup}>
              Sign up
            </Link>
          </li>
        </ul>

        <div style={{ marginRight: "20px" }}>
          <button
            onClick={() => setisMobile(!isMobile)}
            className={style.mobileMenuIcon}
          >
            {isMobile ? (
              <i>
                <CloseIcon />
              </i>
            ) : (
              <i>
                <MenuIcon />
              </i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
