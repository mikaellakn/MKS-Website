import { oswald } from "@/app/page";
import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your salon offer?",
      answer:
        "Our salon offers a range of services including haircuts, styling, coloring, treatments, and bridal packages.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "Yes, we recommend booking an appointment to ensure you get your desired time slot. Walk-ins are also welcome, but subject to availability.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use high-quality, sustainable, and cruelty-free products from top brands to ensure the best results for our clients.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };  

  return (
    <div className="px-[30px] py-[60px] md:p-[120px] bg-[#000957] text-[#F8FAFC] flex flex-col justify-center align-center shadow-sm">
      <h2 className={`${oswald} text-[42px] md:text-[60px] leading-snug uppercase font-bold mb-[40px] md:mb-[80px] text-center`}>Frequently Asked Questions</h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#D9EAFD] text-[#000957] rounded-[24px] shadow-md p-2"
          >
            <button
              className="w-full text-left p-4 font-medium text-lg focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
