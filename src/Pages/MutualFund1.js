import img1 from "../Assets/images/Axis.png";
import React from "react";
import ReturnCalculator from "./ReturnCalculator";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function MutualFund1() {
  var history=useHistory();

  var goToCpm =()=>
  {
    history.push("/stockcmp")
  }
  return (
    <div>
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
                    <h4>
                      <p class="return">38.25%</p>
                    </h4>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn"
                    >
                      1 M
                    </button>
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn"
                    >
                      6 M
                    </button>
                    <button
                      type="button"
                      class="btn btn-
                primary periodBtn"
                    >
                      1 Y
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div class="col-sm-4">
                <div
                  class="card card border-primary mb-3"
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
                      Monthly SIP
                    </button>

                    <button type="button" class="btn btn-light periodBtn">
                      One Time
                    </button>
                  </div>
                  {/*  */}
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
                    {/* <div class="card-footer-bottom text-muted"> </div>*/}
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
                </div>
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
