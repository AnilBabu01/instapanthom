import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress'
import "./Reset.css";
const Btn = ({showpropress,value}) => {
  return (
    <>
      <button className="btn01" type="submit">
        {showpropress?<CircularProgress color="secondary" />:value}
       </button>
    </>
  );
};

export default Btn;
