import React from 'react';
import './GalleryImage.css';

const GalleryImage = (props) => {
  return (
    <figure className="gallery__image-container">
      <img src={props.imageSrc} alt={props.text} />
      <figcaption>{props.text}</figcaption>
    </figure>
  )
}

export default GalleryImage;
