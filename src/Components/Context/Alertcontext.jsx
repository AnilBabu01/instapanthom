/* eslint-disable no-unused-vars */
import { useState, createContext } from "react";
const alertContext = createContext();
export default function Alertcontext(props) {
  const [alert, setAlert] = useState(null);
  const [username, setusername] = useState("")
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  const [loading, setLoading] = useState(true);
  // get use info 
  return (
    <alertContext.Provider value={{ showAlert, alert, loading, setLoading, username, setusername, }}>
      {props.children}
    </alertContext.Provider>
  );



}

export { alertContext };

