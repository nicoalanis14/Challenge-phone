import React from 'react';

const About = () => {
  return (
    <div
      className="about-container d-flex justify-content-center align-items-center "
      id="about"
    >
      <div className="about-center">
        <h1>
          Why the <span>"About Us"</span> Page Rocks: It's human.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis vel purus in dignissim.
        </p>
        <button className="btn btn-primary">Info</button>
      </div>
    </div>
  );
};

export default About;
