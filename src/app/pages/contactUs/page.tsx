import Titles from "@/app/components/general-components/Titles";
import Footer from "@/app/layouts/core/footer";
import NavBar from "@/app/layouts/core/navBar";
import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBox from "@/app/components/general-components/iconBox";
import InfoTile from "@/app/components/contactUsComponents/infoTile";
import ContactForm from "@/app/components/general-components/contactForm";
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
