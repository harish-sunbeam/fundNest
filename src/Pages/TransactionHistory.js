import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios';

function TransactionHistory() {
  var counter = 0;
  var ctr=0;
  var [transactionHistory, setTransactionHistory] = useState([{
    openingBalance       : "",
    transactionAmmount   : "",
    transactionStatus    : "",
    transactionTime      : ""
  }]);

    // const [sortItems, setSortItems] = useState(false);
  
    // const toggleSort = () => {
    //   setSortItems(!sortItems);
    // };

   useEffect(() => {
    debugger
    console.log("inside use effect")
    const custId = window.localStorage.getItem('custID');
      axios.get(`http://localhost:8080/customer/gettransactionhistory/${custId}`).then(response=>{
        console.log(response.data)
        setTransactionHistory(response.data);
      }).catch(error=>console.log(error))
      debugger
  },[]);

  return (

    <div className="container ">
    <div className="text-information benefit-div">
    <h5 className="mb-5">Transaction History</h5>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>  
    <table className="table table-bordered table-hover" style={{ width: '100%' ,textAlign:'center'}}>
      <thead className="th">
        <tr>
          <th>No</th>
          <th>Balance</th>
          <th>Transaction Amount</th>
          <th>Transaction Status</th>
          <th>Transaction Date</th>
        </tr>
      </thead>
      <tbody>
      {transactionHistory.map((s) => {
      counter++;
      const transactionDateTime = new Date(s.transactionTime);
      const transactionDate = transactionDateTime.toLocaleDateString(); // Format Date
                    return (
                      <tr key={s.transactionTime}>
                        <td>{counter}</td>
                        <td>{s.openingBalance}</td>
                        <td>{s.transactionAmmount}</td>
                        <td>{s.transactionStatus}</td>
                        <td>{transactionDate}</td>
                      </tr>
                    );
                  })}

      </tbody>
    </table>
  </div>
  </div>
  )
}

export default TransactionHistory
