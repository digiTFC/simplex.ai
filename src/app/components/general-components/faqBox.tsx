'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faPlus, faMinus  } from '@fortawesome/free-solid-svg-icons';

interface faqPrpos {
  question : string,
  answer : string
}
export const FaqBox:React.FC<faqPrpos> = ({question,answer}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=''>
        <div className='bg-klightGrey text-[14px] text-white flex flex-col justify-between py-4 px-8 rounded cursor-pointer'>
            <div className='flex justify-between' onClick={() => setIsOpen(!isOpen)}>
            <span>{question}</span>
            <span>{!isOpen ? <FontAwesomeIcon icon={faPlus} className="" /> :<FontAwesomeIcon icon={faMinus} className="" />} </span>
            </div>  
            <p className={` ${isOpen?'h-fit border-t mt-3 pt-3 opacity-100':'h-[0] opacity-0 border-none'} overflow-hidden text-klight transition-all border-khr`}>
               {answer}
            </p>
        </div>
    </div>
  )
}
