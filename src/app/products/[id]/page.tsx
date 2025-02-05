import { notFound } from "next/navigation";
import HairProductDetails from '../../../components/products/HairProductDetails';
import React from "react";

const products = [
  {
    id: '1',
    title: 'Argan Oil Hair Serum',
    subtitle: 'Deep Nourishment & Shine',
    provider: "Nature's Touch",
    image: "/images/hairProduct.webp",
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
    image: "/images/hairProduct.webp",
    description: 'Enhance your curls with this hydrating and defining cream made with coconut oil.',
    price: '$14.99',
    ingredients: ['Coconut Oil', 'Shea Butter', 'Aloe Vera'],
    features: ['Frizz Control', 'No Alcohol', 'Long-lasting Hold']
  },
];

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params; // ✅ Await the Promise
  
    if (!resolvedParams?.id) return notFound();
  
    const product = products.find((p) => p.id === resolvedParams.id);
    if (!product) return notFound();
  
    return (
      <div className="flex justify-center items-center">
        <HairProductDetails {...product} />
      </div>
    );
  }

