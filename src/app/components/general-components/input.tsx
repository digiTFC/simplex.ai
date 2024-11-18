'use client'
import React, { ChangeEvent, useState } from 'react'
interface inputProps{
    placeholder : string
    useStyle? : boolean
}
export const Input:React.FC<inputProps> = ({placeholder,useStyle = true}) => {
    const inputStyle = 'text-klight border z-50 border-klightGrey  hover:border-klightGreyHover w-[380px] top-[746px] outline-none py-[12px] px-[28px] bg-klightGrey left-[5292px] rounded-[5px] my-[px]'
    const [input, setInput] = useState("")
    const handleChange = (event : ChangeEvent<HTMLInputElement>) =>{
        setInput(event.target.value);
    }
  return (
    <div className='flex flex-col relative'>
        <label className={`text-klight transition-all relative ${input.length == 0?' top-10': `-top-0 pt-5 pb-2`}`} htmlFor={placeholder}>{placeholder}</label>
        <input className={useStyle ? inputStyle :''} type="text" name={placeholder} id={placeholder} placeholder={placeholder} onChange={handleChange} value={input}/>
    </div>
  )
}
