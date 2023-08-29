import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CompanySignUp() {
  const history = useHistory();

  const [signup, setSignup] = useState({
    emailId: '',
    password: '',
    mobileno: '',
  });

  const [errors, setErrors] = useState({});

  const { emailId, password, mobileno } = signup;

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!emailId) {
      validationErrors.emailId = 'Email is required.';
    } else if (!isValidEmail(emailId)) {
      validationErrors.emailId = 'Enter a valid email.';
    }

    if (!mobileno) {
      validationErrors.mobileno = 'Mobile number is required.';
    } else if (!isValidMobileNumber(mobileno)) {
      validationErrors.mobileno = 'Enter a valid 10-digit mobile number.';
    }

    if (!password) {
      validationErrors.password = 'Password is required.';
    } else if (!isValidPassword(password)) {
      validationErrors.password =
        'Password must be 8 to 12 characters and include at least one uppercase letter, one lowercase letter, one digit (0-9), and one special character.';
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const isValidMobileNumber = (mobileNumber) => {
    return /^\d{10}$/.test(mobileNumber);
  };

  const isValidPassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    return pattern.test(password);
  };

  const onSubmit = () => {
    if (validateForm()) {
      const mySignup = {
        emailId: signup.emailId,
        password: signup.password,
        mobileNo: signup.mobileno,
      };    

      axios
        .post('http://localhost:8080/user/registerascompany', mySignup)
        .then((response) => {
          console.log(response.data);
          window.localStorage.setItem('mobileNo', response.data.mobileNo);

          // Confirm if mobileNo is stored in localStorage or not
          console.log(window.localStorage.getItem('mobileNo'));
          history.push('/otp');
        })
        .catch((error) => {
          console.error(error);
          // Handle error, show error message to the user if needed
        });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Sign Up For MutualFund Company</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.emailId && 'is-invalid'}`}
                    placeholder="Enter your email"
                    name="emailId"
                    value={emailId}
                    onChange={onInputChange}
                    required
                  />
                  {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${errors.mobileno && 'is-invalid'}`}
                    placeholder="Enter your mobile number"
                    name="mobileno"
                    value={mobileno}
                    onChange={onInputChange}
                    required
                  />
                  {errors.mobileno && <div className="invalid-feedback">{errors.mobileno}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password && 'is-invalid'}`}
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    required
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
}

export default CompanySignUp;
