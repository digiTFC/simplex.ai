import { Titles } from "@/app/components/general-components/Titles";
import { PiBellRinging } from "react-icons/pi";
import React from "react";

const DashboardNav = () => {
  const name = localStorage.getItem("user-name") ?? "Your Name"
  return (
    <div className="flex  z-20 dark:bg-black bg-kwhiteBg pr-12  fixed top-0 w-9/12 pt-5 items-center justify-between">
      <Titles title="Dahsboard" TitleStyle="!text-[40px]"></Titles>

      <div className="flex items-center gap-3">
        <div className="hover:bg-klightGrey p-2  rounded-xl transition-all cursor-pointer">
          <div className="relative">
            <div className=" absolute top-0 right-0 h-[10px] w-[10px] rounded-full bg-red-500 "></div>
            <PiBellRinging size={23}/>
          </div>
        </div>
        <div className="h-[50px] w-[50px] bg-klightGrey rounded-xl"></div>
        <div>
          <Titles
            title={name}
            TitleStyle="!text-[18px]"
            subTitle="Free Plan"
            subtitleStyle="!text-[14px]"
          ></Titles>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
