import React from 'react';
import GalleryImage from './GalleryImage';

import './Slider.css';

const Slider = (props) => {
  const images = props.images;
  const slideId = "slide-"
  const sliderNavigation = images.map((image, i) =>
    <a href={`/#${slideId}${i + 1}`} key={i}>{i + 1}</a>
  );
  // TODO: Investigate how to stop anchor links from jumping to the top of the browser window.

  // TODO: It may be a good idea at some point to make it so the slider can contain all media types, videos etc;
  const slides = images.map((image, i) =>
    <div className="slide" id={`${slideId}${i + 1}`} key={i}>
      <GalleryImage key={i} imageSrc={image.src} text={image.text} />
    </div>
  );

  return (
    <div className="slider-wrap">
      {sliderNavigation}
      <div className="slider">
        {slides}
      </div>
    </div>
  )
}

export default Slider;
