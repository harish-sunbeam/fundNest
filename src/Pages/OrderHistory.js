import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios';

function OrderHistory() {
  var counter = 0;
  var ctr=0;
  var [orderHistory, setOrderHistory] = useState([{
    orderAmmount     : "",
    orderStatus      : "",
    orderTime        : "",

  }]);

    // const [sortItems, setSortItems] = useState(false);
  
    // const toggleSort = () => {
    //   setSortItems(!sortItems);
    // };

   useEffect(() => {
    debugger
    console.log("inside use effect")
    const custId = window.localStorage.getItem('custID');
      axios.get(`http://localhost:8080/customer/getorderhistory/${custId}`).then(response=>{
        console.log(response.data)
        setOrderHistory(response.data);
      }).catch(error=>console.log(error))
      debugger
  },[]);

  return (

    <div className="container ">
    <div className="text-information benefit-div">
    <h5 className="mb-5">Order History</h5>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>  
    <table className="table table-bordered table-hover" style={{ width: '100%' ,textAlign:'center'}}>
      <thead className="th">
        <tr>
          <th>No</th>
          <th>Order Amount</th>
          <th>Order Status</th>
          <th>Order Date</th>
        </tr>
      </thead>
      <tbody>
      {orderHistory.map((s) => {
      counter++;
      const orderDateTime = new Date(s.orderTime);
      const orderDate = orderDateTime.toLocaleDateString(); // Format Date
                    return (
                      <tr key={s.transactionTime}>
                        <td>{counter}</td>
                        <td>{s.orderAmmount}</td>
                        <td>{s.orderStatus}</td>
                        <td>{orderDate}</td>
                      </tr>
                    );
                  })}

      </tbody>
    </table>
  </div>
  </div>
  )
}

export default OrderHistory