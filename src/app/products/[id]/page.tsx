import { notFound } from "next/navigation";
import HairProductDetails from '../../../components/products/HairProductDetails';
import image from "../../../../public/images/hairProduct.webp";
import { JSX } from "react";
import React from "react";

// Define type for `params`
interface ProductPageProps {
    params: {
      id: string;
    };
}

const products = [
  {
    id: '1',
    title: 'Argan Oil Hair Serum',
    subtitle: 'Deep Nourishment & Shine',
    provider: "Nature's Touch",
    image: image,
    description: 'A premium argan oil serum that nourishes and revitalizes dry, frizzy hair.',
    price: '$19.99',
    ingredients: ['Argan Oil', 'Vitamin E', 'Jojoba Oil'],
    features: ['Non-greasy', 'Sulfate-free', 'UV Protection']
  },
  {
    id: '2',
    title: 'Coconut Curl Cream',
    subtitle: 'Define and Moisturize',
    provider: 'Tropical Bliss',
    image: image,
    description: 'Enhance your curls with this hydrating and defining cream made with coconut oil.',
    price: '$14.99',
    ingredients: ['Coconut Oil', 'Shea Butter', 'Aloe Vera'],
    features: ['Frizz Control', 'No Alcohol', 'Long-lasting Hold']
  },
];

// Dynamic Route Handler
export default async function ProductPage({ params }: ProductPageProps): Promise<JSX.Element> {
    const product = products.find((p) => p.id === params.id);
  
    if (!product) {
      return notFound();
    }
  
    return (
        <div className="flex justify-center items-center">
            <HairProductDetails {...product} />;
        </div>
    )
}

