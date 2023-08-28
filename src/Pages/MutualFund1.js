import img1 from "../Assets/images/Axis.png";
// import React from "react";
import ReturnCalculator from "./ReturnCalculator";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";
import axios from "axios";
function MutualFund1() {
  var history=useHistory();

  var goToCpm =()=>
  {
    history.push("/peercomparison")
  }

//
const [peerComparison1, setpeerComparison1] = useState(
  // returnPercentage : ""
);

// const [peerComparison2, setpeerComparison2] = useState({
//   returnPercentage : ""
// });

// const [peerComparison3, setpeerComparison3] = useState({
//   returnPercentage : ""
// });

// Calculator card logic
const [oneMonth, setOneMonth] = useState(
  // returnPercentage : ""
);
const [threeMonth, setThreeMonth] = useState(
  // returnPercentage : ""
);
const [sixMonth, setSixMonth] = useState(
  // returnPercentage : ""
);

const [amount, setAmount] = useState({amt : ""});

const [compare, setCompare] = useState({period:""});

const [result, setResult] = useState(

);

const onInputChange1 = (e) => {
  setCompare({ ...compare, [e.target.name]: e.target.value }); 

  var xxx=e.target.value;
  debugger
  if(xxx==1)
  {
    on1MbtnCLick();
  } 
  else if(xxx==3)
  {
    on3MbtnCLick();
  }
  else if(xxx==6)
  {
    on6MbtnCLick();
  }


};
const onInputChange2 = (e) => {
  setAmount({ ...amount, [e.target.name]: e.target.value }); 
};

const onCalculate = (e) => {
  debugger
 if(compare.period === "1")
 {
  //
    axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=30`).then(response=>{
    console.log(response.data);
    const data4 = response.data;
    // setpeerComparison1(data1);
    setOneMonth(data4);
  }).catch(error=>console.log(error));
  //
  var res2 = (oneMonth/100) * parseFloat(amount.amt)
  var res = res2 + parseFloat(amount.amt)
  setResult(res)
 }
 else if(compare.period==="3")
 {
  //
  axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=90`).then(response=>{
    console.log(response.data);
    const data5 = response.data;
    // setpeerComparison1(data1);
    setThreeMonth(data5);
  }).catch(error=>console.log(error));
  //
  var res1 = (threeMonth/100) * parseFloat(amount.amt)
  var res = res1 + parseFloat(amount.amt)
  setResult(res) 
 }
 else if(compare.period==="6")
 {
  //
  axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=180`).then(response=>{
    console.log(response.data);
    const data6 = response.data;
    // setpeerComparison1(data1);
    setSixMonth(data6);
  }).catch(error=>console.log(error));
  //
  var res3 = (sixMonth/100) * parseFloat(amount.amt)
  var res = res3 + parseFloat(amount.amt)
  setResult(res)
 }
      }
// calculator card logic ends here

const on1MbtnCLick = async (e) => {
  debugger
     
      //e.preventDefault();
      await axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=30`).then(response=>{
          console.log(response.data);
          const data1 = response.data;
          setpeerComparison1(data1);
          setOneMonth(data1);
          
      }).catch(error=>console.log(error))
    };

    const on3MbtnCLick = async (e) => {
      debugger
          
         // e.preventDefault();
          await axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=90`).then(response=>{
              console.log(response.data);
              const data2 = response.data;
              setpeerComparison1(data2);
              setThreeMonth(data2);
              
          }).catch(error=>console.log(error))
        };

        const on6MbtnCLick = async (e) => {
          debugger
             
              //e.preventDefault();
              await axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=180`).then(response=>{
                  console.log(response.data);
                  const data3 = response.data;
                  setpeerComparison1(data3);
                  setSixMonth(data3);
                  
              }).catch(error=>console.log(error))
            };
//
  return (
    // content should be at center 
    <div className="container" style={{display:"flex",justifyContent:"center",padding:"50px"}}>
      <html>
        <head>
          <title>MutualFund1</title>
        </head>
        <body>
          <div class="container">
            <div class="row gy-3 my-3">
              {/* style={{backgroundColor:"thistle"}} */}
              <div class="col-sm-8 overflow-auto">
                <div>
                  <div class="img-circle mb-3">
                    <img
                      src={img1}
                      class="card-img-top"
                      style={{ height: "100px", width: "100px" }}
                      alt="Failed to load Image"
                    />
                  </div>
                  <div>
                    <h3>Axis Small Cap Fund Direct Growth</h3>
                    {/* <input type="text" value={38.25} style={{borderColor:"white", borderStyle:"none"}}></input> */}
                    {/* <h4>
                      <p class="return">38.25%</p>
                    </h4> */}
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn" onClick={on1MbtnCLick}
                    >
                      1 M
                    </button>
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn" onClick={on3MbtnCLick}
                    >
                      3 M
                    </button>
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn" onClick={on6MbtnCLick}
                    >
                      6 M
                    </button>
                  </div>
                  <br></br>
                    <div class="card-footer" style={{width : "268px"}}>
                         <h4>Returns : {peerComparison1} %</h4>
                   </div>
                </div>
              </div>
              <br></br>
              <br></br>
{/*  */}

<div className="card col-md-5" style={{ marginRight: "100px" }}>
          <div class="card-body">
                
        {/* Toggle Buttons */}

            <div>
              <div className="row">
                <div className="col-md-12 col-xs-12">
                 <div class="card-header bg-primary " style={{color: 'white',display:"flex", justifyContent:"center"}}>
                     <h3>Return Calculator</h3>
                </div>
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
                    name="amt"
                    onChange={(e) => onInputChange2(e)}
                  >
                    <option selected>Select Amount</option>
                    <option value="1000">1,000 </option>
                    <option value="2000">2,000 </option>
                    <option value="3000">3,000 </option>
                    <option value="5000">5,000 </option>
                    <option value="10000">10,000 </option>
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
                    name="period"
                    onChange={(e) => onInputChange1(e)}
                  >
                    <option selected>Select Investment Period</option>
                    <option value="1">1 </option>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    {/* <option value="5">12</option> */}
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
                  <input type="text" class="form-control" name="result" value={result} />
                  {/* readOnly={result!== ''} */}
                </div>
              </td>
            </tr>

            <br></br>

            {/* <a
              href="#"
              class="btn btn-
                primary btns"
              
            >
              Calculate
            </a> */}

                  <button class="btn btn-
                primary btns" style={{ marginLeft: "200px" }} onClick={onCalculate}>Calculate</button>

          </div>
        </div>

        {/* end of the Calculator card */}
{/*  */}
              <div class="col-sm-4">
                {/* <div
                  class="card card mb-3"
                  style={{ width: "300px", height: "340px" }}
                >
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn"
                    >
                      Monthly SIP
                    </button>

                    <button type="button" class="btn btn-light periodBtn">
                      One Time
                    </button>
                  </div>
                  
                  <div class="card-body text-center">
                    <div>
                      SIP Amount :<br></br>₹{" "}
                      <input type="text" style={{ width: "200px" }}></input>
                      <br></br>
                      <br></br>
                    </div>
                    <div>
                      Monthly SIP Date :<br></br>
                      <input type="date"></input>
                      <br></br>
                      <br></br>
                    </div>
                    <div class="card-footer-bottom text-muted"> </div>
                    <button
                      type="button"
                      class="btn btn-
                primary startbtn"
                    >
                      Start Investment
                    </button>
                    <br></br>
                    <button
                      type="button"
                      class="btn btn-
                primary startbtn"
                onClick={goToCpm}
                    >
                      Peer Comparison
                    </button>
                  </div>
                </div> */}
{/*  */}
<div
                    class="card card mb-3"
                    style={{ width: "300px", height: "340px" }}
                  >
                    {/*  */}
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        type="button"
                        class="btn btn-
                  primary periodBtn"
                      >
                        Start Investment
                      </button>
  
                      {/* <button type="button" class="btn btn-light periodBtn">
                        One Time
                      </button> */}
                    </div>
                    {/*  */}
                    <div class="card-body text-center">
                      <div>
                         Amount :<br></br>₹{" "}
                        <input type="text" style={{ width: "200px" }}/>
                        {/* // value={Ammount.orderAmmount}
                        // onChange={onTextChange}    */}
                        {/* // className={`form-control mb-2 ${
                        //   error.orderAmmount && "is-invalid"
                        // }`}></input>
                        // {error.orderAmmount && (
                        //   <div className="invalid-feedback">
                        //     {error.orderAmmount}
                          </div>
                        // )} */}
                        <br></br>
                        <br></br>
                      </div>
                      {/* <div>
                        Monthly SIP Date :<br></br>
                        <input type="date"></input>
                        <br></br>
                        <br></br>
                      </div> */}
                      {/* <div class="card-footer-bottom text-muted"> </div>*/}
                      <button
                        type="button"
                        class="btn btn-
                  primary startbtn"
                  //onClick={()=>handleSubmit()}
                      >
                        Buy
                      </button>
                      <br></br>
                      <br></br>
                      <button
                        type="button"
                        class="btn btn-
                  primary startbtn"
                  onClick={goToCpm}
                      >
                        Peer Comparison
                      </button>
                    </div>
                  </div>
{/*  */}
      
              </div>
            </div>
          </div>
          <div>
            <ReturnCalculator />
          </div>
        </body>
      </html>
    </div>
  );
}

export default MutualFund1;
