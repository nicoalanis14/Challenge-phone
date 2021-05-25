import React from 'react';
import Featuresbox from './Featuresbox';
import imagen1 from '../assets/feature_1.png';
import imagen2 from '../assets/feature_2.png';
import imagen3 from '../assets/feature_3.png';

const Features = () => {
  const feature = [
    {
      img: imagen1,
      title: 'Development Course',
      parrafo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum.'
    },
    {
      img: imagen2,
      title: 'Money Saving Services',
      parrafo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum.'
    },
    {
      img: imagen3,
      title: 'Usability Interface',
      parrafo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum.'
    }
  ];
  return (
    <div className="container-features" id="features">
      {feature.map((feat) => (
        <Featuresbox img={feat.img} title={feat.title} parrafo={feat.parrafo} />
      ))}
    </div>
  );
};

export default Features;
