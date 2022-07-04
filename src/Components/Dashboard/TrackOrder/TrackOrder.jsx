import React,{useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Trackcommon from './Trackcommon';
import { useNavigate } from "react-router-dom";
import './TrackOrder.css'
const TrackOrder = ({setopendashboard}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    setopendashboard(true);
     
    if(!localStorage.getItem("token"))
    {
      navigate("/")

    }

  }, []);

  useEffect(() => {
    setopendashboard(false);
  }, [!token,token]);
  return (
    <>
     <Sidebar/>
     <div className='trackbgcolor '>

       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
       <Trackcommon/>
     

     </div>
    </>
  )
}

export default TrackOrder;