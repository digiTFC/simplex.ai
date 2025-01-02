import Titles from "@/app/components/general-components/Titles";
import React from "react";

const DashboardNav = () => {
  return (
    <div className="flex text-white fixed top-0 w-9/12 pt-5 items-center justify-between">
      <Titles title="Dahsboard" TitleStyle="!text-[40px]"></Titles>
   
      <div className="flex items-center gap-3">
        <div className="hover:bg-klightGrey p-2  rounded-xl transition-all cursor-pointer">
            <div className="relative">
            <div className=" absolute top-0 right-0 h-[10px] w-[10px] rounded-full bg-red-500 "></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
            </div>
        </div>
        <div className="h-[50px] w-[50px] bg-klightGrey rounded-xl"></div>
        <div>
          <Titles
          title="Sanguo Ledoux"
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
