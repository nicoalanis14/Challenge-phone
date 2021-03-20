import React from 'react';

const Featuresbox = (props) => {
  return (
    <div className="featurebox-container">
      <div className="img-featurebox">
        <img src={props.img} alt="logo"></img>
      </div>
      <h1>{props.title}</h1>
      <p>{props.parrafo}</p>
    </div>
  );
};

export default Featuresbox;
