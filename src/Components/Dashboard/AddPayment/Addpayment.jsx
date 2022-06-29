import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Addpayment.css";
const Addpayment = () => {
  const [price, setprice] = useState("");
  const onChange = (e) => {
    const { price } = e.target;
    console.log("your enter this price ", price);

    setprice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("your enter this price ", price);
  };
  return (
    <>
      <Sidebar />
      <div className="mainpayment">
        <div>
          <div className="alignbuy">
            <h3>Buy Followers</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="emiledit editinput"
                placeholder="Enter Amount"
                name="price"
                value={price}
                onChange={onChange}
                id="price"
              />
            </div>
            <div className="pricediv">
              <div className="alignprices">
                <p className="fontprice">Price</p>
                <p className="fontprice">Followers</p>
              </div>
              <div className="alignprices">
                <p className="amout">100</p>
                <p className="amout1">200</p>
              </div>
              <div className="alignprices">
                <p className="amout">200</p>
                <p className="amout1">500</p>
              </div>
              <div className="alignprices">
                <p className="amout">500</p>
                <p className="amout1">1000</p>
              </div>
              <div className="alignprices">
                <p className="amout">1000</p>
                <p className="amout1">20000</p>
              </div>
              <div className="alignprices">
                <p className="amout">2000</p>
                <p className="amout1">30000</p>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <input type="submit" value="Make Payment" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addpayment;
