import dp from "../Assets/images/profile.jpg";
import "../CSS/profile.css";
// import { pad } from "crypto-js";
import React, { useEffect, useState } from "react";
import axios from "axios";

function KycDetails() {

  const custId = window.localStorage.getItem('custID');
  

  const [kyc, setKyc] = useState({
    bankName: "",
    accNo: "",
    ifscCode: "",
    annualIncome: "",
  });

  const { bankName, accNo, ifscCode, annualIncome } = kyc;

  const onInputChange = (e) => {
    setKyc({ ...kyc, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
debugger
    const kycDetail = {
      bankName: kyc.bankName,
      accNo: kyc.accNo,
      ifscCode: kyc.ifscCode,
      annualIncome: kyc.annualIncome
    }

    e.preventDefault();
    await axios.post(`http://localhost:8080/customer/addkyc/${custId}`, kycDetail);
  };


  const loadUser = async () => {
    debugger
    try {
      const response = await axios.get(`http://localhost:8080/customer/kyc/${custId}`);
      
      if (response.status === 200 || response.status === 201 ) {
        setKyc(response.data);
      } else {
        setKyc(
          {
            bankName: "",
            accNo: "",
            ifscCode: "",
            annualIncome: ""
          }
          );
      }
    } catch (error) {
      
      setKyc(
        {
          bankName: "",
          accNo: "",
          ifscCode: "",
          annualIncome: ""
        }
        );
    }
  };
  

//{ below is backup code in above code I am going to make changes using response.status=500}
  // const loadUser = async () => {
  //   const result = await axios.get(`http://localhost:8080/customer/kyc/${custId}`);
  //   debugger
  //   setKyc(result.data);
  // };

  return (
    <section class="py-5 my-5">
    <div class="container">
      {/* image div */}
      <h1 class="mb-5">Account Settings</h1>
      <div class="bg-white shadow rounded-lg d-block d-sm-flex">
        <div class="profile-tab-nav border-right">
          <div class="p-4">
            <div class="img-circle text-center mb-3">
              <img src={dp} alt="Image" class="shadow" />
            </div>
            {/* Profile pic div end */}
            <h4 class="text-center">Profile Name</h4>
          </div>
       
          {/* left side div start */}
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a 
              class="nav-link"
              id="add profile-tab"
              data-toggle="pill"
              href="/addprofile"
              role="tab"
              aria-controls="add profile"
              aria-selected="true"
            >
              <i class="fa fa-home text-center mr-1"></i>
              Add Profile
            </a>

            <a
              class="nav-link"
              id="update profile-tab"
              data-toggle="pill"
              href="/updateprofile"
              role="tab"
              aria-controls="update profile"
              aria-selected="false"
            >
              <i class="fa fa-home text-center mr-1"></i>
              Update Profile
            </a>

            <a
              class="nav-link"
              id="update password-tab"
              data-toggle="pill"
              href="/UpdatePassword"
              role="tab"
              aria-controls="update password"
              aria-selected="false"
            >
              <i class="fa fa-key text-center mr-1"></i>
              Update Password
            </a>

            <a
              class="nav-link active"
              id="kyc details-tab"
              data-toggle="pill"
              href="/KycDetails"
              role="tab"
              aria-controls="kyc details"
              aria-selected="false"
            >
              <i class="fa fa-tv text-center mr-1"></i>
              KYC Details
            </a>

            <a
              class="nav-link"
              id="nominee details-tab"
              data-toggle="pill"
              href="/NomineeDetails"
              role="tab"
              aria-controls="nominee details"
              aria-selected="false"
            >
              <i class="fa fa-bell text-center mr-1"></i>
              Nominee Details
            </a>
          </div>
      </div>
          {/* Right Side div */}
          
          <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="update profile" role="tabpanel" aria-h6ledby="update profile-tab">
                    <h2 class="mb-4">KYC Details</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                  <h6>Bank Name </h6>
                                  {/* <input type="text" class="form-control" /> */}
                                  <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your Bank name"
                                    name="bankName"
                                    value={bankName}
                                    onChange={(e) => onInputChange(e)}
                                    readOnly={bankName !== ''}
                                  />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                  <h6>Account Number</h6>
                                  {/* <input type="text" class="form-control" /> */}
                                  <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your Bank Account No."
                                    name="accNo"
                                    value={accNo}
                                    onChange={(e) => onInputChange(e)}
                                    readOnly={accNo !== ''}
                                  />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                  <h6>IFSC Code</h6>
                                  {/* <input type="text" class="form-control" /> */}
                                  <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter IFSC code"
                                    name="ifscCode"
                                    value={ifscCode}
                                    onChange={(e) => onInputChange(e)}
                                    readOnly={ifscCode !== ''}
                                  />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                  <h6>Annual Income </h6>
                                  {/* <input type="text" class="form-control" /> */}
                                  <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your Annual Income"
                                    name="annualIncome"
                                    value={annualIncome}
                                    onChange={(e) => onInputChange(e)}
                                    readOnly={annualIncome !== ''}
                                  />
                            </div>
                        </div>

                        <div class="col-md-6">
                        <h6 for="formFile" class="form-h6">Bank Statement</h6>
                        <input class="form-control" type="file" id="formFile"/>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div class="col-md-6">
                        <h6 for="formFile" class="form-h6">Cancelled Cheque</h6>
                        <input class="form-control" type="file" id="formFile"/>
                        </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div>
                        <button class="btn btn-
                primary btns" onClick={onSubmit}>Update & Save</button>
                        {/* <button class="btn btn-light" style={{marginLeft:"20px"}}>Cancel</button> */}
                    </div>
                </div>
                {/* end of the right side div */}
                    {/* end of KYC details page */}
            </div>

          </div>
        
      </div>
    </div>  
</section>
 
  )
}

export default KycDetails