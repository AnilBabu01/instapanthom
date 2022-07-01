import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main from "./Main";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Main />
    </>
  );
}

export default App;
