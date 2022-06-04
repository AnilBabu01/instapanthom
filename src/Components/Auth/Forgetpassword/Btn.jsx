import React from 'react'
import "./Reset.css";
const Btn = (props) => {
  return (
    <>
           <div className="resetbtn">
                  <button className="btn01" type="submit">
                   {props.value}
                  </button>
                </div>
    
    
    </>
  )
}

export default Btn