import { CallToAction } from "@/app/components/general-components/callToAction";
import React from "react";
import Pricing from "./_components/pricing";
import { Titles } from "@/app/components/general-components/Titles";

const PricingPage = () => {
  return (
    <>
      <div className="3xl:w-8/12 m-auto">
        <div className="center text-center pt-16">
          <Titles
            title="Purchase A Subscription"
            subTitle="Choose the plan that works for you"
            TitleStyle="text-[48px]"
            subtitleStyle=""
          ></Titles>
        </div>
        <div className="">
          <Pricing></Pricing>
        </div>
        <div className=" w-10/12 m-auto pt-16 py-10">
          <CallToAction></CallToAction>
        </div>
      </div>
    </>
  );
};
export default PricingPage;
