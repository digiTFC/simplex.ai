"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pricingData } from "@/app/pages/(public)/data/subcriptions";
import Button from "@/app/components/button";
import PricingCard from "@/app/pages/(public)/(with-navbar)/pricing/_components/princingCard";

const Pricing = () => {
  const [val, setVal] = useState("monthly");
  const router = useRouter();

  const handlePlanSwitch = (newVal: string) => {
    if (newVal !== val) setVal(newVal);
  };

  const generateLink = (index: number): string => {
    return `/pages/subscriptions/${(index + 1).toString()} ${val}`;
  };

     

  return (
    <div className="w-10/12 m-auto">
      <div className="flex justify-between flex-col text-center items-center">
        <div className="flex items-center w-full justify-center">
          <div className="text-white flex relative rounded-full z-10 bg-clip-content my-12 bg-klightGrey w-[277px] h-[50px] text-center">
            <Button
              label=""
              className={`${
                val === "monthly" ? "" : "left-[calc(277px/2)]"
              } transition-all duration-300 absolute inset-0 bg-gradient-to-r from-kpink to-kpurple text-white rounded-full w-[calc(277px/2)]`}
            />
            <Button
              label="Monthly"
              className="w-1/2 flex items-center justify-center z-50 cursor-pointer"
              onClick={() => handlePlanSwitch("monthly")}
            />
            <Button
              label="Yearly"
              className="w-1/2 rounded-full flex items-center justify-center z-50 cursor-pointer"
              onClick={() => handlePlanSwitch("yearly")}
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center flex-col justify-end gap-2 mb-20">
        <p>unable to afford ? no problem</p>
        <p className="p-2 rounded-lg border-2 cursor-pointer hover:border-white transition-all ">START FREE</p>
        <p className="text-xs text-klight dark:text-gray-100">No card needed</p>
      </div>

      <div className="place-items-center flex justify-center flex-col md:grid w-full md:grid-cols-3  gap-20 md:gap-4 m-auto">
        {pricingData.slice(1, 4).map((plan, index) => 
        (
          
          <div key={index}>
            <PricingCard
              icon={plan.icon}
              title={plan.name}
              features={plan.features}
              onClick={generateLink(index)}
              price={
                val === "monthly" ? plan.monthlyPrice.toString() : plan.yearlyPrice.toString()
              }
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Pricing;
