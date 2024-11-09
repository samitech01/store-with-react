import React from 'react';
import GalleryComponent from './GalleryComponent';

function Services() {
  // Array of image sources
  const imageSources = [
    "/image/download.jpeg",
    "/image/download1.jpeg",
    "/image/download2.jpeg",
    "/image/download3.jpeg"
  ];

  return (
    <div>
      <GalleryComponent>
       {[...Array(3)].map((_, rowIndex) => (
        <div className="img-services" key={rowIndex}>
          {imageSources.map((src, index) => (
            <a href={src}  data-fancybox="gallery">
              <img src={src} alt={`Service ${index + 1}`} key={index} />
            </a>
          ))}
        </div>
      ))}
      </GalleryComponent>
    </div>
  );
}

export default Services;
