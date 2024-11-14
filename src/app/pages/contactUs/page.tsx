import Titles from "@/app/components/general-components/Titles";
import Footer from "@/app/layouts/core/footer";
import NavBar from "@/app/layouts/core/navBar";
import React from "react";
import { ContactBox } from "@/app/layouts/contactUs/contactBox";

const ContacUS = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="text-center py-12">
          <Titles
            title="Contact Us"
            subTitle="Any question or remarks? Just write us a message!"
          ></Titles>
        </div>
      <div className="pb-24">
      <ContactBox></ContactBox>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContacUS;
