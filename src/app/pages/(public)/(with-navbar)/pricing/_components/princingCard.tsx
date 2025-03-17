"use client";
import React, { ReactNode, useState } from "react";
import Button from "../../../../../components/button";
import PrincingTile from "./princingTile";
import Link from "next/link";

interface pricingProps {
  icon?: ReactNode;
  title: string;
  features?: { title: string; isPresent: boolean }[];
  price: ReactNode;
  onClick: string;
}
const PricingCard: React.FC<pricingProps> = ({
  icon,
  title,
  features,
  price,
  onClick,
}) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const style =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 rounded-full hover:to-purple-700 py-3 w-full px-[32px]";

  const handlePricingToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="text-white">
      <div className="dark:bg-klightGrey bg-white text-center px-[4px] py-16">
        {/* Title, Price and Button Section */}
        <div className="w-full md:flex md:flex-col justify-start px-4">

          {/* Title section */}
          <h4 className="text-[20px] flex justify-start font-thin dark:text-white text-black">
            {title}
          </h4>

          {/* Price Display */}
          <h1 className="flex items-center text-4xl text-klightGrey py-1 font-medium transition-all">
            ${price}
          </h1>

          {/* Description */}
          <p className="flex justify-start text-start text-klightGreyHover py-4">Lorem ipsum dolor sit amet consectetur.</p>

          {/* Purchase Button */}
          <Link href={onClick}>
            <Button label="Purchase" className={style} onClick={handlePricingToggle} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PricingCard;
