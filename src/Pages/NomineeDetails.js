import React from "react";
import dp from "../Assets/images/profile.jpg";
import "../CSS/profile.css";
import { pad } from "crypto-js";

function NomineeDetails() {
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
              class="nav-link active"
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
					<div class="tab-pane fade show active" id="nominee details profile" role="tabpanel" aria-h6ledby="nominee details-tab">
						<h2 class="mb-4">Nominee Details</h2>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
								  	<h6>First Name</h6>
								  	<input type="text" class="form-control"/>
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
							<h6 for="formFile" class="form-h6">Pancard</h6>
							<input class="form-control" type="file" id="formFile"/>
							</div>

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Pancard Number</h6>
								  	<input type="text" class="form-control" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Nominee's Relationship</h6>
								  	<input type="text" class="form-control" />
								</div>
							</div>
						</div>
						<div>
							<button class="btn btn-
                primary btns">Submit</button>
							<button class="btn btn-light" style={{marginLeft:"20px"}}>Cancel</button>
						</div>
					</div>

          </div>    
      
        
      </div>
    </div>  
</section>
    
  )
}

export default NomineeDetails




