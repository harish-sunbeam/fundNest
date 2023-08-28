// import React from "react";
import "../CSS/return.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";

function ReturnCalculator() { 
  const [stock1Asset,setStock1Asset] = useState({});
  const [stock2Asset,setStock2Asset] = useState({});
  const [stock3Asset,setStock3Asset] = useState({});
  const [stock4Asset,setStock4Asset] = useState({});
  const [stock5Asset,setStock5Asset] = useState({});

  const [stock1Name,setStock1Name] = useState({});
  const [stock2Name,setStock2Name] = useState({});
  const [stock3Name,setStock3Name] = useState({});
  const [stock4Name,setStock4Name] = useState({});
  const [stock5Name,setStock5Name] = useState({});

  const data = {
    labels: [stock1Name, stock2Name, stock3Name, stock4Name, stock5Name],
    datasets: [
      {
        label: "% in MutualFund",
        data: [
          stock1Asset,
          stock2Asset,
          stock3Asset,
          stock4Asset,
          stock5Asset
        ],
        // backgroundColor: ["palevioletred", "orangered", "lawngreen", "blue", "black"],
        // backgroundColor: ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
        backgroundColor: ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"],
      }
    ]
  };

  const [investment, setInvestment]= useState([{
    mfInvestmentPerStock:"",
      noOfUnitsPerStock:"",
  }])

  const [stockDetails,setStockDetails] = useState([{
    stockId: "",
    stockName: "",
    stockPrice: 0,
    stockSector: "",
    stockChangeDate: ""
  }])


useEffect(() => {
  loadUser();
}, []);
//new get code according to peer comparison code
const loadUser = () => {
axios.get(`http://localhost:8080/mfdetails/getsockdetailsbymfid/1`).then(response=>{
            console.log(response.data);
            const data1 = response.data;
            setStockDetails(data1);
            
            setStock1Name(()=>data1[0].stockName);
            setStock2Name(()=>data1[1].stockName);
            setStock3Name(()=>data1[2].stockName);
            setStock4Name(()=>data1[3].stockName);
            setStock5Name(()=>data1[4].stockName);
            
            console.log(data1[0].stockName);
            console.log(data1[1].stockName);
            console.log(data1[2].stockName);
            console.log(data1[3].stockName);
            console.log(data1[4].stockName);
            
            // debugger
            
        }).catch(error=>console.log(error))

        axios.get(`http://localhost:8080/stockmfrelation/getStockMfRelationDetails/1`).then(response=>{
            console.log(response.data);
            const data2 = response.data;
            setInvestment(data2);
            // var total = data2.map((k)=>k.mfInvestmentPerStock).reduce((prev, curr) => prev + curr, 0);
//uncomment above line       
            //data.datasets.data=([data2.map((k)=>k.mfInvestmentPerStock/total*100)])

            // this.setData({datasets:{...this.data.datasets,data:data.datasets.data=([data2.map((k)=>k.mfInvestmentPerStock/total*100)])}})
//uncomment below 5 lines
            // setStock1Asset(()=>(data2[0].mfInvestmentPerStock/total)*100);
            // setStock2Asset(()=>(data2[1].mfInvestmentPerStock/total)*100);
            // setStock3Asset(()=>(data2[2].mfInvestmentPerStock/total)*100);
            // setStock4Asset(()=>(data2[3].mfInvestmentPerStock/total)*100);
            // setStock5Asset(()=>(data2[4].mfInvestmentPerStock/total)*100);
// remove below part as it is for testpurpose
            var total = 50000000
            setStock1Asset(()=>(17500000/total)*100);
            setStock2Asset(()=>(12500000/total)*100);
            setStock3Asset(()=>(11000000/total)*100);
            setStock4Asset(()=>(55000000/total)*100);
            setStock5Asset(()=>(3500000/total)*100);
// remove upto this part
            console.log(total);
            console.log(stock1Asset);
            console.log(stock2Asset);
            console.log(stock3Asset);
            console.log(stock4Asset);
            console.log(stock5Asset);

             debugger
            
        }).catch(error=>console.log(error))
      }


  return (
    <div className="container">
      <div className="row">
        {/* <div className="card col-md-5" style={{ marginRight: "100px" }}>
          <div class="card-body">
                
        Toggle Buttons

            <div>
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    id="success-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-
                primary btns "
                    style={{ marginTop: "10px" }}
                    for="success-outlined"
                  >
                    Monthly SIP
                  </label>
                </div>
            
              </div>
            </div>

            <br></br>

            <tr>
              <td style={{ width: "250px" }}>
                <div className="col-md-12">
                  <h6>Investment[₹]</h6>
                </div>
              </td>

              <td>
                <div class="col-md-12">
                  <select
                    class="form-select float-left"
                    aria-h6="Default select example"
                    style={{ width: "200px" }}
                  >
                    <option value="1">1,000 </option>
                    <option value="2">2,000 </option>
                    <option value="3">3,000 </option>
                    <option value="4">5,000 </option>
                    <option value="5">10,000 </option>
                  </select>
                </div>
              </td>
            </tr>

            <br></br>

            <tr>
              <td style={{ width: "250px" }}>
                <div className="col-md-12">
                  <h6>Investment Period[Months]</h6>
                </div>
              </td>

              <td style={{ width: "150px" }}>
                <div class="col-md-12">
                  <select
                    class="form-select float-right"
                    aria-h6="Default select example"
                    style={{ width: "200px" }}
                  >
                    <option value="1">1 </option>
                    <option value="3">3</option>
                    <option value="4">6</option>
                    <option value="5">12</option>
                  </select>
                </div>
              </td>
            </tr>

            <br></br>

            <tr>
              <td style={{ width: "250px" }}>
                <div class="col-md-6">
                  <h6> Return Of Investment [₹]</h6>
                </div>
              </td>

              <td style={{ width: "200px" }}>
                <div
                  class="form-group,col-md-2"
                  style={{ borderRadius: "10px" }}
                >
                  <input type="text" class="form-control" />
                </div>
              </td>
            </tr>

            <br></br>

            <a
              href="#"
              class="btn btn-
                primary btns"
              style={{ marginLeft: "200px" }}
            >
              Calculate
            </a>
          </div>
        </div>

        end of the Calculator card */}

        {/* table settings for the holdings */}
        <h4>Holdings :</h4>
        <div
          className="col-md-5"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginRight: "100px",
          }}
        >
          <table
            className="table table-bordered"
            style={{ border: "2", borderStyle: "solid", borderColor: "black" }}
          >
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">StockId</th>
                <th scope="col">Stock Name</th>
                <th scope="col">Stock Sector</th>
                <th scope="col">Stock Assets</th>
              </tr>
            </thead>


{/* below code is straight outof chatGPT */}
            {stockDetails.map((stock, index) => (
              <tbody>
              <tr key={index}>
                <td>{stock.stockId}</td>
                <td>{stock.stockName}</td>
                <td>{stock.stockSector}</td>
                <td>{investment[index]?.mfInvestmentPerStock}</td>
              </tr>
              </tbody>
            ))}
              
            
          </table>
        </div>

        {/* Doughnut */}
        <div className="col-md-8" style={{ height: "250px", width: "300px" }}>
        <MDBContainer>
        <Doughnut data={data} />
      </MDBContainer> 
        </div>
      </div>
    </div>
  );
}

// Doughnut

export default ReturnCalculator;
