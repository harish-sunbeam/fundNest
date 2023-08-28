import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import { response } from 'express';
//this above import is automatically coming here and generating node modules error of zlib


// url = "http://localhost:8080/user/registerasuser";
 

function SignUp() {

    const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [password, setPassword] = useState('');
   
  
//     const handleSignUp = (e) => {
//       e.preventDefault();
//       // Handle sign up logic here
//       history.push('/otp');
//     };
  
// let navigate = useNavigate();

  const [signup, setSignup] = useState({
    emailId: "",
    password: "",
    mobileno: "",
  });
    
  const { emailId, password, mobileno } = signup;

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  // const onSubmit = async (e) => {
  //   //e.preventDefault();
  //   await axios.post("http://localhost:8080/user/registerasuser", signup);
  //   // navigate("/otp");

  //   history.push('/otp');
  // };

  const onSubmit = (e) => {
    const mySignup = {
      emailId : signup.emailId,
      password : signup.password,
      mobileNo : signup.mobileno
    }
    axios
    .post("http://localhost:8080/user/registerasuser", mySignup)
    .then((response)=>{
      console.log(response.data)
      window.localStorage.setItem("mobileNo", response.data.mobileNo);

      //for confirmation if mobileno is stored in localstorage or not
      console.log(window.localStorage.getItem("mobileNo"));
      history.push('/otp');
    })
    
  };

  // const onSubmit =(e) => {
  //   const myLogin = {
  //     email: login.emailId,
  //     password: login.password
  //   }
  //   debugger
  //  axios
  //  .post("http://localhost:8080/user/login", myLogin)
  //  .then((response)=>{
  //   console.log(response.data)
  //   window.localStorage.setItem("custID", response.data.custId);
  //   window.localStorage.setItem("emailId", response.data.emailId);
  //   window.localStorage.setItem("password", response.data.password);
  //   history.push('/profilehome');
  //  }
   
  //  )
  //  .catch(()=>{}) 
  // };
  
     
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Sign Up</h3>
              </div>
              <div className="card-body">
                {/* <form onSubmit={handleSignUp}> */}
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    {/* <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> */}
                    <input
                      type={"email"}
                      className="form-control"
                      placeholder="Enter your name"
                      name="emailId"
                      value={emailId}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    {/* <input type="tel" className="form-control" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required /> */}
                    <input
                      type={"tel"}
                      className="form-control"
                      placeholder="Enter your name"
                      name="mobileno"
                      value={mobileno}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    {/* <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> */}
                    <input
                      type={"password"}
                      className="form-control"
                      placeholder="Enter your name"
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>

          <button type="button" className="btn btn-primary" onClick={onSubmit}>
          
            Sign Up
          </button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default SignUp