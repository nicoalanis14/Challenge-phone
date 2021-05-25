import React from 'react';

const Footer = () => {
  return (
    <div className="container-footer">
      <h2>Send Me Mail</h2>
      <div className="d-flex flex-column footer">
        <input type="text" placeholder="example@gmail.com"></input>
        <button className="btn">Contact</button>
      </div>
    </div>
  );
};

export default Footer;
