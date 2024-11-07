import Button from "@/app/components/general-components/button";
import Titles from "@/app/components/general-components/Titles";
import InsightCard from "@/app/components/homeComponents/insightCard";


const Header = ({}) => {
  const defaultStyle =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[159px] h-[44px]  rounded-[5px]  px-[32px]";

  return (
    <div className="w-full overflow-hidden ">
      <div className=" curve-b relative  flex pt-24 md:pb-[300px] pb-[200px] -ml-[6vw] flex-col z-40 bg-black w-[112vw] ">
        <div className="relative w-10/12 md:w-1/2 m-auto  text-center">
          <Titles
            title="Beautiful Landing Page Design for You"
            TitleStyle="text-[39px] md:text-[64px] font-semibold md:leading-[75px] m-auto md:max-w-[840px]"
            subtitleStyle="md:text-[18px] text-[14px] mt-[20px] mb-[37px] md:w-8/12 w-10/12  m-auto"
            subTitle={`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}
          ></Titles>

          <Button label="Signup Now " className={defaultStyle}></Button>
          <div>
            <InsightCard></InsightCard>
          </div>
        </div>
      </div>
      <div className=" relative  bottom-24  w-full bg-gradient-to-r from-kpink to-kpurple md:h-[424px] h-[304px]  "></div>
    </div>
  );
};
export default Header;
