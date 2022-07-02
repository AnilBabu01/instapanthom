import React, {useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboardcom from "../dashboard/Dashboardcom";
const Maindashboard = ({ setopendashboard }) => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    setopendashboard(true);
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
