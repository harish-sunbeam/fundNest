import React from 'react'
import '../CSS/return.css'

function Login() {
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
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                  </div>
                  <button type="submit" className="btn btn-
                primary btns">Login</button>
                </form>
              </div>
              <div className="card-footer text-center">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


export default Login