import Button from "@/app/components/button";
import { Titles } from "@/app/components/Titles";
import InsightCard from "@/app/pages/(public)/(with-navbar)/home/_components/insightCard";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Header = ({}) => {
  const defaultStyle =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[159px] h-[44px]  rounded-[5px]  px-[32px]";

  return (
    <>
      {/* <GridPattern className="z-50 opacity-75"></GridPattern> */}

      <div className="w-full  ">
        <div className=" curve-b relative  flex md:pt-16 md:pb-[300px] md:pb-[200px] pb-12 -ml-[6vw] flex-col  z-30 bg-kwhiteBg dark:bg-black w-[112vw] ">
          <div className="md:relative w-10/12 md:w-1/2 m-auto  text-center">
            <Titles
              bigTitle={true}
              title="From Idea to Impact – Launch Your Chatbot in Clicks"
              TitleStyle="font-semibold md:leading-[75px] m-auto md:max-w-[840px]"
              subtitleStyle="md:text-[22px] text-[18px] mt-[20px] mb-[37px] md:w-8/12 w-10/12  m-auto"
              subTitle={`Tailored for African Innovators, Ready for the World, Turn Your Vision into Reality with Our Easy-to-Use Platform `}
            ></Titles>

            <Link href={"/pages/auth/signup"}>
              <Button label="Get Started" className={defaultStyle}></Button>
            </Link>
            </div>
            <div className="z-30 order-first md:order-last my-8 mt-12 md:m-0">
              <InsightCard></InsightCard>
            </div>
          </div>
        </div>
        <div className=" relative  bottom-24  w-full bg-gradient-to-r from-kpink to-kpurple md:h-[424px] h-[304px]  "></div>
    </>
  );
};
export default Header;
