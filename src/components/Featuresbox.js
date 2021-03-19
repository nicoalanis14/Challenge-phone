import React from 'react';

const Featuresbox = (props) => {
  return (
    <div>
      <img src={props.img} alt="logo"></img>
      <h1>{props.title}</h1>
      <p>{props.parrafo}</p>
    </div>
  );
};

export default Featuresbox;
