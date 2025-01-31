import { CallToAction } from "@/app/components/general-components/callToAction";
import React from "react";
import Pricing from "./_components/pricing";
import { Titles } from "@/app/components/general-components/Titles";

const PricingPage = () => {
  return (
    <>
      <section className="xl:w-8/12 m-auto">
        <div className="text-center pt-16">
          <Titles
            title="Purchase A Subscription"
            subTitle="Choose the plan that works for you"
            bigTitle={true}
          />
        </div>
        <Pricing />
        <div className="w-10/12 m-auto pt-16 py-10">
          <CallToAction />
        </div>
      </section>
    </>
  );
};

export default PricingPage;
