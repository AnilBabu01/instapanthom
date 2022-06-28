import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from "@mui/material/Typography";
import "./Addacount.css";
const User = () => {
  return (
    <>
       <div className="divuserdel">
           
            <Typography className='usertext' >
             username  
          </Typography>
          <DeleteIcon />
            </div>
    
    </>
  )
}

export default User