import React, { useState, useRef, useEffect } from "react";
import followers from "../Dasgimages/followers.svg";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import order from "../Dasgimages/order.svg";
import "./Placeorder.css";
const countries = [
  { id: 1, name: "Instagram useraccount " },
  { id: 2, name: "Instagram useraccount " },
  { id: 3, name: "Instagram useraccount " },
  { id: 4, name: "Instagram useraccount " },
];
const UseraccountList = () => {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState(null);
  const [query, setquery] = useState("");
  const label = "name";
  const id = "id";
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.addEventListener("click", close);
  }, []);

  const close = (e) => {
    setopen(e && e.target === ref.current);
  };

  const filterr = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  const onChange = (val) => {
    setvalue(val[label]);
  };

  return (
    <>
      <div className="userlistmain">
        <div className="divdropdown">
          <div className="dropdown">
            <div className="control" onClick={() => setopen(!open)}>
              <div className="selected-value">
                <input
                  type="text"
                  ref={ref}
                  placeholder={value ? value[label] : "Select Your account.."}
                  onClick={() => setopen(!open)}
                  value={value || query}
                  onChange={(e) => {
                    setquery(e.target.value);

                    onChange("");
                  }}
                />
                <div className={`arrow ${open ? "open " : null}`} />
              </div>
              
            </div>
            <div className={`options ${open ? "open " : null}`}>
              {filterr(countries).map((option) => (
                <div
                  key={option[id]}
                  className={`option ${
                    value === option ? "selected" : "" ? "open " : null
                  }`}
                  onClick={() => {
                    setquery("");
                    onChange(option);
                    setopen(false);
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      className="arrowicon"
                     
                      src={followers}
                      alt="followers"
                    />
                    <span style={{ marginleft: "10px" }}> {option[label]}</span>

                    <div style={{ marginLeft: "10px" }}>
                      <SubdirectoryArrowLeftIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "120px" }}>
          <button className="orderbtn">
            <img
              className="orderimgg"
              
              src={order}
              alt="order"
            />{" "}
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default UseraccountList;
