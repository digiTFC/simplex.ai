import Button from "../components/general-components/button";
import GradientCircle from "../components/general-components/gradientCircle";
import Titles from "../components/general-components/Titles";
import InsightCard from "../components/homeComponents/insightCard";
import PurposeIllustration from "../components/homeComponents/purposeIllustarion";

const Purpose = ({}) => {
  const defaultStyle =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[159px] h-[44px]  rounded-[5px]  px-[32px]";

  return (
    <div className="w-9/12 m-auto justify-between items-center flex">
      <div className="w-1/2">
        <PurposeIllustration></PurposeIllustration>
      </div>
      <div className="w-4/12">
        <Titles
          title="We're here to guide and help you at all times"
          subtitleStyle="py-4 pb-6"
          subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        ></Titles>
        <Button label="Start now"></Button>
      </div>
    </div>
  );
};
export default Purpose;
