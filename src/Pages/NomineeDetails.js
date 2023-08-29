import React from "react";
import dp from "../Assets/images/profile.jpg";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../CSS/profile.css";
import axios from 'axios';

import { pad } from "crypto-js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NomineeDetails() {

  const custId = window.localStorage.getItem('custID');
  const history = useHistory();

 

  const [selectedDate, setSelectedDate] = useState('');
  const onDateChange = (e) => {
    setSelectedDate(e.target.value);
};

    
  

  //const [selectedDate, setSelectedDate] = useState('');
  //const onDateChange = (e) => {
    //setSelectedDate(e.target.value);
//};

const BirthDate = () => {
      
  const today = selectedDate;
  return today;
};
  const [nominee, setNominee] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNo: "",
    PanCardNo: "",
    Relation: "",
    Address: "",
    State:  "",
    PinCode: "",
    DateofBirth: "",
  });

    


  const { FirstName , LastName,  Email, MobileNo,  PanCardNo,  Relation,   Address,  State, PinCode, DateofBirth} = nominee;

  const onInputChange = (e) => {
    setNominee({ ...nominee, [e.target.name]: e.target.value });
    debugger
  };
 
 
  useEffect(()=>{ 
     debugger
    const custId = window.localStorage.getItem('custID');
    axios.get(`http://localhost:8080/customer/nom/${custId}`).then(response=>
  {
      console.log(response.data)
      setNominee({
         FirstName : response.data.nomFirstName,
         LastName: response.data.nomLastName,
         Email:response.data.nomEmailId,  
         MobileNo:response.data.nomMobileNo,
         PanCardNo:response.data.nomPanNo,
         Relation:response.data.nomRelation,
         Address:response.data.nomAddress,
         State:response.data.nomState,
         PinCode:response.data.nomPinCode,
         DateofBirth:response.data.nomDOB
       
      });

     
      
    }).catch(error=>console.log(error))
  
  },[]);

  const onSubmit =async (e) => {

    debugger
    const myAddNominee = {
      custId              : custId,
      nomFirstName        : nominee.FirstName,
      nomLastName         : nominee.LastName,
      nomEmailId          : nominee.Email,
      nomMobileNo         : nominee.MobileNo,
      nomPanNo            : nominee.PanCardNo,
      nomRelation         : nominee.Relation,
      nomAddress          :nominee.Address,
      nomState            :nominee.State,
      nomPinCode          :nominee.PinCode,
     nomDOB              :selectedDate
     // nomDOB              :nominee.selectedDate

      
    }

    debugger
  axios.post(`http://localhost:8080/customer/addnominee/${custId}`,myAddNominee )
  .then((response)=>{
    console.log(response.data)
  
  } ).catch(()=>{})
  };

  //http://localhost:8080/customer/addnominee/{custId}?custId
  //http://localhost:8080/customer/addnominee/{custId}?custId=1

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
								  	<input
                     type="text" 
                     className="form-control"
                     placeholder="Enter your Bank name"
                     value={nominee.FirstName}
                     name="FirstName"
                     onChange={(e) => onInputChange(e)}
                     />

								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Last Name</h6>
								  	<input
                     type="text" 
                     className="form-control"
                     placeholder="Enter Your last name"
                     value={nominee.LastName}
                     name="LastName"
                     onChange={(e) => onInputChange(e)}
                     />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Email</h6>
								  	<input
                     type="text" 
                    className="form-control"
                    placeholder="Enter your valid Email"
                    value={nominee.Email}
                    name="Email"
                    onChange={(e) => onInputChange(e)}
                    />
								</div>
							</div>



							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Mobile No</h6>
								  	<input
                     type="text"
                     className="form-control"
                     placeholder="Enter Your Mobile No."
                     value={nominee.MobileNo}
                     name="MobileNo"
                     onChange={(e) => onInputChange(e)}
                      />
								</div>
							</div>


                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Pancard Number</h6>
								  	<input
                     type="text" 
                     className="form-control"
                     placeholder="Enter your pancard no."
                     value={nominee.PanCardNo}
                     name="PanCardNo"
                     onChange={(e) => onInputChange(e)}
                      />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
								  	<h6>Nominee's Relationship</h6>
								  	<input
                     type="text" 
                     className="form-control"
                     placeholder="Enter relationship with nominee"
                     value={nominee.Relation}
                     name="Relation"
                     onChange={(e) => onInputChange(e)}
                      />
								</div>
							</div>

              <div class="col-md-6">
								<div class="form-group">
								  	<h6>Address</h6>
								  	<input
                     type="text"
                     className="form-control"
                     placeholder="Enter your address"
                     value={nominee.Address}
                     name="Address"
                     onChange={(e) => onInputChange(e)} />
								</div>
							</div>


              <div class="col-md-6">
								<div class="form-group">
								  	<h6>State</h6>
								  	<input
                     type="text" 
                     className="form-control"
                     placeholder="Enter your state"
                     value={nominee.State}
                     name="State"
                     onChange={(e) => onInputChange(e)}
                     
                      />
								</div>
							</div>


              <div class="col-md-6">
								<div class="form-group">
								  	<h6>Pincode</h6>
								  	<input
                     type="text" 
                     className="form-control"
                     placeholder="Enter your pincode"
                     value={nominee.PinCode}
                     name="PinCode"
                     onChange={(e) => onInputChange(e)}
                      />
								</div>
							</div>

              <div class="col-md-6">
								<div class="form-group">
								  	<h6>Date Of Birth</h6>
								  	<input  
                     type="date"
                     className="form-control"
                     onChange={(e) => setSelectedDate(e.target.value)} 
                     name="DateOfBirth"
                     //onChange={(e) => onInputChange(e)}
                   
                     />
								</div>  
							</div>


						</div>
						<div>
            <button className="btn btn-
                primary btns" onClick={onSubmit} >Save</button>
            <button className="btn btn-light" style={{ marginLeft: "20px" }} >
              Cancel
            </button>
						</div>
					</div>

          </div>    
      
        
      </div>
    </div>  
</section>
    
  )
}

export default NomineeDetails
