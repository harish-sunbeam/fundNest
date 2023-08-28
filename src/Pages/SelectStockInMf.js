import React, { useState, useEffect } from "react";
import { request } from "./axios";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addStock } from "../store/slices/StockSlice";

function StockSelection(props) {
  console.warn("props",props.data)
  const history = useHistory();
  const [stockList, setStockList] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const dispatch= useDispatch();
 // const addNewStocks
 

  useEffect(() => {
    // Fetch the list of available stocks from the backend
    request("GET", "/stockmfrelation/getstockdetailsexcluded", {})
      .then((response) => {
        setStockList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stock list:", error);
      });
  }, []);

  const handleCheckboxChange = (stockId) => {
    const updatedSelectedStocks = [...selectedStocks];
    const stockIndex = updatedSelectedStocks.findIndex(
      (stock) => stock.stockId === stockId
    );

    if (stockIndex !== -1) {
      updatedSelectedStocks.splice(stockIndex, 1);
    } else {
      const selectedStock = stockList.find(
        (stock) => stock.stockId === stockId
      );
      if (selectedStock) {
        updatedSelectedStocks.push(selectedStock);
      }
    }

    setSelectedStocks(updatedSelectedStocks);
  };

  const handleAddStock = () => {
    let formValid = true;
    const newErrors = {};

    if (selectedStocks.length !== 5) {
      newErrors.mfInvestmentPerStock = "Please select exactly 5 stocks.";
      formValid = false;
    }

    if (formValid) {
    addStocksInStore()
      history.push('/addselectedstocksinmf')
    }
  };

  function addStocksInStore()
  {
   dispatch(addStock(selectedStocks));
  }

  return (
    <div>
      <section>
        <div className="container ">
          {/* ... other content ... */}
          <div className="bg-white shadow mx-auto text-center">
            <div>
              <table className="table table-bordered table-hover">
                <thead className="th">
                  <tr>
                    <th>Select</th>
                    <th>Stock Name</th>
                    <th>Sector</th>
                    <th>Stock Price</th>
                  </tr>
                </thead>
                <tbody>
                  {stockList.map((s) => {
                    const isSelected = selectedStocks.some(
                      (stock) => stock.stockId === s.stockId
                    );
                    return (
                      <tr key={s.stockId}>
                        <td>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleCheckboxChange(s.stockId)}
                          />
                        </td>
                        <td>{s.stockName}</td>
                        <td>{s.stockSector}</td>
                        <td>{s.stockPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <button
                  className="p-2 btn periodBtn"
                  onClick={handleAddStock}
                  disabled={selectedStocks.length !== 5}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StockSelection;
