import InfoTile from "@/app/components/contactUsComponents/infoTile";
import ContactForm from "@/app/components/general-components/contactForm";
import IconBox from "@/app/components/general-components/iconBox";
import { Titles } from "@/app/components/general-components/Titles";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { TbMailFilled } from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMiniMapPin } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

export const ContactBox = () => {
  return (
    <main className="md:w-8/12 max-w-[1000px] w-10/12 text-center md:text-start m-auto relative">
      <div className="border border-khr overflow-hidden rounded-2xl flex md:flex-row flex-col ">
        <div className="md:w-5/12 bg-klightGrey md:p-12 py-12 flex flex-col justify-between items-center">
          <div>
            <Titles
              title="Contact Information"
              TitleStyle="!text-[30px] text-white"
              subtitleStyle="!text-[14px]"
              subTitle="Say something to start a live chat!"
            ></Titles>
          </div>

          <div className="py-10   flex items-start justify-start flex-col ">
            <InfoTile body="+237 690379063">
              <BsTelephoneFill className="size-6"/>
            </InfoTile>

            <InfoTile body="contac@simplex.ai">
              <TbMailFilled className="size-6" />
            </InfoTile>
            <InfoTile body="Doula, Cameroon">
              <HiMiniMapPin className="size-6" />
            </InfoTile>
          </div>

          <div>
            <div className="text-white flex  gap-5">
              <IconBox classname="!bg-black">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="h-[18px]"
                    color="white"
                  />
                </a>
              </IconBox>

              <IconBox classname="!bg-black">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="h-[18px]" />
                </a>
              </IconBox>
              <IconBox classname="!bg-black">
                <div>
                  {" "}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-[18px]" />
                  </a>
                </div>
              </IconBox>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 w-full py-10 m-auto relative pb-12">
          <div className="absolute md:scale-125 md:-bottom-28 -bottom-24 md:right-14 left-12">
            <Image src={"https://res.cloudinary.com/ddqkpyo5u/image/upload/v1738326168/6c971f61-eab4-4b3e-98f1-f3cda21fa235.png"} alt="Mail Send Illustration" width={400} height={300}>

            </Image>
          </div>

          <ContactForm hideTitle={true}></ContactForm>
        </div>
      </div>
      <div></div>
    </main>
  );
};
