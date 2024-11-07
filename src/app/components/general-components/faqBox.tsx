'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface faqPrpos {
  question : String,
  answer : String
}
export const FaqBox:React.FC<faqPrpos> = ({question,answer}) => {
    const [isopen, setIsOpen] = useState(false)
  return (
    <div className=''>
        <div className='bg-klightGrey text-[14px] text-white flex flex-col justify-between py-4 px-8 rounded cursor-pointer'>
            <div className='flex justify-between' onClick={() => setIsOpen(!isopen)}>
            <span>{question}</span>
            <span><FontAwesomeIcon icon={faPlus} className="" /></span>
            </div>
            
            <p className={` ${isopen?'h-fit border-t mt-3 pt-3':'h-[0] border-none '} overflow-hidden text-klight transition-all border-khr`}>
               {answer}
            </p>
            

        </div>
    </div>
  )
}
