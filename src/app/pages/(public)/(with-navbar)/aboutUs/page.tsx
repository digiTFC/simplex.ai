import React from "react";
import { CallToAction } from "@/app/components/general-components/callToAction";
import { Founders } from "./_components/founders";
import { Values } from "@/app/pages/(public)/(with-navbar)/aboutUs/_components/values";
import { Team } from "./_components/team";
import { Titles } from "@/app/components/general-components/Titles";

const AboutUs = () => {
  return (
    <div>
      <div className="3xl:w-9/12 m-auto">

      <div className="w-10/12 m-auto overflow-hidden">
        <div className="md:w-2/4 3xl:w-4/6  py-16 text-center m-auto">
          <Titles
            title="Our vision is to make work inspiring and fulfilling"
            subTitle="HRLInk is a cloud-based HR system designed to simplify and streamline HR processes. Grove HR is a powerful tool that can help SMB businesses manage their HR operations with ease."
            subtitleStyle="pt-6"
          ></Titles>
        </div>

        <div className="max-w-[1700px] m-auto">
          <Founders></Founders>
        </div>

        <div className="max-w-[1700px] my-16 m-auto">
          <Team></Team>
        </div>

        <div className="my-16">
          <Values></Values>
        </div>

        <div className="max-w-[1700px] m-auto">
          <CallToAction></CallToAction>
        </div>
      </div>
      </div>
    </div>
  );
};
export default AboutUs;
