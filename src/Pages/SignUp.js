import React from 'react'
import { useState } from 'react';
import '../CSS/return.css'


function SignUp() {


    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmOtp, setConfirmOtp] = useState('');
  
    const handleSignUp = (e) => {
      e.preventDefault();
      // Handle sign up logic here
    };
  
    const handleGetOtp = (e) => {
      e.preventDefault();
      // Handle get OTP logic here
    };
  
    const handleConfirmOtp = (e) => {
      e.preventDefault();
      // Handle confirm OTP logic here
    };
  
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Sign Up</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSignUp}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input type="tel" className="form-control" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="otp" className="form-label">OTP</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                      <button className="btn btn-
                primary btns" onClick={handleGetOtp}>Get OTP</button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmOtp" className="form-label">Confirm OTP</label>
                    <input type="text" className="form-control" id="confirmOtp" value={confirmOtp} onChange={(e) => setConfirmOtp(e.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-
                primary btns">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default SignUp