import React from "react";
import { ethers } from "ethers";
import "./Buy.css";

const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amountvalue = document.querySelector("#amount").value.toString();
    const amount = { value: ethers.utils.parseEther(amountvalue) };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    alert("Transaction is successful");
    window.location.reload();
  };

  return (
    <div className="buy-component-container">
      <h1>Welcome to the app</h1>
      <form onSubmit={buyChai} className="buy-component-form">
        <div className="buy-component-input">
          <input type="text" required id="name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="buy-component-input">
          <input type="text" required id="message" />
          <label htmlFor="message">Message</label>
        </div>
        <div className="buy-component-input">
          <input type="text" required id="amount" />
          <label htmlFor="amount">Value</label>
        </div>
        <div className="buy-component-input">
          <input type="submit" value="Pay" disabled={!state.contract} />
        </div>
      </form>
    </div>
  );
};

export default Buy;
