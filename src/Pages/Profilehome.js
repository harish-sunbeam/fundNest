import React from 'react'
import dp from "../Assets/images/profile.jpg";
import  '../CSS/profile.css'
import { pad } from 'crypto-js'
import AddProfile from './AddProfile'
import UpdateProfile from './UpdateProfile'
import UpdatePassword from './UpdatePassword'
import KycDetails from './KycDetails'
import NomineeDetails from './NomineeDetails'
import {Switch,Route} from 'react-router-dom';


function ProfileHome() {
  return (
	// Main div
	<div>
		<section class="py-5 my-5">
		<div class="container">
			{/* image div */}
			<h1 class="mb-5">Account Settings</h1>
			<div class="bg-white shadow rounded-lg d-block d-sm-flex">
				<div class="profile-tab-nav border-right">
					<div class="p-4">
					
						<div class="img-circle text-center mb-3">
							<img src={dp} alt="Image" class="shadow"/>
						</div>
						{/* Profile pic div end */}
						<h4 class="text-center">Profile Name</h4>
					</div>
					
		

					{/* left side div start */}
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="add profile-tab" data-toggle="pill" href="/addprofile" role="tab" aria-controls="add profile" aria-selected="true">
							<i class="fa fa-home text-center mr-1"></i> 
							Add Profile
						</a>

						<a class="nav-link" id="update profile-tab" data-toggle="pill" href="/updateprofile" role="tab" aria-controls="update profile" aria-selected="false">
							<i class="fa fa-home text-center mr-1"></i> 
							Update Profile
						</a>
						
						<a class="nav-link" id="update password-tab" data-toggle="pill" href="/UpdatePassword" role="tab" aria-controls="update password" aria-selected="false">
							<i class="fa fa-key text-center mr-1"></i> 
							Update Password
						</a>
						
						<a class="nav-link" id="kyc details-tab" data-toggle="pill" href="/KycDetails" role="tab" aria-controls="kyc details" aria-selected="false">
							<i class="fa fa-tv text-center mr-1"></i> 
							KYC Details
						</a>

						<a class="nav-link" id="nominee details-tab" data-toggle="pill" href="/NomineeDetails" role="tab" aria-controls="nominee details" aria-selected="false">
							<i class="fa fa-bell text-center mr-1"></i> 
							Nominee Details
						</a>
					</div>
					
				</div>
				{/* End of the left side div */}
			
			</div>
		</div>

		  
		<Switch>

            <Route exact path='/addprofile' component={AddProfile}/>
			<Route exact path='/updateprofile' component={UpdateProfile}/>
			<Route exact path='/updatepassword' component={UpdatePassword}/>
            <Route exact path='/kycdetails' component={KycDetails}/>  
			<Route exact path='/nomineedetails' component={NomineeDetails}/>  
			      

        </Switch>

		</section>
	</div>

  )
}

export default ProfileHome

	
	

	

