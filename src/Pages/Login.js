// import React from 'react'
import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import '../CSS/return.css'
import axios from 'axios';


function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({
    emailId: "",
    password: "",
  });

  const { emailId, password } = login;

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit =(e) => {
    e.preventDefault(); //this is to prevent reloading of default page
    const myLogin = {
      email: login.emailId,
      password: login.password
    }
    // debugger
   axios
   .post("http://localhost:8080/user/login", myLogin)
   .then((response)=>{
    console.log(response.data)
    window.localStorage.setItem("custID", response.data.custId);
    window.localStorage.setItem("emailId", response.data.emailId);
    window.localStorage.setItem("password", response.data.password);
    // history.push('/profilehome');

    if(response.data.userType==="CUSTOMER")
    {
      history.push('/profilehome');
    }
    else if(response.data.userType==="MF_MANAGER")
    {
      history.push('/allmutualfunds');
    }
    else
    {
      history.push('/home'); 
    }
   }
   
   )
   .catch(()=>{})
    
   
  };
    
  return (
    
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    {/* <input type="email" className="form-control" id="email" required /> */}
                    <input
                      type={"email"}
                      className="form-control"
                      placeholder="Enter your EmailId"
                      name="emailId"
                      value={emailId}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    {/* <input type="password" className="form-control" id="password" required /> */}
                    <input
                      type={"password"}
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-
                primary btns" onClick={onSubmit}>Login</button>
                </form>
              </div>
              <div className="card-footer text-center">
                <p>Don't have an account? <a style={{color:"blue"}} onClick={()=>{ history.push("/SignUp")}}>Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


export default Login