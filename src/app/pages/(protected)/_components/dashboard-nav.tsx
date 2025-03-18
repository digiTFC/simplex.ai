import { Titles } from "@/app/components/Titles";
import { PiBellRinging } from "react-icons/pi";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const DashboardNav:React.FC<{setOpen? :() => void}> = ({setOpen}) => {
  const name = localStorage.getItem("user-name") ?? "Your Name"
  return (
    <div className="flex  z-20 dark:bg-black bg-kwhiteBg  w-11/12 fixed top-0 md:w-9/12 pt-5 items-center justify-between">
      <div className="hidden md:block">
      <Titles title="Dahsboard" TitleStyle="md:!text-[40px] "></Titles>
      </div>
      <div>
                    <CiMenuFries
                      aria-label="Open Menu"
                      className="dark:text-white md:hidden scale-[1.8]"
                      onClick={setOpen}
                    />
        </div>


      <div className="flex items-center gap-3">
        <div className="hover:bg-klightGrey p-2  rounded-xl transition-all cursor-pointer">
          <div className="relative">
            <div className=" absolute top-0 right-0 h-[10px] w-[10px] rounded-full bg-red-500 "></div>
            <PiBellRinging size={23}/>
          </div>
        </div>
        <div className="md:h-[50px] md:w-[50px] h-[35px] w-[35px]  rounded-xl">
          <Image alt="Profile Pic" width={100} height={100} className="rounded-xl"  src={"https://res.cloudinary.com/ddqkpyo5u/image/upload/v1742313645/f164040f-2193-4adc-95a3-6058ee217d32.png"}></Image>
        </div> 
        <div>
          <Titles
            title={name}
            TitleStyle="md:!text-[18px] 
            !text-[14px]"
            subTitle="Free Plan"
            subtitleStyle="!text-[14px] !text-[12]"
          ></Titles>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
