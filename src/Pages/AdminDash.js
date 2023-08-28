import React from "react";
import { Link } from "react-router-dom";
import "../CSS/card.css";
function AdminDash() {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="text-information benefit-div">
            <h5 className="mb-5">Welcome Admin!</h5>
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
                          Add Stocks
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
                          Change Stock Price
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
  );
}

export default AdminDash;
