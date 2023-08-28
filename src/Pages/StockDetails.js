import React from "react";
import { useState, useEffect } from "react";
import { request } from "./axios";
function StockDetails() {
  var counter = 0;
  var ctr=0;
  const [stockDetails, setStockDetails] = useState([]);
  const [stockDetail, setStockDetail] = useState({
    stockId: "",
    stockName: "",
    stockPrice: "",
    stockSector: "",
  });

  //to set the error of input box validation
  const [error, setError] = useState({
    stockName: "",
    stockPrice: "",
    stockSector: "",
  });

  //to set success message
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  
  //for to sort the stock price
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" for ascending, "desc" for descending
  const [sortBy, setSortBy] = useState("stockPrice"); // Property to sort by

  //to  the list of all stocks
  useEffect(() => {
    
    request("POST", "/stockdetails/getstockdetails", {}).then((res) =>
      setStockDetails(res.data)
    );
  }, []);

  //to record chnage in input box
  var onTextChange = (args) => {
    const { name, value } = args.target;
    setStockDetail((stockDetail) => ({ ...stockDetail, [name]: value }));
    setError((error) => ({ ...error, [name]: "" }));
  };

  //sort asce/desc
  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  //sorting logic
  const sortedStockDetails = [...stockDetails].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });
  
  //add stock details in DB
  const handleSubmit = () => {
    let formValid = true;
    const newErrors = {};

    //input box validations
    if (stockDetail.stockName === "") {
      newErrors.stockName = "Stock Name is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(stockDetail.stockName)) {
      newErrors.stockName =
        "Stock Name should only contain letters and spaces.";
      formValid = false;
    }

    if (stockDetail.stockPrice === "") {
      newErrors.stockPrice = "Price is required.";
      formValid = false;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(stockDetail.stockPrice)) {
      newErrors.stockPrice =
        "Price should be a valid number with up to 2 decimal places.";
      formValid = false;
    }

    if (stockDetail.stockSector === "") {
      newErrors.stockSector = "Sector is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(stockDetail.stockSector)) {
      newErrors.stockSector = "Sector should only contain letters and spaces.";
      formValid = false;
    }

    if (formValid) {
      console.log(stockDetail);
      ctr++
    if(ctr<20)
      try {
        request("POST", "/stockdetails/addstockdetails", stockDetail).then(
          (response) => {
            console.log("Stock added successfully:", response.data);
          }
        );

        setStockDetail({
          stockName: "",
          stockPrice: "",
          stockSector: "",
        });

        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);

          // After the message disappears, refresh the page
          window.location.reload();
        }, 3000);
      } catch (error) {
        console.error("Error adding stock:", error);
      }
    } else {
      setError(newErrors);
    }
  };

  return (
    <div>
      <section>
        <div className="container ">
          {/* image div */}
          <div className="text-information benefit-div">
            <h5 className="mb-5">Stock Details</h5>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4">
              <h6>Stock Name</h6>
                <input
                  type="text"
                  className={`form-control mb-2 ${
                    error.stockName && "is-invalid"
                  }`}
                  placeholder="Stock Name"
                  name="stockName"
                  value={stockDetail.stockName}
                  onChange={onTextChange}
                />
                {error.stockName && (
                  <div className="invalid-feedback">{error.stockName}</div>
                )}
              </div>

              <div className="col-md-4">
              <h6>Stock Sector</h6>
                <input
                  type="text"
                  className={`form-control mb-2 ${
                    error.stockSector && "is-invalid"
                  }`}
                  placeholder="Sector"
                  name="stockSector"
                  value={stockDetail.stockSector}
                  onChange={onTextChange}
                />
                {error.stockSector && (
                  <div className="invalid-feedback">{error.stockSector}</div>
                )}
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
              <button className="p-2 btn periodBtn" onClick={handleSubmit}
              disabled={counter>=20 ? true : false} >
                Add
              </button>
              <button
                className="p-2 btn periodBtn"
                style={{ width: "280px" }}
                onClick={toggleSortOrder}
              >
                Sort By {sortBy} (
                {sortOrder === "asc" ? "Ascending" : "Descending"})
              </button>
            </div>
            <div>
              {successMessageVisible && (
                <div
                  className="invisible-message"
                  style={{ color: "darkgreen" }}
                >
                  Stock added successfully. Please check below stock list!
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
                  </tr>
                </thead>
                <tbody>
                  {sortedStockDetails.map((s) => {
                    counter++;
                    return (
                      <tr key={s.stockName}>
                        <td>{counter}</td>
                        <td>{s.stockName}</td>
                        <td>{s.stockSector}</td>
                        <td>{s.stockPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <br></br>
    </div>
  );
}

export default StockDetails;
