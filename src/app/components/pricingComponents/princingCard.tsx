"use client";
import React, {  ReactNode } from "react";
import Button from "../general-components/button";
import PrincingTile from "./princingTile";
import Link from "next/link";

interface pricingProps {
  icon: ReactNode;

  title: string;
  features: {title : string, isPresent : boolean}[];
  price: string;
  onClick: string;
}
const PricingCard: React.FC<pricingProps> = ({
  icon,
  title,
  features,
  price,
  onClick,
}) => {
  const style =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[139px] h-[44px]  rounded-[5px]  px-[32px]";



  return (
    <div className="text-white relative">
      <div
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        // onMouseMove={handleMouseMove}
      >
        <div className=" w-[400px]  relative dark:bg-klightGrey bg-white flex flex-col justify-between  items-center  text-center  rounded-3xl px-[24px] py-8">
          <div className=" w-[76px] h-[76px] absolute   -translate-y-[50%] top-0  flex items-center justify-center rounded-full bg-kOnSecondary">
            <div className="translate-x-[8px] translate-y-[8px] scale-75">
              {icon}
            </div>
          </div>
          <h1 className="text-[20px] font-medium mt-4 text-black dark:text-white ">{title}</h1>
          <hr className=" w-full my-[20px] border-khr" />
          <div className="self-start">
            {features.map((_, idx) => {
              return (
                <PrincingTile
                  key={idx}
                  isPresent={features[idx].isPresent}
                  title={features[idx].title}
                ></PrincingTile>
              );
            })}
          </div>
          <hr className="w-full py-2 border-khr " />
          <div className=" w-full flex items-center justify-between">
            <h1 className="text-[40px] font-medium transition-all">
              ${price}
              <span className="text-[14px] font-normal text-klight">
                /mo
              </span>{" "}
            </h1>
            <div
              // onMouseEnter={() => setHover(false)}
              // onMouseLeave={() => setHover(true)}
            >
                <Link
                href={onClick}>
                <Button
                label="Purchase"
                
                className={style}
              ></Button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* {hover && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 0.9,
            scale: 1,
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-50 left-0 top-0 bg-kOnSecondary text-white  rounded-xl shadow-md px-4 py-3"
          style={{
            pointerEvents: "none", // Prevent interaction
          }}
        >
          <h3 className="text-[20px] font-semibold ">Explanation</h3>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            minima est, reiciendis accusantium molestiae rerum ex commodi esse,
            quo cum sint sequi, laudantium aliquid vitae quisquam! Neque, iure!
            Fugiat, tempore.
          </p>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            minima est, reiciendis accusantium molestiae rerum ex commodi esse,
            quo cum sint sequi, laudantium aliquid vitae quisquam! Neque, iure!
            Fugiat, tempore.
          </p>
        </motion.div>
      )} */}
    </div>
  );
};
export default PricingCard;
