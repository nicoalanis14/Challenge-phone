import React from 'react';
import imagen4 from '../assets/Frame_19.png';

const Ui = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-evenly"
      id="ui"
    >
      <div className="ui-img img-fluid">
        <img src={imagen4} alt="frame"></img>
      </div>
      <div className="ui-center">
        <h1>Comes With All You Need For Daily Life</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis vel purus in dignissim. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Maecenas convallis vel purus in
          dignissim.
        </p>
        <button className="btn btn-primary">Get The App</button>
      </div>
    </div>
  );
};

export default Ui;
