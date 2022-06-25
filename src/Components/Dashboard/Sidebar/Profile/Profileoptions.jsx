import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import PaymentIcon from "@material-ui/icons/Payment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Userdetails from "../Usedetails/Usredetails";
import "./Profileoptions.css";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "250px",
  },
})((props) => (
  <Menu
    style={{ marginTop: "26px" }}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <svg
      
        width="20"
        height="25"
        viewBox="0 0 20 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <circle cx="7.5" cy="13.5" r="7.5" fill="white" />
        <circle cx="7.5" cy="32.5" r="7.5" fill="white" />
        <circle cx="7.5" cy="52.5" r="7.5" fill="white" />
      </svg>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="showusedetalinmenuin-mobile">
          <Userdetails />
        </div>

        <StyledMenuItem>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <TrackChangesIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Track Order" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PaymentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add Payment" />
        </StyledMenuItem>
        <Divider style={{ backgroundColor: "gray" }} />
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Reset Password" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
