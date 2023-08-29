import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserInvestment() {
  const custId = window.localStorage.getItem("custID");
  var counter = 0;
  var ctr = 0;
  var [userInvestmentDetails, setUserInvestmentDetails] = useState([
    {
      investmentAmmount: "",
      units: "",
      pandl: "",
      investmentDate: "",
      mfName: "",
    },
  ]);
  const [error, setError] = useState({
    orderAmmount: ""
 
  });


  const [sellOrder, setSellOrder] = useState({
    orderAmmount: ""
 
  });

  var [userInvDetails, setUserInvDetails] = useState([
    {
      investmentAmmount: "",
      units: "",
      pandl: "",
      investmentDate: "",
      mfName: "",
    },
  ]);


  const onSubmit = (e) => {
    debugger;
    let formValid = true;
    const newErrors = {};

    if (sellOrder.orderAmmount === "") {
      newErrors.orderAmmount = "Investment Price is required.";
      formValid = false;
    }

    if (!/^[0-9]+$/.test(sellOrder.orderAmmount)) {
      newErrors.orderAmmount = "Price should be a valid number.";
      formValid = false;
    }

    if (sellOrder.orderAmmount > userInvDetails.investmentAmmount) {
      newErrors.orderAmmount = "Sell Amount Should Be Less Than Investment Amount";
      formValid = false;
    }

    if (formValid ) {

    const myInvestment = {
      orderAmmount: sellOrder.orderAmmount,
      mfId        : 1
      
    };
    debugger;
    axios
      .post(`http://localhost:8080/customer/sellmutualfund/${custId}`, myInvestment)
      .then((response) => {
        console.log(response.data);
        setUserInvDetails({

          investmentAmmount: "",
          units: "",
          pandl: "",
          investmentDate: "",
          mfName: "",
  
        })
        setSellOrder({orderAmmount:""});
      window.location.reload();
      })
      
      .catch(() => {});
      

     
      
    } else {
      setError(newErrors);
    }
  };


  var onTextChange = (args) => {
    const { name, value } = args.target;
    setSellOrder((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
    setError((error) => ({ ...error, [name]: "" }));
  };

  const sell = (s)=>{
    setUserInvDetails(s)
  }


  useEffect(() => {
    debugger;
    console.log("inside use effect");
    const custId = window.localStorage.getItem("custID");
    axios
      .get(
        `http://localhost:8080/customer/getCustomerInvestmentDetails/${custId}`
      )
      .then((response) => {
        console.log(response.data);
        setUserInvestmentDetails(response.data);
      })
      .catch((error) => console.log(error));
    debugger;
  }, []);

  return (
    <div>
    <section>
      <div className="container ">
        {/* image div */}
        <div className="text-information benefit-div">
          <h5 className="mb-5">User Investment Details</h5>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <h6>Mutual Fund Name</h6>
              <input
                type="text"
                placeholder="Mutual Fund Name"
                className="form-control mb-2"
                name="mfName"
                disabled
                value={userInvDetails.mfName}
                />
              
            </div>

            <div className="col-md-3">
              <h6>Invested Amount</h6>
              <input
                placeholder="Invested Amount"
                name="investmentAmmount"
                className="form-control mb-2"
                disabled
                value={userInvDetails.investmentAmmount}
                />
            </div>
          
            <div className="col-md-3">
              <h6>Sell Amount</h6>
              <input
                type="text"
                className={`form-control mb-2 ${
                  error.orderAmmount && "is-invalid"
                }`}
                placeholder="Amount to Sell"
                name="orderAmmount"
                onChange={onTextChange}
                value={sellOrder.orderAmmount}
                />
              {error.orderAmmount && (
                <div className="invalid-feedback">
                  {error.orderAmmount}
                </div>
              )}
            </div>
          </div>
          <div></div>
          <div className="d-flex justify-content-between">
            <button
              className="p-2 btn btn-danger" 
              onClick={onSubmit}>
              Confirm Sell
            </button>{" "}
            
          </div>
        </div>
        <br></br>
        <div className="bg-white shadow mx-auto text-center">
          <div>
            <table className="table table-bordered table-hover">
              <thead className="th">
                <tr>
                  <th>No</th>
                  <th>Mutual Fund</th>
                  <th>Investment Amount</th>
                  <th>Investment Date</th>
                  <th>Invested Units</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {userInvestmentDetails.map((s,id) => {
                //  const isDisabled = disabledStocks.includes(s.stockId);
                const invDate = new Date(s.investmentDate);
      const transactionDate = invDate.toLocaleDateString(); // Format Date 
                counter++;
                  return (
                    <tr key={s.investmentDate}>
                      {console.log("id",id)}
                      <td>{counter}</td>
                      <td>{s.mfName}</td>
                      <td>{s.investmentAmmount}</td>
                      <td>{transactionDate}</td>
                      <td>{s.units}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            sell(s);
                          }}>
                         Sell
                        </button>
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default UserInvestment;
