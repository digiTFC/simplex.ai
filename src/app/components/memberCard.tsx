import React from 'react'
import ContentBox from './contentBox'
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Titles } from './Titles';

interface cardProps{
    name : string
    position : string
    image : string
    textEnd? : boolean
    link : string
}

export const MemberCard:React.FC<cardProps> = ({name,position,image,textEnd,link}) => {
  return (
    <ContentBox isBlack={true} width='max-w-[90vw]' height="h-[405px] h-[350px]">
    <div className="bg-klightGrey text-white  w-[325px] h-[355px]  w-fit rounded-lg">
      <Image
        src={
          image
        }
        className="w-[325px]  md:h-[325px] h-[300] rounded-lg"
        alt={name}
        width={700}
        height={400}
      ></Image>
      <div  className={`cursor-pointer px-3 py-4 flex  items-center w-full  ${textEnd ? 'md:justify-end justify-between' : 'justify-between'}`}
      >
        <Titles 
          title={name}
          subTitle={position}
          TitleStyle="!text-[20px] "
          subtitleStyle="!text-[14px] "
        ></Titles>
        <a href={link} target='_blank'>
        <FaLinkedinIn className=' cursor-pointer mt-1 bg-black w-8 h-8 p-1 rounded ml-2 rounded' />
          </a>
      </div>
    </div>
  </ContentBox>
  )
}
