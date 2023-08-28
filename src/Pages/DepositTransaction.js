import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState,useEffect } from "react";
import axios from "axios";


const DepositTransaction = () => {
  let history = useHistory();
  var callTransactionHistory = () => {
    history.push("/transactionHistory");
  };

  const custId = window.localStorage.getItem('custID');

  const [depositTransaction , setDepositTransaction] = useState({
    depositAmount      : "",
    withdrawAmount     : "",
    openingBalance   : "",
    totalInvestedAmmount    : ""
  });

  const{depositAmount} = depositTransaction;

  const onInputChange = (e) => {
    setDepositTransaction({ ...depositTransaction, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    debugger
    console.log("inside use effect")
    const custId = window.localStorage.getItem('custID');
      axios.get(`http://localhost:8080/customer/transactiondetails/${custId}`).then(response=>{
        console.log(response.data)
        setDepositTransaction({
          openingBalance : response.data.openingBalance , totalInvestedAmmount : response.data.totalInvestedAmmount
          });
          debugger
        //setRadioo({gender :response.data.custGender});
        
      }).catch(error=>console.log(error))
  
  },[]);


  const onSubmit =async (e) => {

    debugger
    const myDepositTransaction = {
        custId             : custId,
        transactionAmmount      : depositTransaction.depositAmount
    }

    
  axios.post(`http://localhost:8080/customer/deposit/${custId}`,myDepositTransaction).then((response)=>{
    console.log(response.data)
  
  } ).catch(()=>{})
  };


  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-4" style={{ marginRight: "100px" }}>
          <div class="card-body">
            <div>
              <center>
                <h3>Transaction</h3>
              </center>

              <div className="col-md-12">
                <div className="col-md-12 col-xs-6">
                  <div className="form-group">
                    <br></br>
                    <h5>Deposit Amount</h5>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount to Add"
                      name="depositAmount"
                      value={depositTransaction.depositAmount}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>

                <div>
                  <div className="col-md-12 col-xs-12">
                    <center>
                      <button className="btn btn-success" onClick={onSubmit}>  Add Funds</button>
                    </center>
                  </div>
                </div>
              </div>
              {/* <div className="container">
                     <input type="text" className="textbox" placeholder="Enter text" />
                    <button className="button">Submit</button>
                 </div> */}
            </div>

            <br></br>

            <div className="col-md-12 col-xs-6">
              <div className="form-group">
                <h5>Withdraw Amount</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Amount to Add "
                />
              </div>
            </div>

            <div className="col-md-12 col-xs-6">
              <div>
                <center>
                  <button className="btn btn-danger">  Withdraw Funds</button>
                </center>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-6">
          <div className="form-group">
            <h6>Available Balance</h6>
            <input type="text" className="form-control" 
             name="openingBalance"
             value={depositTransaction.openingBalance}
             onChange={(e) => onInputChange(e)}/>
          </div>

          <div className="form-group">
            <h6>Invested Balance</h6>
            <input type="text" className="form-control"
             name="totalInvestedAmmount" 
             value={depositTransaction.totalInvestedAmmount}
             onChange={(e) => onInputChange(e)}/>
          </div>
          <center>
            <button
              className="btn btn-
            primary login-btn"
              type="submit"
              onClick={callTransactionHistory}
            >
              View All Transactions
            </button>
          </center>
          <br></br>
        </div>

        {/* <div className="col-md-4">
       <p>To view all your transactions    <a style={{color:"blue"}} onClick={()=>{ history.push("/TransactionHistory")}}>View All Transactions</a></p>
     </div> */}
      </div>
    </div>
  );
};
export default DepositTransaction;
