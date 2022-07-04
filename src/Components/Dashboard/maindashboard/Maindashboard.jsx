import React, {useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboardcom from "../dashboard/Dashboardcom";
import {useNavigate } from "react-router-dom";
const Maindashboard = ({ setopendashboard }) => {
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
      <Sidebar setopendashboard={setopendashboard} />
      <Dashboardcom />
    </>
  );
};

export default Maindashboard;
