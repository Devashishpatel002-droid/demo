import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      style={{
        backgroundColor: props.mode === 'dark' ? '#ffffff' : '#000000',
        color: props.mode === 'dark' ? '#000000' : '#ffffff'
      }}
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
               </Link>
       </li>
           </ul>

          {/* Dark mode switch */}
          <div
            style={{
              color: props.mode === 'dark' ? '#000000' : '#e7dfdf'
            }}
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDark"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDark"
            >
              Enable Dark Mode
            </label>
          </div>

          {/* Green / Red mode switch */}
          <div
            style={{
              color: props.mode === 'dark' ? '#000000' : '#e7dfdf'
            }}
            className={`form-check form-switch text-${
              props.mode1 === 'red' ? 'danger' : 'success'
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode1}
              type="checkbox"
              id="flexSwitchCheckGreen"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckGreen"
            >
              Enable Green Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};