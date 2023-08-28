//import React from 'react'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import '../CSS/Signup.css';

function Otp() {

   const history = useHistory();
 
  // //const [otp, setOtp] = useState('');
  // const [confirmOtp, setConfirmOtp] = useState('');


  // const handleConfirmOtp = (e) => {
  //   e.preventDefault();
  //   // Handle confirm OTP logic here
  //   history.push('/login');
    
  // };

  const [verifyOtp, setOtp] = useState({
    otp: "",
  });

      
  const { otp } = verifyOtp;

  const onInputChange = (e) => {
    setOtp({ ...verifyOtp, [e.target.name]: e.target.value });
    debugger
  };


  const onSubmit = async (e) => {
    debugger
    //e.preventDefault();
    
    // await axios.post("http://localhost:8080/user/verify-otp", verifyOtp);
    
    

    await axios.post("http://localhost:8080/user/verify-otp", verifyOtp, {

    headers: {
      'Content-Type': 'application/json'}

    });
    

    history.push('/login');
  };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        
          
          <div className="mb-3">
            <label className="form-label">Confirm OTP</label>
            <div className="otp-container">
              
              <input
              type={"text"}
              // className="otp-box" //if this style class is commented single textbox appears
              value={otp}
              name="otp"
              // onChange={(e)=>setOtp(e.target.value)}
              onChange={(e) => onInputChange(e)}
              />
              
        {/* multiple otp boxes with below code */}
              {/* {Array.from({ length: 6 }, (_, index) => (
                <input
                  key={index}
                  type="text"
                  className="otp-box"
                  maxLength={1}
                  value={confirmOtp[index] || ''}
                  onChange={(e) => setConfirmOtp(e.target.value)}

            changes in above original code
                  key={index}
                  type="text"
                  className="otp-box"
                  maxLength={1}
                  name="otp"
                  value={otp[index] || ''}
                  onChange={(e)=>setOtp(e.target.value)} 
                  onChange={(e) => onInputChange(e)}  
                />
              ))} */}

            </div>
          </div>
         
          <button type="button" className="btn btn-primary" onClick={onSubmit}>

         
            Verify OTP
          </button>
        
      </div>
    </div>
  );
}

export default Otp;
