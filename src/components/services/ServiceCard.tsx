import { oswald } from "@/app/page";
import React from "react";

interface Service {
    title: string;
    items: string[];
  }
  
  interface Props {
    title: string;
    services: Service[];
  }

  const ServiceCard: React.FC<Props> = ({ title, services }) => {
    return (
      <div className="service-card flex flex-col items-start w-full text-[#000957] px-[100px] py-[50px]">
        <div>
          <p className={`${oswald.className} text-[72px] font-bold uppercase leading-[72px]`}>
            {title}
          </p>
        </div>
        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex w-full ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
            >
              <div>
                <p className={`${oswald.className} text-[40px] font-bold uppercase text-[#D9EAFD] bg-[#000957] text-center rounded-[24px] px-[20px]`}>
                  {service.title}
                </p>
                <div>
                  <ul>
                    {service.items.map((item, idx) => (
                      <li key={idx} className="font-bold">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  
