import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar'
import './Editprofile.css'

const initialdata = {
    mobilenumber: "",
    fullname: "",
    email: "",
  };
const Editprofile = () => {
    const [state, setstate] = useState(initialdata);

  const { mobilenumber, fullname, email } = state;
  const nevigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    
     if(!mobilenumber || !fullname || !email)
     {
       
     }
    

  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  return (
    <>
    <Sidebar/>
    <div className="editbgcolor">
    <div className="restalign">
          <p>Edit Your Profile</p>
        </div>
    <div className='maindivedit'>
        <form
        className="formaligedit"
         
          onSubmit={handlesubmit}
        >
          <label className="label" htmlFor="mobilenumber">Mobile number</label>
          <input
            disabled
            className="number editinput"
            type="text"
            id="mobilenumber"
            name="mobilenumber"
            placeholder="Enter mobile number ..."
            value={mobilenumber}
            onChange={handleinput}
          />
          <label className="label" htmlFor="fullname">Your Full Name</label>
          <input
           className="fullname editinput"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter FullName ..."
            value={fullname}
            onChange={handleinput}
          />
          <label className="label" htmlFor="email">Email address</label>
          <input
           className="emiledit editinput"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email ..."
            value={email}
            onChange={handleinput}
          />

          <input type="submit" value="Apply Changes" />
         
        </form>
      </div>
    </div>
   
    
    
    
    </>
  )
}

export default Editprofile