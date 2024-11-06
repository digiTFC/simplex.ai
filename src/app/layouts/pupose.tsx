import Button from "../components/general-components/button";
import Titles from "../components/general-components/Titles";
import PurposeIllustration from "../components/homeComponents/purposeIllustarion";

const Purpose = ({}) => {

  return (
    <div className="w-9/12 m-auto pb-24 justify-between items-center flex">
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
