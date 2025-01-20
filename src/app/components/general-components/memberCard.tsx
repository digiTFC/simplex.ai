import React from 'react'
import ContentBox from './contentBox'
import Image from 'next/image'
import {
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
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
    <ContentBox isBlack={true} height="h-[405px]">
    <div className="bg-klightGrey text-white w-[325px] h-[355px]  w-fit rounded-xl">
      <Image
        src={
          image
        }
        className="w-[325px] h-[325px]  rounded"
        alt="ledoux picture"
        width={700}
        height={400}
      ></Image>
      <div  className={`cursor-pointer px-3 py-4 flex   ${textEnd ? 'justify-end ' : ''}`}
      >
        <Titles 
          title={name}
          subTitle={position}
          TitleStyle="!text-[20px] "
          subtitleStyle="!text-[14px] "
        ></Titles>
        <a href={link} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} color='black' className='scale-75 bg-white p-[6px] px-[7px] mt- ml-2 rounded'></FontAwesomeIcon></a>
      </div>
    </div>
  </ContentBox>
  )
}
