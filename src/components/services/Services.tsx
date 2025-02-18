import React from "react";
import ServiceCard from "../services/ServiceCard";

const Services =()=>{
    const womenServices = [
        {
          title: "Hair Cut",
          items: [
            "Artistic Director: Rs. 14,000",
            "Top Stylist (Karim, Ziad): Rs. 12,000",
            "Senior Stylist: Rs. 8,000",
          ],
        },
        {
          title: "Styling",
          items: [
            "Blow-Dry (Artistic Director): Rs. 3,000 (upward)",
            "Blow-Dry (Top Stylist): Rs. 3,000 (upward)",
            "Blow-Dry (Senior Stylist): Rs. 2,000 (upward)",
            "Up-Do: Rs. 5,000 (upward)",
          ],
        },
        {
          title: "Shades & Color",
          items: [
            "Root Color: Rs. 9,000 (upward)",
            "Root Color (Ammonia-Free): Rs. 11,000 (upward)",
            "Full Color: Rs. 15,000 (upward)",
            "Full Head Highlights: Rs. 33,000 (upward)",
            "Half Head Highlights: Rs. 25,000 (upward)",
            "Ombre/Balayage: Rs. 33,000 (upward)",
            "Color Correction: Rs. 25,000 (upward)",
            "Toner/Gloss: Rs. 5,000 (upward)",
          ],
        },
        {
          title: "Smoothing Treatments",
          items: [
            "Botox: Rs. 32,000 (upward)",
            "Express Botox: Rs. 25,000 (upward)",
            "Crystal: Rs. 7,000 (upward)",
          ],
        },
        {
          title: "Haircut Treatments",
          items: [
            "Hot Oil (Head Massage): Rs. 5,000 (upward)",
            "Kerastase: Rs. 6,500 (upward)",
            "Protein: Rs. 5,000 (upward)",
          ],
        },
        {
          title: "Facials",
          items: [
            "Anti-Aging: Rs. 15,000",
            "Whitening: Rs. 15,000",
            "Sensitive Skin: Rs. 15,000",
          ],
        },
        {
          title: "Nails",
          items: [
            "Simple Manicure/Pedicure: Rs. 3,000",
            "Spa Manicure/Pedicure: Rs. 4,000",
            "Nail Polish Change: Rs. 800 (each)",
            "Nail Polish with File: Rs. 1,500 (each)",
          ],
        },
        {
          title: "Threading/Waxing",
          items: [
            "Eyebrows, Chin, Cheeks, Forehead: Rs. 500–1,000",
            "Half/Full Arms: Rs. 600–1,300",
            "Half/Full Legs: Rs. 1,500–2,300",
            "Bikini Line, Underarms: Rs. 700–1,000",
            "Full Body: Rs. 9,000",
          ],
        },
        {
          title: "Bleaching",
          items: [
            "Full Face/Arms/Legs: Rs. 1,800–2,000",
            "Stomach, Neck, Full Back: Rs. 500–1,200",
            "Full Body: Rs. 7,000",
          ],
        },
      ];

      const menServices = [
        {
          title: "Hair Cut",
          items: [
            "Top Stylist: Rs. 4,000 (upward)",
            "Senior Stylist: Rs. 3,000 (upward)",
            "Hair Styling: Rs. 1,000 (upward)",
            "Shave & Beard: Rs. 1,500 (upward)",
          ],
        },
        {
          title: "Shades & Color",
          items: [
            "Root Color: Rs. 5,000 (upward)",
            "Full Color: Rs. 8,000 (upward)",
            "Full Head Highlights: Rs. 12,000 (upward)",
            "Half Head Highlights: Rs. 7,000 (upward)",
            "Color Correction: Rs. 10,000 (upward)",
          ],
        },
        {
          title: "Smoothing Treatment",
          items: ["Botox: Rs. 15,000 (upward)"],
        },
        {
          title: "Hair Treatment",
          items: [
            "Hot Oil (Head Massage): Rs. 5,000 (upward)",
            "Kerastase: Rs. 5,000 (upward)",
          ],
        },
        {
          title: "Groom Makeup",
          items: ["Rs. 6,000"],
        },
        {
          title: "Face Grooming",
          items: ["Chin, Cheeks, Ear, Eyebrows Threading/Waxing: Rs. 1,000"],
        },
        {
          title: "Massage",
          items: [
            "Face (20 min): Rs. 4,000",
            "Feet (20 min): Rs. 4,000",
          ],
        },
      ];

      const otherServices = [
        {
          title: "Massage",
          items: [
            "Face/Feet (20 min each): Rs. 4,000",
          ],
        },
        {
          title: "General Services",
          items: [
            "Nails: Applies to both men and women",
            "Bleaching & Waxing: Unisex services (different areas vary)",
            "Threading: Eyebrows, Lips, and other small areas are generic/unisex",
          ],
        },
      ];
      

    return (
        <>
        <div className="flex flex-col justify-center items-center bg-[#F8FAFC] md:px-[120px] md:py-[60px]">
            <ServiceCard
            title="Women's Services"
            services={womenServices}
            />
            <div className="border-1 border-t border-opacity-30 border-b border-[#000957] w-full">
                <ServiceCard
                title="Men's Services"
                services={menServices}
                />
            </div>
            <ServiceCard
            title="Other Services"
            services={otherServices}
            />
        </div>
        </>
    )
}

export default Services;