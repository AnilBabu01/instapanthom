import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./Maindashboard.css";
const useStyles = makeStyles({
  MuiAvatarRoot: {
    width: 60,
    height: 60,
    border: "1px solid white",
    marginRight: 10,
  },
});

const style = {
  maindiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "80px",
  },
  textdib: {
    lineHeight: "10px",
    marginTop: "10px",
    fontSize: "17px",
  },
};
const Usredetails = () => {
  const classes = useStyles(useStyles);
  return (
    <>
      <div className="hideinphone" style={style.maindiv}>
        <div>
          <Avatar
            className={classes.MuiAvatarRoot}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div style={style.textdib}>
          <p>User Full Name</p>
          <p>Wallet : 25 RS</p>
        </div>
      </div>
    </>
  );
};

export default Usredetails;
