import React from "react";
import dp from "../Assets/images/profile.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { request } from "./axios";

function MutualFundDetails() {
  const [mfDetails, setMfDetails] = useState([]);
  const [mfDetail, setMfDetail] = useState({
    mfName: "",
    mfId: "",
    mfFundSize: "",
    mfTotalUnits: "",
    mfTotalInvestment: "",
  });

  const [error, setError] = useState({
    mfName: "",
    mfId: "",
    mfFundSize: "",
    mfTotalUnits: "",
    mfTotalInvestment: "",
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [addData, setAddData] = useState(false);

  useEffect(() => {
    debugger;
    request("GET", "/mfdetails/getmfdetailsbymfid/9")
      .then((response) => {
        setAddData(true);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message === "Invalid Cust Id"
        ) {
          // Handle the specific "Invalid Cust Id" error
          console.log("Invalid Company Id error");
        } else {
          setAddData(true);
          setMfDetail({
            mfName: response.data.mfName,
            mfId: response.data.mfId,
            mfFundSize: response.data.mfFundSize,
            mfTotalUnits: response.data.mfTotalUnits,
            mfTotalInvestment: response.data.mfTotalInvestment,
            
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setAddData(false);
        setError(error);
      });
  }, []);
  var onTextChange = (args) => {
    const { name, value } = args.target;
    setMfDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
    setError((error) => ({ ...error, [name]: "" }));
  };

  const handleSubmit = () => {
    let formValid = true;
    const newErrors = {};

    //input box validations
    if (mfDetail.mfName === "") {
      newErrors.mfName = "Mutual Fund Name is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(mfDetail.mfName)) {
      newErrors.mfName =
        "Mutual Fund Name should only contain letters and spaces.";
      formValid = false;
    }

    if (mfDetail.mfFundSize === "") {
      newErrors.mfFundSize = "Fund Size number is required.";
      formValid = false;
    }

    if (!/^[0-9]+$/.test(mfDetail.mfFundSize)) {
      newErrors.mfFundSize =
        "Please enter a valid number.";
      formValid = false;
    }

   
    if (formValid) {
      console.log(mfDetail);
      try {
        request("POST", "/mfdetails/addmfdetails/11", mfDetail).then(
          (response) => {
            console.log(
              "Mutual fund company details added successfully:",
              response.data
            );
          }
        );

        setMfDetail({
          mfName: "",
          mfId: "",
          mfFundSize: "",
          mfTotalUnits: "",
          mfTotalInvestment: "",
        });

        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);

          // After the message disappears, refresh the page
          window.location.reload();
        }, 3000);
      } catch (error) {
        console.error("Error adding mf  Details:", error);
      }
    } else {
      setError(newErrors);
    }
  };

  return (
    <div>
      <section>
        <div className="container ">
          <div className="text-information benefit-div">
            <h5 className="mb-5">Mutual Fund Details</h5>
          </div>
        </div>
        <section className="py-5 my-5">
          <div className="container">
            {/* image div */}
            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
              <div className="profile-tab-nav border-right">
                <div className="p-4">
                  <div className="img-circle text-center mb-3">
                    <img src={dp} alt="Image" className="shadow" />
                  </div>
                  {/* Profile pic div end */}
                  <h4 className="text-center">Profile Name</h4>
                </div>

                {/* left side div start */}
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/* <Link className="nav-link" to="/aboutus">
                About Us
              </Link> */}
                  <Link
                    className="nav-link active"
                    id="add profile-tab"
                    data-toggle="pill"
                    role="tab"
                    style={{ backgroundColor: "#0052cc" }}
                    aria-controls="add profile"
                    aria-selected="true"
                  >
                    <i className="fa fa-home text-center mr-1"></i>
                    Add Fund Details
                  </Link>
                </div>
              </div>
              {/* Right Side div */}
              <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="add profile"
                  role="tabpanel"
                  aria-h6ledby="add profile-tab"
                >
                  <h2 className="mb-4">Add Fund Details</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Mutual Fund Name</h6>
                        <input
                          type="text"
                          name="mfName"
                          onChange={onTextChange}
                          value={mfDetail.mfName}
                          placeholder="Mutual Fund Name"
                          disabled={addData}
                          className={`form-control mb-2 ${
                            error.mfName && "is-invalid"
                          }`}
                        />
                        {error.mfName && (
                          <div className="invalid-feedback">
                            {error.mfName}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Fund Size(Cr.)</h6>
                        <input
                          type="number"
                          name="mfFundSize"
                          onChange={onTextChange}
                          value={mfDetail.mfFundSize}
                          placeholder="Fund Size"
                          disabled={addData}
                          className={`form-control mb-2 ${
                            error.mfFundSize && "is-invalid"
                          }`}
                        />
                        {error.mfFundSize && (
                          <div className="invalid-feedback">
                            {error.mfFundSize}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Mutual Fund's Total Investment</h6>
                        <input
                          type="text"
                          name="mfTotalInvestment"
                          onChange={onTextChange}
                          disabled
                          value={mfDetail.mfTotalInvestment}
                          placeholder="Total Investment"
                          className={`form-control mb-2 ${
                            error.mfTotalInvestment && "is-invalid"
                          }`}
                        />
                        {error.mfTotalInvestment && (
                          <div className="invalid-feedback">
                            {error.mfTotalInvestment}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Mutual Fund's Total Units</h6>
                        <input
                          type="number"
                          name="mfTotalUnits"
                          onChange={onTextChange}
                          disabled
                          value={mfDetail.mfTotalUnits}
                          placeholder="Total Units"
                          className={`form-control mb-2 ${
                            error.mfTotalUnits && "is-invalid"
                          }`}
                        />
                        {error.mfTotalUnits && (
                          <div className="invalid-feedback">
                            {error.mfTotalUnits}
                          </div>
                        )}
                      </div>
                    </div>
                   

                    <br></br>
                    <br></br>

                    
                    
                  </div>
                  <br></br>
                  <div>
                    <button
                      className="p-2 btn periodBtn"
                      onClick={handleSubmit}
                      disabled={addData}
                    >
                      Add
                    </button>
                    <button
                      type="reset"
                      className="btn btn-light"
                      style={{ marginLeft: "20px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                {/* end of the right side div */}
                {/* end of page */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default MutualFundDetails;
