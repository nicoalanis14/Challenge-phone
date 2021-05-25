import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="nav navContainer">
      <div>
        <Link to="header">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="list-div">
        <ul className="nav">
          <Link to="features">
            <li className="nav-item">Features</li>
          </Link>
          <Link to="about">
            <li className="nav-item">About</li>
          </Link>
          <Link to="ui">
            <li className="nav-item">UI SS</li>
          </Link>
          <Link to="download">
            <li className="nav-item">Download</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
