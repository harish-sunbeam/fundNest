import React from 'react'
import { Link } from "react-router-dom";
function UserDash() {
  return (
    <div>
    <section>
      <div className="container ">
        <div className="text-information benefit-div">
          <h5 className="mb-5">Welcome User!</h5>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <center>
              <div className="col-xl-4 col-lg-5 ">
                <div className="card shadow mb-4 card-hover ">
                  <div className="card-header py-3">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/stockdetails"
                    >
                      {" "}
                      <h6 className="m-0 font-weight-bold text-primary">
                       Profile
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <center>
              <div className="col-xl-4 col-lg-5 ">
                <div className="card shadow mb-4 card-hover ">
                  <div className="card-header py-3">
                    <Link style={{ textDecoration: "none" }} to="/listallmf">
                      {" "}
                      <h6 className="m-0 font-weight-bold text-primary">
                        Mutual Funds
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <center>
              <div className="col-xl-4 col-lg-5 ">
                <div className="card shadow mb-4 card-hover ">
                  <div className="card-header py-3">
                    <Link style={{ textDecoration: "none" }} to="/listallmf">
                      {" "}
                      <h6 className="m-0 font-weight-bold text-primary">
                       Portfolio
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <center>
              <div className="col-xl-4 col-lg-5 ">
                <div className="card shadow mb-4 card-hover ">
                  <div className="card-header py-3">
                    <Link style={{ textDecoration: "none" }} to="/listallmf">
                      {" "}
                      <h6 className="m-0 font-weight-bold text-primary">
                      Wallet
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <center>
              <div className="col-xl-4 col-lg-5 ">
                <div className="card shadow mb-4 card-hover ">
                  <div className="card-header py-3">
                    <Link style={{ textDecoration: "none" }} to="/listallmf">
                      {" "}
                      <h6 className="m-0 font-weight-bold text-primary">
                      Order History
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <center>
              <div className="col-xl-4 col-lg-5 ">
                <div className="card shadow mb-4 card-hover ">
                  <div className="card-header py-3">
                    <Link style={{ textDecoration: "none" }} to="/listallmf">
                      {" "}
                      <h6 className="m-0 font-weight-bold text-primary">
                       Transaction History
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
       
      </div>
    </section>
  </div>
  )
}

export default UserDash