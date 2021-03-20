import React from 'react';
import imagen5 from '../assets/download.png';

const Download = () => {
  return (
    <div className="download-container">
      <div className="download-img">
        <img src={imagen5} alt="frame"></img>
      </div>
      <div className="download-center">
        <h1>Download And Get The App Now</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis vel purus in dignissim. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Maecenas convallis vel purus in
          dignissim.
        </p>
        <button className="btn">Download</button>
      </div>
    </div>
  );
};

export default Download;
