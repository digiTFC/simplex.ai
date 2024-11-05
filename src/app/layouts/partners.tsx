import Titles from "../components/general-components/Titles";
import CallToAction from "../components/homeComponents/callToAction";
import PartnerBox from "../components/homeComponents/partnerBox";

const Partners = ({}) => {
  return (
    <div className="bg-klightGrey">
      <div className=" text-center w-9/12  m-auto pt-24 pb-60">
        <Titles
          title={`Companies we Worked With  Since 2015`}
          TitleStyle="w-6/12 m-auto max-w-[540px]"
        ></Titles>
        <div className="flex my-12 justify-evenly">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
                <PartnerBox key={index}></PartnerBox>
            );
          })}
        </div>

       <div><CallToAction></CallToAction></div>
      </div>
    </div>
  );
};

export default Partners;
