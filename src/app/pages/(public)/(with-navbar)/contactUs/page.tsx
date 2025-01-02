import React from "react";
import { ContactBox } from "@/app/pages/(public)/(with-navbar)/contactUs/_components/contactBox";
import { Titles } from "@/app/components/general-components/Titles";

const ContacUS = () => {
  return (
    <div>
      <div className="text-center py-12">
        <Titles
          title="Contact Us"
          subTitle="Any question or remarks? Just write us a message!"
        ></Titles>
      </div>
      <div className="pb-24">
        <ContactBox></ContactBox>
      </div>
    </div>
  );
};

export default ContacUS;
