import Button from "../components/general-components/button";
import Titles from "../components/general-components/Titles";
import InsightCard from "../components/homeComponents/insightCard";

const Header = ({}) => {
  const defaultStyle =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[159px] h-[44px]  rounded-[5px]  px-[32px]";

  return (
    <div className="w-full overflow-hidden ">
      <div className=" curve relative  flex py-24 pb-[300px] -ml-[6vw] flex-col z-50 bg-black w-[112vw] ">
        {/* <div className="w-full relative h-full  grid grid-cols-12"></div> */}
        <div className="relative w-1/2 m-auto  text-center">
          <Titles
            title="Beautiful Landing Page Design for You"
            TitleStyle="text-[64px] font-semibold leading-[75px]"
            subtitleStyle="text-[18px] mt-[20px] mb-[37px] w-8/12 m-auto"
            subTitle={`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}
          ></Titles>

          <Button label="Signup Now " className={defaultStyle}></Button>
          <div><InsightCard></InsightCard></div>
        </div>
      </div>
      <div className=" relative  bottom-40  w-full bg-gradient-to-r from-kpink to-kpurple h-[474px] "></div>
    </div>
  );
};
export default Header;
