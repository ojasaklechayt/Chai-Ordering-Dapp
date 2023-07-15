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
    alert("Transaction is successfull");
    window.location.reload();
  };
  return (
    <div className="center">
      <h1>Thanks</h1>
      <form onSubmit={buyChai}>
        <div className="inputbox">
          <input type="text" required="required" id="name" />
          <span>Name</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" id="message" />
          <span>Message</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" id="amount" />
          <span>Value</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="Pay" disabled={!state.contract} />
        </div>
      </form>
    </div>
  );
};
export default Buy;
