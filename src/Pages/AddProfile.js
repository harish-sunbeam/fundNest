import React from "react";
import dp from "../Assets/images/profile.jpg";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../CSS/profile.css";
import axios from "axios";
import storage from "./FireBase";

import { pad } from "crypto-js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AddProfile() {
  const custId = window.localStorage.getItem("custID");
  const email = window.localStorage.getItem("emailId");
  const mobileno = window.localStorage.getItem("mobileNo");

  // To upload the profile photo
  const [image, setImage] = useState("");
  const [Url, setUrl] = useState("");
  const upload = () => {
    const randomnumber=Math.floor(Math.random()  * (200 - 1 + 1)) + 1;
    if (image == null) return;
    storage.ref(`/images/${randomnumber}${image.name}`).put(image)
      .on("state_changed", alert("success"), alert, () => {
        // Getting Download Link
        storage.ref("images").child(`${randomnumber}${image.name}`).getDownloadURL()
          .then((url) => {
            setUrl(url);
            onSubmit(url);

          });
      });
  };
  // end of the photo uploading

  const handleSubmit = () => {
    let formValid = true;
    const newErrors = {};

    if (addProfile.firstName === "") {
      newErrors.firstName = "First Name is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(addProfile.firstName)) {
      newErrors.firstName =
        "First Name should only contain letters and spaces.";
      formValid = false;
    }

    if (addProfile.lastName === "") {
      newErrors.lastName = "Last Name is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(addProfile.lastName)) {
      newErrors.lastName = "Last Name should only contain letters and spaces.";
      formValid = false;
    }

    if (addProfile.occupation === "") {
      newErrors.occupation = "Occupation is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(addProfile.occupation)) {
      newErrors.occupation =
        "Occupation should only contain letters and spaces.";
      formValid = false;
    }

    if (addProfile.address === "") {
      newErrors.address = "Address is required.";
      formValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(addProfile.address)) {
      newErrors.address = "Address should only contain letters and spaces.";
      formValid = false;
    }

    if (addProfile.pancardNumber === "") {
      newErrors.address = "Pan card Number is required.";
      formValid = false;
    }

    if (addProfile.state === "") {
      newErrors.address = "State is required.";
      formValid = false;
    }

    if (addProfile.pincode === "") {
      newErrors.address = "Pincode is required.";
      formValid = false;
    }

    if (addProfile.dateOfBirth === "") {
      newErrors.address = "Date of Birth is required.";
      formValid = false;
    }
  };

  const history = useHistory();

  const [addProfile, setAddProfile] = useState({

    custFirstName: "",
    custLastName: "",
    emailId: "",
    mobileNo: "",
    custPanNo: "",
    custOccupation: "",
    custDOB: "",
    custAddress: "",
    custPinCode: "",
    custGender: "",
    custMaritalStatus: "",
    custState: "",
    urlOfImage: "",
  });

  const [radioo, setRadioo] = useState({
    custMaritalStatus: "",
    custGender: ""
  });

  const {

    custFirstName,
    custLastName,
    emailId,
    mobileNo,
    custPanNo,
    custOccupation,
    custDOB,
    custAddress,
    custPinCode,
    custState,
  } = addProfile;
  const { custMaritalStatus,custGender } = radioo;


  const onInputChange = (e) => {
    setAddProfile({ ...addProfile, [e.target.name]: e.target.value });
  };

  const onRadioChange = (e) => {
    setRadioo({ ...radioo, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    const custId = window.localStorage.getItem("custID");
    axios
      .get(`http://localhost:8080/customer/${custId}`)
      .then((response) => {
        console.log(response.data);
        setAddProfile(response.data);
        setRadioo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (e) => {
    debugger;
    const myAddProflie = {
      custId: custId,
      custFirstName: addProfile.custFirstName,
      custLastName: addProfile.custLastName,
      email: addProfile.emailId,
      phoneNumber: addProfile.mobileNo,
      custPanNo: addProfile.custPanNo,
      custOccupation: addProfile.custOccupation,
      custDOB: addProfile.custDOB,
      custAddress: addProfile.custAddress,
      custPinCode: addProfile.custPinCode,
      custMaritalStatus: radioo.custMaritalStatus,
      custGender: radioo.custGender,
      custState: addProfile.custState,
      urlOfImage : e
    };
    debugger;
    axios
      .post(`http://localhost:8080/customer/addprofile/${custId}`, myAddProflie)
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {});
  };

  return (
    <section className="py-5 my-5">
      <div className="container">
        {/* image div */}
        <h1 className="mb-5">Account Settings</h1>
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
                aria-controls="add profile"
                aria-selected="true"
              >
                <i className="fa fa-home text-center mr-1"></i>
                Add Profile
              </Link>

              <a
                className="nav-link"
                id="update profile-tab"
                data-toggle="pill"
                href="/updateprofile"
                role="tab"
                aria-controls="update profile"
                aria-selected="false"
              >
                <i className="fa fa-home text-center mr-1"></i>
                Update Profile
              </a>

              <a
                className="nav-link"
                id="update password-tab"
                data-toggle="pill"
                href="/UpdatePassword"
                role="tab"
                aria-controls="update password"
                aria-selected="false"
              >
                <i className="fa fa-key text-center mr-1"></i>
                Update Password
              </a>

              <a
                className="nav-link"
                id="kyc details-tab"
                data-toggle="pill"
                href="/KycDetails"
                role="tab"
                aria-controls="kyc details"
                aria-selected="false"
              >
                <i className="fa fa-tv text-center mr-1"></i>
                KYC Details
              </a>

              <a
                className="nav-link"
                id="nominee details-tab"
                data-toggle="pill"
                href="/NomineeDetails"
                role="tab"
                aria-controls="nominee details"
                aria-selected="false"
              >
                <i className="fa fa-bell text-center mr-1"></i>
                Nominee Details
              </a>
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
              <h2 className="mb-4">Add Profile</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>First Name</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name(Max. 50 char)"
                      maxLength={50}
                      required
                      name="custFirstName"
                      value={addProfile.custFirstName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Last Name</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name "
                      maxLength={50}
                      name="custLastName"
                      value={addProfile.custLastName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Email</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email "
                      name="emailId"
                      value={addProfile.emailId}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Phone number</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number "
                      name="mobileNo"
                      value={addProfile.mobileNo}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Pancard Number</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pancard Number "
                      maxLength={10}
                      name="custPanNo"
                      value={addProfile.custPanNo}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Occupation</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Occupation"
                      maxLength={50}
                      name="custOccupation"
                      value={addProfile.custOccupation}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Date Of Birth </h6>
                    <input
                      type="date"
                      className="form-control"
                      name="custDOB"
                      value={addProfile.custDOB}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <h6>Address</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      maxLength={255}
                      name="custAddress"
                      value={addProfile.custAddress}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>

                {/* inline radio buttons */}
                <div className="col-md-2">
                  <h6>Gender</h6>
                </div>

                <div className="col-md-2">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineRadio1"
                      name="custGender"
                      value="Male"
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
                      id="inlineRadio2"
                      value="Female"
                      name="custGender"

                      onChange={(e) => onRadioChange(e)}
                    />
                    <h6 className="form-check-h6" for="inlineRadio2">
                      Female
                    </h6>
                  </div>
                </div>

                {/* inline radio buttons */}
                <div className="col-md-2">
                  <h6>Marital Status</h6>
                </div>
                <div className="col-md-2">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineRadio1"
                      value="Married"
                      name="custMaritalStatus"
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
                      name="custMaritalStatus"
                      id="inlineRadio2"
                      value="Unmarried"
                      onChange={(e) => onRadioChange(e)}
                    />
                    <h6 className="form-check-h6" for="inlineRadio2">
                      Unmarried
                    </h6>
                  </div>
                </div>

                <br></br>
                <br></br>

                {/* state select dropdown */}
                <h6>State</h6>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    aria-h6="Default select example"
                    name="custState"
                    maxLength={30}
                    value={addProfile.custState}
                    onChange={(e) => onInputChange(e)}
                  >
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

                <div className="col-md-6">
                  <div className="form-group">
                    {/* <h6>Pin Code</h6> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pincode"
                      name="custPinCode"
                      value={addProfile.custPinCode}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <h6 for="formFile" className="form-h6">
                    Pan Card
                  </h6>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    // name1="pancardDocument"
                    // value1={pancardDocument}
                    // onChange={(e) => onInputChange(e)}
                  />
                </div>

                <div className="col-md-6">
                  <h6 for="formFile" className="form-h6">
                    Profile Photo
                  </h6>
                  <input type="file" class="form-control" id="exampleInputAmount" placeholder="Image Location"  onChange={(e) => { setImage(e.target.files[0]) }} />
                </div>
              </div>

              <br></br>

              <div>
                <button
                  className="btn btn-
                primary btns"
                  onClick={upload}
                >
                  Save
                </button>
                <button
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
  );
}

export default AddProfile;
