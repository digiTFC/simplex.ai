import { Socials } from "@/app/components/socials";
import { Titles } from "@/app/components/Titles";

const CopyRight = ({}) => {
  return (
    <div className="py-6">
      <div className="w-10/12 items-center m-auto flex justify-between" >
      <Titles
        title=""
        subtitleStyle="md:text-[14px] text-[10px]"
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
