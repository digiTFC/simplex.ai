import Titles from "@/app/components/general-components/Titles";
import CallToAction from "@/app/components/homeComponents/callToAction";
import PartnerBox from "@/app/components/homeComponents/partnerBox";


const Partners = ({}) => {
  return (
    <div className="bg-klightGrey relative">
      <div className=" text-center w-10/12 md:w-9/12 relative  m-auto pt-24 pb-60">
        <Titles
          title={`Companies we Worked With  Since 2015`}
          TitleStyle="md:w-6/12 text-[38px] md:m-auto max-w-[540px]"
        ></Titles>
        <div className="flex my-12 justify-evenly flex-wrap md:flex-nowrap gap-10">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
                <PartnerBox key={index}></PartnerBox>
            );
          })}
        </div>

       <div className="relative md:top-[220px] top-[180px]">
        <CallToAction></CallToAction>
      </div>
      </div>
    </div>
  );
};

export default Partners;
