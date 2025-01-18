"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Image {
  src: string | StaticImageData;
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
    overflow: 'hidden',
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
          <Image
            src={image.src}
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
