import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Addpayment.css";
const Addpayment = () => {
  const [pay, setpay] = useState({
    name: "",
    number: "",
  });
  const [amount, setamount] = useState("");
  const onChange = (e) => {
    const { amount } = e.target;
    console.log("your enter this price ", amount);
    setpay({ ...pay, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number } = pay;
    console.log("this is pay data", name, number, amount);
  };
  return (
    <>
      <Sidebar />
      <div className="mainpayment">
        <div style={{ width: "100%" }}>
          <div className="alignbuy">
            <h3>Buy Followers</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", marginBottom: "15px" }}>
              <input
              style={{marginRight: "5px"}}
                type="text"
                className="input"
                placeholder="name*"
                name="name"
                value={pay.name}
                onChange={onChange}
                id="price"
              />
              <input
                type="number"
                className="input"
                placeholder="Mobile number*"
                name="number"
                value={pay.number}
                onChange={onChange}
                id="price"
              />
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="input"
                placeholder="Amount*"
                name="price"
                value={amount}
                onChange={onChange}
                id="price"
              />
            </div>
            <div className="pricediv">
              <div className="alignprices">
                <button
                  onClick={() => {
                    setamount("100");
                  }}
                  className="btnprice"
                >
                  100
                </button>
                <button
                  onClick={() => {
                    setamount("200");
                  }}
                  className="btnprice"
                >
                  200
                </button>
                <button
                  onClick={() => {
                    setamount("500");
                  }}
                  className="btnprice"
                >
                  500
                </button>
              </div>
              <div className="alignprices">
                <button
                  onClick={() => {
                    setamount("1000");
                  }}
                  className="btnprice"
                >
                  1000
                </button>
                <button
                  onClick={() => {
                    setamount("2000");
                  }}
                  className="btnprice"
                >
                  2000
                </button>
                <button
                  onClick={() => {
                    setamount("5000");
                  }}
                  className="btnprice"
                >
                  5000
                </button>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button className="submitprice" type="submit">
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addpayment;
