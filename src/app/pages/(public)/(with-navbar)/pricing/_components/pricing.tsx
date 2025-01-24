"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pricingData } from "@/app/pages/(public)/data/subcriptions";
import Button from "@/app/components/general-components/button";
import PricingCard from "@/app/components/pricingComponents/princingCard";

const Pricing = () => {
  const [val, setVal] = useState("monthly");
  const router = useRouter();

  const handlePlanSwitch = (newVal: string) => {
    if (newVal !== val) setVal(newVal);
  };

  const generateLink = (index: number) =>
    `/pages/subscriptions/${(index + 1).toString()} ${val}`;

  return (
    <div className="w-10/12 m-auto">
      <div className="flex justify-between flex-col text-center items-center">
        <div className="flex items-center w-full justify-between">
          <div
            onClick={() => router.push(`/pages/subscriptions/0 ${val}`)}
            className="border bg-white dark:bg-black rounded-full py-3 cursor-pointer hover:bg-white hover:text-black transition-all px-9 border-white"
          >
            Start Free
          </div>
          <div className="text-white flex relative rounded-full bg-clip-content my-20 bg-klightGrey w-[277px] h-[50px] text-center">
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

      <div className="flex place-items-center items-center justify-center flex-wrap md:grid grid-cols-3 w-fit gap-40 gap-20 m-auto">
        {pricingData.slice(1, 4).map((plan, index) => (
          <div key={index}>
            <PricingCard
              icon={plan.icon}
              title={plan.name}
              features={plan.features}
              onClick={() => router.push(generateLink(index))}
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
