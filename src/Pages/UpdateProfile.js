import React from "react";
import dp from "../Assets/images/profile.jpg";
import "../CSS/profile.css";
import { pad } from "crypto-js";

function UpdateProfile() {
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
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <h6>First Name</h6>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Last Name</h6>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Email</h6>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Phone number</h6>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Annual Income </h6>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <h6>Address</h6>
                <input type="text" class="form-control" />
            </div>
        </div>
    
    {/* inline radio buttons */}
    <div class="col-md-2">
        <h6>Marital Status</h6>
    </div>
        <div class="col-md-2">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="1" id="inlineRadio1" value="option1"/>
            <h6 class="form-check-h6" for="inlineRadio1">Married</h6>
            </div>
        </div>

        <div class="col-md-2">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="1" id="inlineRadio2" value="option2"/>
            <h6 class="form-check-h6" for="inlineRadio2">Unmarried</h6>
            </div>	
        </div> 

    <br></br>
    <br></br>
    
    
    {/* state select dropdown */}
    <div class="col-md-6"> 
        <select class="form-select" aria-h6="Default select example" >
            <option selected>Open this select menu</option>
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
                <option value="11">Karnataka</option>
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

    <br></br>
    <br></br>
    <br></br>

    
    <div class="col-md-6">
        <div class="form-group">
            <h6>Pin Code</h6>
            <input type="text" class="form-control" />
        </div>
    </div> 
    
    </div>
    
    <div>
        <button class="btn btn-
                primary btns">Update</button>
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