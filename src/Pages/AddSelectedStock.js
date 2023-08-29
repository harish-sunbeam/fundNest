import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { request } from "./axios";
import { useEffect } from 'react';

function AddSelectedStock(props) {
  var counter=0;
  const [delId,setDelId]=useState();
  const [disabledStocks, setDisabledStocks] = useState([]);
  
  const data=useSelector((state)=>
  {
    
    return state.stocks
  })
  
 
  const [stockList,setStockList]=useState(data)
  const [selectedStocks, setSelectedStocks] = useState({
    mfId: 0,
    stockId: 0,
    mfInvestmentPerStock: "",
  });
  const [stockDetail, setStockDetail] = useState({
    stockId: "",
    stockName: "",
    stockPrice: "",
    stockSector: "",
  });
  const [error, setError] = useState({
    mfInvestmentPerStock: "",
  });
  var onTextChange = (args) => {
    const { name, value } = args.target;
    setSelectedStocks((stockDetail) => ({ ...stockDetail, [name]: value }));
    setError((error) => ({ ...error, [name]: "" }));
  };

  useEffect(() => {
    // Attach the event handler to refresh the page on history change (browser's back/forward buttons)
    const handleHistoryChange = () => {
      window.location.reload();
    };

    window.onpopstate = handleHistoryChange;

    // Clean up the event handler when the component unmounts
    return () => {
      window.onpopstate = null;
    };
  }, []); 

  const handleAddStock = (stockId) => {
    let formValid = true;
    const newErrors = {};

    if (selectedStocks.mfInvestmentPerStock === "") {
      newErrors.mfInvestmentPerStock = "Investment Price is required.";
      formValid = false;
    }

    if (!/^[0-9]+$/.test(selectedStocks.mfInvestmentPerStock)) {
      newErrors.mfInvestmentPerStock = "Price should be a valid number.";
      formValid = false;
    }

    if (formValid ) {
      
      var sId=stockDetail.stockId
      console.warn(sId)
      
      const Stocks={
        mfId: 9,
        stockId: stockDetail.stockId,
        mfInvestmentPerStock: selectedStocks.mfInvestmentPerStock,
      };
     
      debugger;
      // Send the selected stocks to the backend
      request("POST", "/mfdetails/addstocksinmfs", Stocks)
        .then((response) => {
          alert("Selected stocks sent successfully!");
         
        })
        .catch((error) => {
          console.error("Error submitting selected stocks:", error);
        });
    } else {
      setError(newErrors);
    }
  };
  const Add = (s,id) => {
    setStockDetail(s);
    setDelId(id);
    setDisabledStocks([...disabledStocks, id]);
    
  };
  
  
  return (
    <div>
    <section>
      <div className="container ">
        {/* image div */}
        <div className="text-information benefit-div">
          <h5 className="mb-5">Add Stocks In MF NAME</h5>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <h6>Stock Name</h6>
              <input
                type="text"
                placeholder="Stock Name"
                className="form-control mb-2"
                name="stockName"
                disabled
                value={stockDetail.stockName}
                onChange={onTextChange}
              />
            </div>

            <div className="col-md-3">
              <h6>Stock Sector</h6>
              <input
                placeholder="Sector"
                name="stockSector"
                className="form-control mb-2"
                disabled
                value={stockDetail.stockSector}
              />
            </div>
            <div className="col-md-3">
              <h6>Stock Price</h6>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Price"
                disabled
                name="stockPrice"
                value={stockDetail.stockPrice}
              />
            </div>
            <div className="col-md-3">
              <h6>Investment In Stock</h6>
              <input
                type="text"
                className={`form-control mb-2 ${
                  error.mfInvestmentPerStock && "is-invalid"
                }`}
                placeholder="Investment In Stock"
                name="mfInvestmentPerStock"
                onChange={onTextChange}
                value={selectedStocks.mfInvestmentPerStock}
              />
              {error.mfInvestmentPerStock && (
                <div className="invalid-feedback">
                  {error.mfInvestmentPerStock}
                </div>
              )}
            </div>
          </div>
          <div></div>
          <div className="d-flex justify-content-between">
            <button
              className="p-2 btn periodBtn"
              onClick={() => handleAddStock(stockDetail.stockId)}
              
            >
              Submit
            </button>{" "}
          </div>
        </div>
        <div className="bg-white shadow mx-auto text-center">
          <div>
            <table className="table table-bordered table-hover">
              <thead className="th">
                <tr>
                  <th>No</th>
                  <th>Stock Name</th>
                  <th>Sector</th>
                  <th>Stock Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stockList.map((s,id) => {
                 const isDisabled = disabledStocks.includes(s.stockId);
                 counter++;
                  return (
                    <tr key={id}>
                      {console.log("id",id)}
                      <td>{counter}</td>
                      <td>{s.stockName}</td>
                      <td>{s.stockSector}</td>
                      <td>{s.stockPrice}</td>
                      <td>
                        <button
                          className="p-2 btn periodBtn"
                          disabled={isDisabled}
                          onClick={() => {
                            Add(s,s.stockId);
                          }}
                        >
                          Add
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

export default AddSelectedStock;
 
  

  

  

  
  