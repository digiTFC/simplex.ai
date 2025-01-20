import { Socials } from "@/app/components/general-components/socials";
import { Titles } from "@/app/components/general-components/Titles";

const CopyRight = ({}) => {
  return (
    <div className="py-6">
      <div className="w-10/12 items-center m-auto flex justify-between" >
      <Titles
        title=""
        subtitleStyle="text-[14px]"
        subTitle="All Rights Reserveds 2024"
      ></Titles>
        <div>
          <Socials></Socials>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
