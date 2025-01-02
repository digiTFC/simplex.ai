import Titles from "@/app/components/general-components/Titles";
import CallToAction from "@/app/components/homeComponents/callToAction";
import PartnerBox from "@/app/components/homeComponents/partnerBox";


const clientLogo = [
  {
    image : "https://res.cloudinary.com/ddqkpyo5u/image/upload/v1735290778/logo_3ti-removebg-preview_dcvahw_wwbxqm.png",
    alt:"3TIRESEARCH LOGO"
  },
  {
    image : "https://res.cloudinary.com/ddqkpyo5u/image/upload/v1735291609/1693850474560-removebg-preview_aoxtzv.png",
    alt:"Digiplus Consulting LOGO"
  },

  {
    image : "https://res.cloudinary.com/ddqkpyo5u/image/upload/v1735293421/fce1511a-9339-4b9f-9925-91dca64011dc.png",
    alt:"DIGILEARN LOGO"
  },

]

const Partners = ({}) => {

  return (
    <div className="dark:bg-klightGrey relative">
      <div className=" text-center w-10/12 md:w-9/12 relative  m-auto pt-24 pb-60">
        <Titles
          title={`Companies we Worked With  Since 2015`}
          TitleStyle="md:w-6/12 text-[38px] md:m-auto max-w-[540px]"
        ></Titles>
        <div className="flex my-12 justify-evenly flex-wrap md:flex-nowrap gap-10">
          {clientLogo.map((client, index) => {
            return (
                <PartnerBox  alt={client.alt} image={client.image} key={index}></PartnerBox>
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
