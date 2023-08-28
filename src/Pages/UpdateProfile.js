
import dp from "../Assets/images/profile.jpg";
import "../CSS/profile.css";
// import { pad } from "crypto-js";
import React, { useEffect, useState } from "react";
import axios from "axios";


function UpdateProfile() {

  const custId = window.localStorage.getItem('custID');
  const email = window.localStorage.getItem('emailId');
  const mobileno = window.localStorage.getItem('mobileNo');;
  

  const [profile, setProfile] = useState({
  custFirstName: "",
  custLastName: "",
  custMaritalStatus: "",
  custOccupation: "",
  custAddress: "",
  custState: "",
  custPinCode: "",
  });

  // const [radioo , setRadioo] = useState({
  //   maritalStatus   : "",
  //   gender          : ""
  // });

  // const onRadioChange = (e) => {
  //   setRadioo({ ...radioo, [e.target.name]: e.target.value });
  // };

  const { custFirstName, custLastName, custMaritalStatus,
           custOccupation, custAddress, custState, custPinCode} = profile;

  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
debugger
    const updateProfile = {
    custFirstName: profile.custFirstName,
    custLastName: profile.custLastName,
    custMaritalStatus: profile.custMaritalStatus,
    custOccupation: profile.custOccupation,
    custAddress: profile.custAddress,
    custState: profile.custState,
    custPinCode: profile.custPinCode
    }

    e.preventDefault();
    await axios.put(`http://localhost:8080/customer/updateprofile`, updateProfile);
  };


  const loadUser = async () => {
    debugger
    try {
      const response = await axios.get(`http://localhost:8080/customer/${custId}`);
      
      if (response.status === 200 || response.status === 201 ) {
        setProfile(response.data);
      } else {
        setProfile(
          {
            custFirstName: "",
            custLastName: "",
            custMaritalStatus: "",
            custOccupation: "",
            custAddress: "",
            custState: "",
            custPinCode: "",
          }
          );
      }
    } catch (error) {
      
      setProfile(
        {
          custFirstName: "",
          custLastName: "",
          custMaritalStatus: "",
          custOccupation: "",
          custAddress: "",
          custState: "",
          custPinCode: "",
        }
        );
    }
  };


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
              class="nav-link active"
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
              class="nav-link"
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
    <h2 class="mb-4">Update Profile</h2>
   
    {/* from here I have commented */}
    {/* <div className="row"> */}

     
            {/* <div className="col-md-6"> */}
              {/* <div className="form-group">
                <h6>First Name</h6>
                <input type="text" className="form-control"  placeholder="First Name"
                name="custFirstName" */}
                {/* // value={profile.firstName}
                value={custFirstName}
                onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h6>Last Name</h6>
                <input type="text" className="form-control" placeholder="Last Name "
                name="custLastName" */}
                {/* // value={profile.lastName}
                value={custLastName}
                onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h6>Email</h6>
                <input type="text" className="form-control" placeholder="Email "
                name="email" */}
                {/* // value={profile.email}
                value={email}
                onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h6>Phone number</h6>
                <input  type="text" className="form-control"  placeholder="Phone number " 
                name="phoneNumber" */}
                {/* // value={profile.phoneNumber}
                value={mobileno}
                onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h6>Pancard Number</h6>
                <input  type="text" className="form-control" placeholder="Pancard Number "
                name="pancardNumber"
                value={profile.pancardNumber}
                onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h6>Occupation</h6>
                <input type="text" className="form-control" placeholder="Occupation" 
                name="occupation" */}
                {/* // value={profile.occupation}
                value={custOccupation}
                onChange={(e) => onInputChange(e)}/>
              </div>
            </div>

              <div className="col-md-6">
              <div className="form-group">
                <h6>Date Of Birth </h6>
                <input type="date" className="form-control" 
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={(e) => onInputChange(e)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h6>Address</h6>
                <input type="text" className="form-control" placeholder="Address"
                name="address" */}
                {/* // value={profile.address}
                value={custAddress}
                onChange={(e) => onInputChange(e)} />
              </div>
            </div> */}

            {/* inline radio buttons */}
            {/* <div className="col-md-2">
              <h6>Gender</h6>
            </div>

            <div className="col-md-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineRadio1"         
                  name="gender"
                  value="male"
                  onChange={(e) => onRadioChange(e)}   
                />
                <h6 className="form-check-h6" for="inlineRadio1">
                  Male
                </h6>
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="female"
                  
                />
                <h6 className="form-check-h6" for="inlineRadio2">
                  Female
                </h6>
              </div>
            </div> */}

            {/* inline radio buttons */}
            {/* <div className="col-md-2">
              <h6>Marital Status</h6>
            </div>
            <div className="col-md-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineRadio1"
                  value="married"
                  name="maritalStatus"
                  onChange={(e) => onRadioChange(e)}
                />
                <h6 className="form-check-h6" for="inlineRadio1">
                  Married
                </h6>
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="maritalStatus"
                  id="inlineRadio2"
                  value="unmarried"
                />
                <h6 className="form-check-h6" for="inlineRadio2">
                  Unmarried
                </h6>
              </div>
            </div>

            <br></br>
            <br></br> */}

            {/* state select dropdown */}
            {/* <h6>State</h6>
            <div className="col-md-6">
              <select className="form-select" aria-h6="Default select example" name="state" */}
                {/* // value={profile.state}
                // value={custState}
                onChange={(e) => onInputChange(e)}>
                <option selected placeholder="Select City"></option>
                <option value="1">Andhra Pradesh</option>
                <option value="2">Arunachal Pradesh</option>
                <option value="3">Assam</option>
                <option value="4">Bihar</option>
                <option value="5">Chhattisgrah</option>
                <option value="6">Goa</option>
                <option value="7">Gujarat</option>
                <option value="8">Haryana</option>
                <option value="9">Himachal Pradesh</option>
                <option value="10">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="12">Kerala</option>
                <option value="13">Madhya Pradesh</option>
                <option value="14">Maharashtra</option>
                <option value="15">Manipur</option>
                <option value="16">Meghalaya</option>
                <option value="17">Mizoram</option>
                <option value="18">Nagaland</option>
                <option value="19">Odisha</option>
                <option value="20">Punjab</option>
                <option value="21">Kerala</option>
                <option value="22">Rajasthan</option>
                <option value="23">Sikkim</option>
                <option value="24">Tamil Nadu</option>
                <option value="25">Telangana</option>
                <option value="26">Tripura</option>
                <option value="27">Uttar Pradesh</option>
                <option value="28">Uttarakhand</option>
                <option value="29">West Bengal</option>
              </select>
            </div>

             <div className="col-md-6">
            <div className="form-group">
                <h6>Pin Code</h6>
                <input type="text" className="form-control" placeholder="Pincode" 
                name="pincode"
                value={custPinCode}
                onChange={(e) => onInputChange(e)}/>
            </div>
            </div>
                   
            <div className="col-md-6">
                        <h6 for="formFile" className="form-h6">Pan Card</h6>
                        <input className="form-control" type="file" id="formFile" */}
                        {/* // name1="pancardDocument"
                       // value1={pancardDocument}
                        // onChange={(e) => onInputChange(e)}
                        />
                       
                        </div>
            </div>

            <br></br>

            <div>
            <button className="btn btn-
                primary btns" onClick={onSubmit} >Save</button>
            <button className="btn btn-light" style={{ marginLeft: "20px" }} >
              Cancel
            </button>
          </div>
        </div> */}
        {/* end of the right side div */}
        {/* end of page */}
                {/* </div>
            
              
            </div>
          </div>  
    </section>
  );
} */}




    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <h6>First Name</h6>
                {/* <input type="text" class="form-control" /> */}
                <input type="text" className="form-control"  placeholder="First Name"
                name="custFirstName"
                // value={profile.firstName}
                value={custFirstName}
                onChange={(e) => onInputChange(e)}/>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Last Name</h6>
                {/* <input type="text" class="form-control" /> */}
                <input type="text" className="form-control" placeholder="Last Name "
                name="custLastName" 
                // value={profile.lastName}
                value={custLastName}
                onChange={(e) => onInputChange(e)}/>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Email</h6>
                {/* <input type="text" class="form-control" /> */}
                <input type="text" className="form-control" placeholder="Email "
                name="email"
                // value={profile.email}
                value={email}
                onChange={(e) => onInputChange(e)}/>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Phone number</h6>
                {/* <input type="text" class="form-control" /> */}
                <input  type="text" className="form-control"  placeholder="Phone number " 
                name="phoneNumber"
                // value={profile.phoneNumber}
                value={mobileno}
                onChange={(e) => onInputChange(e)}/>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                {/* <h6>Annual Income </h6> */}
                <h6>Occupation </h6>
                {/* <input type="text" class="form-control" /> */}
                <input type="text" className="form-control" placeholder="Occupation" 
                name="occupation"
                // value={profile.occupation}
                value={custOccupation}
                onChange={(e) => onInputChange(e)}/>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Address</h6>
                {/* <input type="text" class="form-control" /> */}
                <input type="text" className="form-control" placeholder="Address"
                name="address"
                // value={profile.address}
                value={custAddress}
                onChange={(e) => onInputChange(e)} />
            </div>
        </div>
    
    {/* inline radio buttons */}
    <div class="col-md-2">
        <h6>Marital Status</h6>
    </div>
        <div class="col-md-2">
            <div class="form-check form-check-inline">
            {/* <input class="form-check-input" type="radio" name="1" id="inlineRadio1" value="Married"/> */}
            <input
                  className="form-check-input"
                  type="radio"
                  id="inlineRadio1"
                  value="Married"
                  // name="maritalStatus"
                  name="custMaritalStatus"
                  // onChange={(e) => onRadioChange(e)}
                  checked={custMaritalStatus === "Married"} //new change
                  onChange={(e)=> onInputChange(e)}
            />
            <h6 class="form-check-h6" for="inlineRadio1">Married</h6>
            </div>
        </div>

        <div class="col-md-2">
            <div class="form-check form-check-inline">
            {/* <input class="form-check-input" type="radio" name="1" id="inlineRadio2" value="UnMarried"/> */}
            <input
                  className="form-check-input"
                  type="radio"
                  // name="maritalStatus"
                  name="custMaritalStatus"
                  id="inlineRadio2"
                  value="Unmarried"
                  checked={custMaritalStatus === "Unmarried"} //new change
                  onChange={(e)=> onInputChange(e)} //new change
                />
            <h6 class="form-check-h6" for="inlineRadio2">Unmarried</h6>
            </div>	
        </div> 

    <br></br>
    <br></br>
    
    
    {/* state select dropdown */}
    <h6>State</h6>
    <div class="col-md-6"> 
        {/* <select class="form-select" aria-h6="Default select example" > */}
        <select className="form-select" aria-h6="Default select example" name="custState"
         value={custState}
         onChange={(e) => onInputChange(e)}>
        <option selected>Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgrah">Chhattisgrah</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="9Himachal Pradesh">Himachal Pradesh</option>
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
                <option value="Kerala">Kerala</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
        </select>
    </div>								 

    <br></br>
    <br></br>
    <br></br>

    
    <div class="col-md-6">
        <div class="form-group">
            <h6>Pin Code</h6>
            {/* <input type="text" class="form-control" /> */}
            <input type="text" className="form-control" placeholder="Pincode" 
                name="custPinCode"
                value={custPinCode}
                onChange={(e) => onInputChange(e)}/>
        </div>
    </div> 
    
    </div>
    
    <div>
        <button class="btn btn-
                primary btns" onClick={onSubmit}>Update</button>
        <button class="btn btn-light" style={{marginLeft:"20px"}}>Cancel</button>
    </div>
</div>

          </div>

      </div>
    </div>  
</section> 
    
  )
}

export default UpdateProfile