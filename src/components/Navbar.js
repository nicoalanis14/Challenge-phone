import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="list-div">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>UI SS</li>
          <li>Download</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
