import React from "react";
import { CallToAction } from "@/app/components/callToAction";
import { Founders } from "./_components/founders";
import { Values } from "@/app/pages/(public)/(with-navbar)/aboutUs/_components/values";
import { Team } from "./_components/team";
import { Titles } from "@/app/components/Titles";

const AboutUs = () => {
  return (
    <div>
      <div className="3xl:w-9/12 m-auto">
        <div className="w-10/12 m-auto overflow-hidden">
          <div className="md:w-2/4 3xl:w-4/6 py-16 text-center m-auto">
            <Titles
            bigTitle={true}
              title="Our vision is to make innovation effortless and impactful"
              subTitle="Simplex is more than just a platform—it's your partner in revolutionizing how businesses and developers interact with technology. We aim to make chatbot creation seamless, fun, and inclusive for Africa and beyond."
              subtitleStyle="pt-6"
            ></Titles>
          </div>

          {/* Founders Section */}
          <div className="max-w-[1700px] m-auto">
            <Founders></Founders>
          </div>

          {/* Team Section */}
          {/* <div className="max-w-[1700px] my-16 m-auto">
            <Team></Team>
          </div> */}

          {/* Values Section */}
          <div className="my-16">
            <Values></Values>
          </div>

          {/* Call to Action */}
          <div className="max-w-[1700px] m-auto">
            <CallToAction></CallToAction>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
