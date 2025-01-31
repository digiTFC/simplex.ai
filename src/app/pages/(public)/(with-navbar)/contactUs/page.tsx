import React from "react";
import { ContactBox } from "@/app/pages/(public)/(with-navbar)/contactUs/_components/contactBox";
import { Titles } from "@/app/components/general-components/Titles";

const ContactUS = () => {
  return (
    <div>
      <div className="text-center w-10/12 m-auto py-12">
        <Titles
          bigTitle
          title="We'd Love to Hear from You!"
          subTitle="Got a question, feedback, or just want to say hi? Drop us a message, and we'll get back to you as soon as possible."
        ></Titles>
      </div>
      <div className="pb-24">
        <ContactBox></ContactBox>
      </div>
    </div>
  );
};

export default ContactUS;
