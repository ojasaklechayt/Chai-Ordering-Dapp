import { useState, useEffect } from "react";
import abi from "./contractJson/chai.json";
import { ethers } from "ethers";
import Memo from "./components/Memo";
import Buy from "./components/Buy";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddres = "0x7B400469880822Ea9CFF8838849fd96950a9FDaB";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        );
        console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);
  return (
    <div>
      <p style={{ marginTop: "10px", marginLeft: "450px" }}>
        <small>Connected Account - {account}</small>
      </p>

      <Buy state={state} />
      <Memo state={state} />
    </div>
  );
}

export default App;
