import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            FinanceApp
          </NavLink>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>

              <div className="dropdown">
                <NavLink
                  className="btn dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Modules
                </NavLink>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="#">
                    Diet
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Diesease
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Doctor
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Finance
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Medicine
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Patient
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    PatientCase
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    PatientHistory
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Policy
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Treatment
                  </NavLink>
                </div>
              </div>

              <Link className="btn btn-outline-light" to="/finance">
                Finance
              </Link>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-outline-light"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-light" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
