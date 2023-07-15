import React, { useState, useEffect } from "react";
import "./Memo.css"
const Memo = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };

    contract && fetchMemos();
  }, [contract]);

  return (
    <div className="memo-container">
      <h3 className="memo-heading">Messages</h3>
      <table className="memo-table">
        <thead>
          <tr>
            <th className="memo-table-header">Name</th>
            <th className="memo-table-header">Timestamp</th>
            <th className="memo-table-header">Message</th>
            <th className="memo-table-header">From</th>
            <th className="memo-table-header">Amount</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td className="memo-table-data">{memo.name}</td>
              <td className="memo-table-data">{new Date(memo.timestamp * 1000).toLocaleString()}</td>
              <td className="memo-table-data">{memo.message}</td>
              <td className="memo-table-data">{memo.from}</td>
              <td className="memo-table-data">{memo.amount.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Memo;