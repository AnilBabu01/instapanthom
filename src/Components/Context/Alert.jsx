import React, { useState, useEffect } from "react";

export default function Alert(props) {
  const [type, settype] = useState("");
  const [msg, setmsg] = useState("");
  useEffect(() => {
    settype(props.type);
    setmsg(props.msg);

    setTimeout(() => {
      settype("");
      setmsg("");
    }, 2000);
  }, [props.type]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    alert && (
      <>
        <div className="myToast">
          <div className={`alert alert-${type}`} role="alert">
            {capitalizeFirstLetter(msg)}
          </div>
        </div>
      </>
    )
  );
}
