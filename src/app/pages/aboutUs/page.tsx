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
      <div>
        <NavBar></NavBar>
      </div>

      <div className="w-10/12 m-auto overflow-hidden">
        <div className="md:w-2/4 py-24  text-center m-auto">
          <Titles
            title="Our vision is to make work inspiring and fulfilling"
            subTitle="HRLInk is a cloud-based HR system designed to simplify and streamline HR processes. Grove HR is a powerful tool that can help SMB businesses manage their HR operations with ease."
            subtitleStyle="pt-6"
          ></Titles>
        </div>

        <div>
          <Founders></Founders>
        </div>

        <div>
          <Team></Team>
        </div>

        <div>
          <Values></Values>
        </div>

        <div>
          <CallToAction></CallToAction>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default AboutUs;
