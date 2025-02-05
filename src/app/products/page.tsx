import Hero from "@/components/products/Hero";
import ProductSection from "@/components/products/ProductSection";
import React from "react";
import image from "../../../public/images/hairProduct.webp";

const ProductsPage =()=>{
    const products = [
        {
          id: '1',
          name: 'Argan Oil Hair Serum',
          subtitle: 'Deep Nourishment & Shine',
          provider: "Nature's Touch",
          image: image,
          description: 'A premium argan oil serum that nourishes and revitalizes dry, frizzy hair.',
          price: 19.99,
          ingredients: ['Argan Oil', 'Vitamin E', 'Jojoba Oil'],
          features: ['Non-greasy', 'Sulfate-free', 'UV Protection']
        },
        {
          id: '2',
          name: 'Coconut Curl Cream',
          subtitle: 'Define and Moisturize',
          provider: 'Tropical Bliss',
          image: image,
          description: 'Enhance your curls with this hydrating and defining cream made with coconut oil.',
          price: 14.99,
          ingredients: ['Coconut Oil', 'Shea Butter', 'Aloe Vera'],
          features: ['Frizz Control', 'No Alcohol', 'Long-lasting Hold']
        },
      ];

    return(
        <>
        <Hero/>
        <ProductSection title="Hair Products" products={products} />
        <ProductSection title="Nail Products" products={products} />
        </>
    )
}

export default ProductsPage;