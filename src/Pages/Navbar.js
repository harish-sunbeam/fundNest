import React from "react";
import { Form, Link } from "react-router-dom";
import "../CSS/index.css";
import "../CSS/navbar.css";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();
  var callLogin = () => {
    history.push("/Login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container main-div ">
        <Link className="navbar-brand nav" to="/">
          <h1>FundNest</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allmutualfunds">
                Mutual Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 search-btn input-box-shadow"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <div className="col-sm-12 col-lg-12 col-xs-6">
              <button
                className="btn btn-
                primary login-btn"
                type="submit"
              >
                Search
              </button>
              <button
                className="btn btn-
                primary login-btn"
                type="submit"
                onClick={callLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
