import React from "react";
import "./Reset.css";
const Btn = (props) => {
  return (
    <>
      <button className="btn01" type="submit">
        {props.value}
      </button>
    </>
  );
};

export default Btn;
