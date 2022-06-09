import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboardcom from "../dashboard/Dashboardcom";
const Maindashboard = ({ setopendashboard }) => {
  useEffect(() => {
    setopendashboard(true);
  }, []);

  return (
    <>
      <Sidebar />
      <Dashboardcom />
    </>
  );
};

export default Maindashboard;
