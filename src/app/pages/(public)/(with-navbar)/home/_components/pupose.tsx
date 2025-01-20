import Button from "@/app/components/general-components/button";
import { Titles } from "@/app/components/general-components/Titles";
import PurposeIllustration from "@/app/components/homeComponents/purposeIllustarion";
import Link from "next/link";



const Purpose = ({}) => {

  return (
    <div className="w-9/12 m-auto py-24 justify-between items-center flex-col md:flex-row flex">
      <div className="md:w-1/2 md:order-first order-last ">
        <PurposeIllustration></PurposeIllustration>
      </div>
      <div className="md:w-5/12">
        <Titles
          title="We're here to guide and help you at all times"
          subtitleStyle="py-4 pb-6"
          subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        ></Titles>
        <Link href={"pages/auth/signup"}>
        <Button label="Start now"></Button>
        </Link>
      </div>
    </div>
  );
};
export default Purpose;
