import React from "react";
import dp from "../Assets/images/profile.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { request } from "./axios";

function MfCompanyDetails() {
  const [mfCompanyDetails, setMfCompanyDetails] = useState([]);
  const [mfCompanyDetail, setMfCompanyDetail] = useState({
    companyName: "",
    companyEmailId: "",
    companyContactNo: "",
    companyAddress: "",
    companySate: "",
    companyPinCode: "",
  });

  const [error, setError] = useState({
    companyName: "",
    companyEmailId: "",
    companyContactNo: "",
    companyAddress: "",
    companySate: "",
    companyPinCode: "",
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [addData,setAddData]=useState(false);


  useEffect(() => {
    debugger
    request("GET", "/company/getMfCompanyDetailsByCustId/11")
      .then(response => {
        setAddData(true);
        if (error.response && error.response.data && error.response.data.message === "Invalid Cust Id") {
          // Handle the specific "Invalid Cust Id" error
          console.log("Invalid Cust Id error");
        } 
    
        else{
          setAddData(true);
        setMfCompanyDetail({
          companyName: response.data.companyName,
          companyEmailId: response.data.companyEmailId,
          companyContactNo: response.data.companyContactNo,
          companyAddress: response.data.companyAddress,
          companySate: response.data.companySate,
          companyPinCode: response.data.companyPinCode,
        });
      }

      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setAddData(false);
        setError(error);
      });
  }, []);
  var onTextChange = (args) => {
    const { name, value } = args.target;
    setMfCompanyDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
    setError((error) => ({ ...error, [name]: "" }));
  };

  const handleSubmit = () => {
    let formValid = true;
    const newErrors = {};

    //input box validations
    if (mfCompanyDetail.companyName === "") {
      newErrors.companyName = "Company Name is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(mfCompanyDetail.companyName)) {
      newErrors.companyName =
        "Company Name should only contain letters and spaces.";
      formValid = false;
    }

    if (mfCompanyDetail.companyEmailId === "") {
      newErrors.companyEmailId = "Please enter a  email address.";
      formValid = false;
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        mfCompanyDetail.companyEmailId
      )
    ) {
      newErrors.companyEmailId = "Please enter a valid email address.";
      formValid = false;
    }

    if (mfCompanyDetail.companyContactNo === "") {
      newErrors.companyContactNo = "Contact number is required.";
      formValid = false;
    }

    if (!/^[0-9]{10}$/.test(mfCompanyDetail.companyContactNo)) {
      newErrors.companyContactNo =
        "Please enter a valid 10-digit contact number.";
      formValid = false;
    }

    if (mfCompanyDetail.companyAddress === "") {
      newErrors.companyAddress = "Commpany address is required.";
      formValid = false;
    }

    if (!/^[/a-zA-Z\s,]+$/u.test(mfCompanyDetail.companyAddress)) {
      newErrors.companyAddress =
        "Company address should only contain letters and spaces.";
      formValid = false;
    }

    if (mfCompanyDetail.companyPinCode === "") {
      newErrors.companyPinCode = "Pin code is required.";
      formValid = false;
    }

    if (!/^[0-9]{6}$/.test(mfCompanyDetail.companyPinCode)) {
      newErrors.companyPinCode = "Please enter a valid 6-digit PIN code.";
      formValid = false;
    }
    if (mfCompanyDetail.companySate === "") {
      newErrors.companySate = "State is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(mfCompanyDetail.companySate)) {
      newErrors.companySate = "State should only contain letters and spaces.";
      formValid = false;
    }

    if (formValid) {
      console.log(mfCompanyDetail);
      try {
        request("POST", "/company/myprofilecompany/11", mfCompanyDetail).then(
          (response) => {
            console.log(
              "Mutual fund company details added successfully:",
              response.data
            );
          }
        );

        setMfCompanyDetail({
          companyName: "",
          companyEmailId: "",
          companyContactNo: "",
          companyAddress: "",
          companySate: "",
          companyPinCode: "",
        });

        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);

          // After the message disappears, refresh the page
          window.location.reload();
        }, 3000);
      } catch (error) {
        console.error("Error adding mf Company Details:", error);
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
            <h5 className="mb-5">Mutual Fund Company Details</h5>
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
                    Company Profile
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
                  <h2 className="mb-4">Add Company Profile</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Company Name</h6>
                        <input
                          type="text"
                          name="companyName"
                          onChange={onTextChange}
                          value={mfCompanyDetail.companyName}
                          placeholder="Company Name"
                          disabled={addData}
                          className={`form-control mb-2 ${
                            error.companyName && "is-invalid"
                          }`}
                        />
                        {error.companyName && (
                          <div className="invalid-feedback">
                            {error.companyName}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Company Email</h6>
                        <input
                          type="text"
                          name="companyEmailId"
                          onChange={onTextChange}
                          value={mfCompanyDetail.companyEmailId}
                          placeholder="Company Email"
                          disabled={addData}
                          className={`form-control mb-2 ${
                            error.companyEmailId && "is-invalid"
                          }`}
                        />
                        {error.companyEmailId && (
                          <div className="invalid-feedback">
                            {error.companyEmailId}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Company Contact Number</h6>
                        <input
                          type="text"
                          name="companyContactNo"
                          onChange={onTextChange}
                          disabled={addData}
                          value={mfCompanyDetail.companyContactNo}
                          placeholder="Company Contact Number"
                          className={`form-control mb-2 ${
                            error.companyContactNo && "is-invalid"
                          }`}
                        />
                        {error.companyContactNo && (
                          <div className="invalid-feedback">
                            {error.companyContactNo}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Company Address</h6>
                        <input
                          type="text"
                          name="companyAddress"
                          onChange={onTextChange}
                          disabled={addData}
                          value={mfCompanyDetail.companyAddress}
                          placeholder="Company Address"
                          className={`form-control mb-2 ${
                            error.companyAddress && "is-invalid"
                          }`}
                        />
                        {error.companyAddress && (
                          <div className="invalid-feedback">
                            {error.companyAddress}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h6>Pin Code</h6>
                        <input
                          type="text"
                          name="companyPinCode"
                          onChange={onTextChange}
                          disabled={addData}
                          value={mfCompanyDetail.companyPinCode}
                          placeholder="Pin Code"
                          className={`form-control mb-2 ${
                            error.companyPinCode && "is-invalid"
                          }`}
                        />
                        {error.companyPinCode && (
                          <div className="invalid-feedback">
                            {error.companyPinCode}
                          </div>
                        )}
                      </div>
                    </div>

                    <br></br>
                    <br></br>

                    <h6>State</h6>
                    <div className="col-md-6">
                      <select
                        name="companySate"
                        disabled={addData}
                        value={mfCompanyDetail.companySate}
                        className={`form-select mb-2 ${
                          error.companySate && "is-invalid"
                        }`}
                        onChange={onTextChange} // Add onChange handler
                        aria-h6="Default select example"
                      >
                        <option selected>Select State</option>

                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      {error.companySate && (
                        <div className="invalid-feedback">
                          {error.companySate}
                        </div>
                      )}
                    </div>
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

export default MfCompanyDetails;
