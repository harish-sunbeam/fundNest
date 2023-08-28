import React, { useEffect } from "react";
import { useState } from "react";
import { request } from "./axios";
function ChangeStockPrice() {
  const [stockList, setStockList] = useState([]);
  const [newstockList, setNewStockList] = useState([]);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [disabledStocks, setDisabledStocks] = useState([]);
  const mfId = sessionStorage.getItem("mfId");
  const mfName = sessionStorage.getItem("mfName");
  const [stockDetail, setStockDetail] = useState({
    stockId: "",
    stockName: "",
    stockPrice: "",
    stockSector: "",
  });
 
  const [error, setError] = useState({
    stockPrice: "",
  });
  var onTextChange = (args) => {
    const { name, value } = args.target;
    setStockDetail((stockDetail) => ({ ...stockDetail, [name]: value }));
    setError((error) => ({ ...error, [name]: "" }));
  };
  useEffect(() => {
    request("GET", `/mfdetails/getsockdetailsbymfid/${mfId}`, {}).then((res) =>
      setStockList(res.data)
    );
  }, []);

  const handleAdd = () => {
    let formValid = true;
    const newErrors = {};

    if (stockDetail.stockPrice === "") {
      newErrors.stockPrice = "Price is required.";
      formValid = false;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(stockDetail.stockPrice)) {
      newErrors.stockPrice =
        "Price should be a valid number with up to 2 decimal places.";
      formValid = false;
    }
    if (formValid) {
      const newStockDetail ={
        stockId: stockDetail.stockId,
        stockName: stockDetail.stockName,
        stockPrice: stockDetail.stockPrice,
        stockSector: stockDetail.stockSector,
      };
      
      
      const newDetail = { ...newStockDetail };
      setNewStockList((prevList) => [...prevList, newDetail]);
      debugger
      console.warn(newstockList)
      setStockDetail({
        stockId: "",
        stockName: "",
        stockPrice: "",
        stockSector: "",
      });
    } else {
      setError(newErrors);
    }
  };

  const handleSubmit = () => {
 
    const stockUpdate = {
      stockDetails: newstockList,
    };
    console.warn(stockUpdate);
    debugger;
    try {
      request(
        "PUT",
        `/stockmfrelation/updatestockdetails/${mfId}`,
        stockUpdate
      ).then((response) => {
        console.log("Stock added successfully:", response.data);
      });

      setStockDetail({
        stockName: "",
        stockPrice: "",
        stockSector: "",
      });

      setSuccessMessageVisible(true);
      setTimeout(() => {
        setSuccessMessageVisible(false);

        // After the message disappears, refresh the page
      }, 3000);
    } catch (error) {
      console.error("Error adding stock:", error);
    }
    
  };
  const EditPrice = (s, id) => {
    setStockDetail(s);
    setDisabledStocks([...disabledStocks, id]);
  };
  return (
    <div>
      <section>
        <div className="container ">
          {/* image div */}
          <div className="text-information benefit-div">
            <h5 className="mb-5">{mfName} : Stock Details</h5>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4">
                <h6>Stock Name</h6>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Stock Name"
                  name="stockName"
                  value={stockDetail.stockName}
                  disabled
                />
              </div>

              <div className="col-md-4">
                <h6>Stock Sector</h6>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Sector"
                  name="stockSector"
                  value={stockDetail.stockSector}
                  disabled
                />
              </div>
              <div className="col-md-4">
                <h6>Stock Price</h6>
                <input
                  type="text"
                  className={`form-control mb-2 ${
                    error.stockPrice && "is-invalid"
                  }`}
                  placeholder="Price"
                  name="stockPrice"
                  value={stockDetail.stockPrice}
                  onChange={onTextChange}
                />
                {error.stockPrice && (
                  <div className="invalid-feedback">{error.stockPrice}</div>
                )}
              </div>
            </div>
            <div></div>
            <div className="d-flex justify-content-between">
              <button className="p-2 btn periodBtn" onClick={handleAdd}>
                Add
              </button>
            </div>
            <div>
              {successMessageVisible && (
                <div
                  className="invisible-message"
                  style={{ color: "darkgreen" }}
                >
                  Stock Price Changed successfully!
                </div>
              )}
            </div>
          </div>
          <br></br>
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
                  {stockList.map((s, index) => {
                    const isDisabled = disabledStocks.includes(s.stockId);
                    const no = index + 1;
                    return (
                      <tr key={index}>
                        <td>{no}</td>
                        <td>{s.stockName}</td>
                        <td>{s.stockSector}</td>
                        <td>{s.stockPrice}</td>
                        <td>
                          <button
                            className="p-2 btn periodBtn"
                            disabled={isDisabled}
                            style={{ width: "150px" }}
                            onClick={() => {
                              EditPrice(s, s.stockId);
                            }}
                          >
                            Edit Price
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button className="p-2 btn periodBtn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </section>
      <br></br>
    </div>
  );
}

export default ChangeStockPrice;
