"use client";
import { useState } from "react";
import Button from "../components/general-components/button";
import Titles from "../components/general-components/Titles";
import PricingCard from "../components/pricingComponents/princingCard";

const pricingData = [
  {
    name: "Silver Package",
    monthlyPrice: 9,
    yearlyPrice: 99,
    features: [
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
    ],
    icon: (
      <svg
        className="scale-150 translate-x-[7px] translate-y-[6px]"
        width="121"
        height="138"
        viewBox="0 0 121 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_430_127)">
          <path
            d="M53.6841 61.1105V43.6672L43.3701 62.255L53.6841 61.1105Z"
            fill="#BCD4F5"
          />
          <path
            d="M53.6841 61.1105V43.6672L63.9998 62.255L53.6841 61.1105Z"
            fill="#DDE8FA"
          />
          <path
            d="M43.3701 62.255L53.6841 80.8428V61.1105L43.3701 62.255Z"
            fill="#A7BDEB"
          />
          <path
            d="M63.9998 62.255L53.6841 80.8428V61.1105L63.9998 62.255Z"
            fill="#B2CBF0"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_430_127"
            x="0.370117"
            y="0.667236"
            width="120.63"
            height="137.176"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="7" dy="7" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_430_127"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_430_127"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    name: "Golden Package",
    monthlyPrice: 19,
    yearlyPrice: 199,
    features: [
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
    ],
    icon: (
      <svg
        className="scale-150 translate-x-[7px] translate-y-[6px]"
        width="137"
        height="139"
        viewBox="0 0 137 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_430_103)">
          <path
            d="M52.1348 62.7632L61.4204 43L70.7061 62.7632H52.1348Z"
            fill="#FFE2C9"
          />
          <path d="M61.4202 43L43 62.7632H52.1345L61.4202 43Z" fill="#FAD0AB" />
          <path
            d="M70.7061 62.7632L61.4204 81.4873L52.1348 62.7632H70.7061Z"
            fill="#F6C69B"
          />
          <path
            d="M61.4199 43L79.8401 62.7632H70.7056L61.4199 43Z"
            fill="#FAD0AB"
          />
          <path
            d="M43 62.7632L61.4202 81.4873L52.1345 62.7632H43Z"
            fill="#FFB682"
          />
          <path
            d="M79.8401 62.7632L61.4199 81.4873L70.7056 62.7632H79.8401Z"
            fill="#FFB682"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_430_103"
            x="0"
            y="0"
            width="136.84"
            height="138.487"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="7" dy="7" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_430_103"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_430_103"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    name: "Premium Package",
    monthlyPrice: 49,
    yearlyPrice: 499,
    features: [
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
      "100 + Free Templates",
    ],
    icon: (
      <svg
        className="scale-150 translate-x-[7px] translate-y-[6px]"
        width="130"
        height="135"
        viewBox="0 0 130 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_430_120)">
          <path
            d="M50.4668 60.4746L57.9348 43L65.4027 60.4746H50.4668Z"
            fill="#E0F8FF"
          />
          <path
            d="M65.4027 60.4746L57.9348 77.9493L50.4668 60.4746H65.4027Z"
            fill="#BDEBF7"
          />
          <path
            d="M72.8705 51.3755L65.4025 60.4746L57.9346 43L72.8705 51.3755Z"
            fill="#BDEBF7"
          />
          <path
            d="M57.9344 43L50.4664 60.4746L43 51.3755L57.9344 43Z"
            fill="#B4E3F0"
          />
          <path
            d="M43 69.5737L50.4664 60.4746L57.9344 77.9493L43 69.5737Z"
            fill="#B4E3F0"
          />
          <path
            d="M72.8705 69.5737L65.4025 60.4746L57.9346 77.9493L72.8705 69.5737Z"
            fill="#E0F8FF"
          />
          <path
            d="M43 51.3755V69.5737L50.4664 60.4746L43 51.3755Z"
            fill="#A3D0E6"
          />
          <path
            d="M72.8703 51.3755L65.4023 60.4746L72.8703 69.5737V51.3755Z"
            fill="#B4E3F0"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_430_120"
            x="0"
            y="0"
            width="129.871"
            height="134.949"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="7" dy="7" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_430_120"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_430_120"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
];

const Pricing = () => {
  const [val, setVal] = useState(1);
  return (
    <div className="w-10/12 m-auto">
      <div className="flex justify-between items-center">
        <Titles title="Pricing" TitleStyle="text-[48px] py-[64px]"></Titles>
        <div className="flex relative rounded-full bg-clip-content bg-klightGrey w-[277px] h-[44px] text-center">
          <Button
          label=""
            className={`${
              val == 1 ? "" : `left-[calc(277px/2)]`
            } transition-all duration-500 absolute inset-0  bg-gradient-to-r from-kpink to-kpurple text-white rounded-full w-[calc(277px/2)]`}
          ></Button>
          <Button
          label="Monthly"
            className="w-1/2 flex items-center justify-center z-50 cursor-pointer "
            onClick={() => setVal(1)}
          >
            
          </Button>
          <Button
          label="Yearly"
            className="w-1/2 rounded-full flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setVal(2)}
          >
            
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div key={index}>
              <PricingCard
                icon={pricingData[index].icon}
                title={pricingData[index].name}
                features={pricingData[index].features}
                price={
                  val == 1
                    ? pricingData[index].monthlyPrice.toString()
                    : pricingData[index].yearlyPrice.toString()
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Pricing;
