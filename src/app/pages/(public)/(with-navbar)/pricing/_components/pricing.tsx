"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { pricingData } from "@/app/pages/(public)/data/subcriptions";
import Button from "@/app/components/general-components/button";
import PricingCard from "@/app/components/pricingComponents/princingCard";

const Pricing = () => {
  const [val, setVal] = useState("monthly");
  const router = useRouter();
  return (
    <div className="w-10/12 m-auto ">
      <div className="flex justify-between flex-col text-center items-center">
        <div className="flex items-center bg-red w-full  justify-between">
          <div
            onClick={() =>
              router.push(
                `/pages/subscriptions/${`${
                  (0).toString() + " " + val.toString()
                }`}`
              )
            }
            className=" border rounded-full py-3 cursor-pointer hover:bg-white hover:text-black transition-all  px-9 border-white text-white"
          >
            Start Free
          </div>
          <div className="text-white flex relative rounded-full bg-clip-content  my-20 bg-klightGrey w-[277px] h-[50px] text-center">
            <Button
              label=""
              className={`${
                val == "monthly" ? "" : `left-[calc(277px/2)]`
              } transition-all duration-300 absolute inset-0  bg-gradient-to-r from-kpink to-kpurple text-white rounded-full w-[calc(277px/2)]`}
            ></Button>
            <Button
              label="Monthly"
              className="w-1/2 flex items-center justify-center z-50 cursor-pointer "
              onClick={() => {
                const newVal = val == "monthly" ? "yearly" : "monthly";
                setVal(newVal);
              }}
            ></Button>
            <Button
              label="Yearly"
              className="w-1/2 rounded-full flex items-center justify-center z-50 cursor-pointer"
              onClick={() => {
                const newVal = val == "monthly" ? "yearly" : "monthly";
                setVal(newVal);
              }}
            ></Button>
          </div>
        </div>
      </div>

      <div className="flex place-items-center items-center justify-center flex-wrap md:grid grid-cols-3 w-fit gap-40 gap-20  m-auto">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div key={index} className={index == 3 ? `col-span-3` : ``}>
              <PricingCard
                icon={pricingData[index + 1].icon}
                title={pricingData[index + 1].name}
                features={pricingData[index + 1].features}
                onClick={() =>
                  router.push(
                    `/pages/subscriptions/${`${
                      (index + 1).toString() + " " + val.toString()
                    }`}`
                  )
                }
                price={
                  val == "monthly"
                    ? pricingData[index + 1].monthlyPrice.toString()
                    : pricingData[index + 1].yearlyPrice.toString()
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Pricing;
