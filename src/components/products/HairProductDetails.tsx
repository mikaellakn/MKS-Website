import { oswald } from '@/app/page';
import Image from 'next/image';
import React from 'react';

interface HairProductProps {
  id: string;
  title: string;
  subtitle?: string;
  provider: string;
  image: string;
  description: string;
  price?: string;
  ingredients?: string[];
  features?: string[];
}

const HairProductDetails: React.FC<HairProductProps> = ({
  title,
  subtitle,
  provider,
  image,
  description,
  price,
  ingredients,
  features,
}) => {
  return (
<div className="hair-product-container">
      <Image src={image} alt={title} className="w-full product-image" width={300} height={300}/>
      <div className="product-details">
        <div className='flex w-full justify-between items-center my-[10px] mb-[20px]'>
            <div className="flex flex-col">
                <h1 className={`${oswald.className} product-title uppercase`}>{title}</h1>
                {subtitle && <h2 className="product-subtitle">{subtitle}</h2>}
                <p className="product-provider">By: {provider}</p>
            </div>
            {price && <p className="product-price">Price: {price}</p>}
        </div>
        <p className="product-description">{description}</p>

        {features && features.length > 0 && (
              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
        {ingredients && ingredients.length > 0 && (
              <div className="product-ingredients">
                <h3>Ingredients:</h3>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
         )}
      </div>
    </div>
  );
};

export default HairProductDetails;
