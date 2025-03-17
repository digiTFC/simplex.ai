import Button from "@/app/components/button";
import { Titles } from "@/app/components/Titles";
import PurposeIllustration from "@/app/pages/(public)/(with-navbar)/home/_components/purposeIllustarion";
import Link from "next/link";

const Purpose = ({}) => {

  return (
    <div className="w-9/12 m-auto py-12 justify-between items-center flex-col md:flex-row flex">
      <div className="md:w-5/12 scale-[.8] md:order-first order-last">
        <PurposeIllustration />
      </div>
      <div className="md:w-5/12 text-center md:text-start">
        <Titles
          title="Empowering Your Success, Every Step of the Way"
          
          subtitleStyle="py-4 pb-6"
          subTitle="Our approach goes beyond just great design—it’s about creating solutions that work for you. Let’s solve challenges and build the future together."
        ></Titles>
        <Link href={"pages/auth/signup"}>
          <Button  label="Get Started Today" />
        </Link>
      </div>
    </div>
  );
};

export default Purpose;
