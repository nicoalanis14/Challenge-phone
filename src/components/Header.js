import React from 'react';

const Header = () => {
  return (
    <div className="container-header" id="header">
      <div className="container d-flex align-items-center ">
        <div className="header-center">
          <h1>
            <span>Launch your app</span>
            <br />
            with confidence and <br />
            creativity
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            convallis vel purus in dignissim.
          </p>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
