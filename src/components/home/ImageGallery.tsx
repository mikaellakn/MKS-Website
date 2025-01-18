"use client";

import React, { useState } from 'react';
import { StaticImageData } from 'next/image';

interface Image {
  src: string | StaticImageData; // Allow both string and StaticImageData
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
  columns?: number;
  gap?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, columns = 3, gap = '10px' }) => {
  const galleryStyle: React.CSSProperties = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'start',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
  };

  const imageWrapperStyle: React.CSSProperties = {
    overflow: 'hidden', // Ensure zoomed image stays within bounds
  };

  const baseImageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <div
          key={index}
          style={imageWrapperStyle}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={typeof image.src === 'string' ? image.src : image.src.src} // Handle StaticImageData
            alt={image.alt}
            style={{
              ...baseImageStyle,
              transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
            }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
