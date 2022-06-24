import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "../Sidebar.css";
const useStyles = makeStyles({
  MuiAvatarRoot: {
    width: 60,
    height: 60,
    border: "1px solid white",
    marginRight: 10,
  },
});

const Usredetails = () => {
  const classes = useStyles(useStyles);
  return (
    <>
      <div className="hideinphone maindivuser"  >
        <div>
          <Avatar
            className={classes.MuiAvatarRoot}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div className='textdibuser'>
          <p>User Full Name</p>
          <p>Wallet : 25 RS</p>
        </div>
      </div>
    </>
  );
};

export default Usredetails;
