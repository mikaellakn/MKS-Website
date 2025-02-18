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
      <div className="service-card flex flex-col items-start w-full text-[#000957] px-[10px] py-[40px] md:px-[100px] md:py-[50px]">
        <div className="w-full justify-center items-center mb-[30px] md:mb-10">
          <p className={`${oswald.className} bg-[#000957] md:bg-transparent text-[#D9EAFD] md:text-[#000957] rounded-[12px] p-2 md:p-0 text-[42px] md:text-[72px] font-bold uppercase leading-tight w-full text-center shadow-sm md:shadow-none`}>
            {title}
          </p>
        </div>
        <div className="flex flex-col w-full px-[10px] md:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex w-full justify-start ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
            >
              <div>
                <p className={`${oswald.className} text-[32px] md:text-[40px] font-bold uppercase text-[#000957]  md:text-[#D9EAFD] md:bg-[#000957] md:text-center rounded-[24px] text-left`}>
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
  
