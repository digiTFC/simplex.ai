import Titles from "@/app/components/general-components/Titles";
import Footer from "@/app/layouts/core/footer";
import NavBar from "@/app/layouts/core/navBar";
import React from "react";
import { CallToAction } from "@/app/components/general-components/callToAction";
import { Founders } from "../../layouts/aboutUs/founders";
import { Values } from "@/app/layouts/aboutUs/values";
import { Team } from "../../layouts/aboutUs/team";

const AboutUs = () => {
  return (
    <div>
      <main className="3xl:w-9/12 m-auto">
      <div>
        <NavBar></NavBar>
      </div>

      <div className="w-10/12 m-auto overflow-hidden">
        <div className="md:w-2/4 3xl:w-4/6  pt-24 pb-12  text-center m-auto">
          <Titles
            title="Our vision is to make work inspiring and fulfilling"
            subTitle="HRLInk is a cloud-based HR system designed to simplify and streamline HR processes. Grove HR is a powerful tool that can help SMB businesses manage their HR operations with ease."
            subtitleStyle="pt-6"
          ></Titles>
        </div>

        <div className="max-w-[1700px] m-auto">
          <Founders></Founders>
        </div>

        <div className="max-w-[1700px] m-auto">
          <Team></Team>
        </div>

        <div>
          <Values></Values>
        </div>

        <div className="max-w-[1700px] m-auto">
          <CallToAction></CallToAction>
        </div>
      </div>
      </main>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default AboutUs;
