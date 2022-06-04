import React from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
const Defaultstep = ({GroupAddIcon }) => {
  return (
    <>
    <Paper elevation={3} >
  <div style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "30%",
    cursor:"pointer"
  }}>

    <div>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Paper elevation={3} style={{padding:"20px",marginBottom:"10px"}}>
       {<GroupAddIcon/ >}
        </Paper>
       
      </div>

      <Typography align="center" variant="h5">Step1</Typography>
      <Typography align="center"  >Register & Login</Typography>
    </div>
  </div>
</Paper>
    
    </>
  )
}

export default Defaultstep