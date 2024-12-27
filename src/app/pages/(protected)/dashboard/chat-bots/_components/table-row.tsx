import React, { useState } from "react";
import { Td } from "./td";
import { Chatbot } from "../_dto/chatBot";
import { motion } from "framer-motion";
import { ChatBotStatus } from "@/app/utils/Enums/status";

export const TableRow: React.FC<Chatbot> = ({
  chatbot_name,
  company,
  date_time,
  platforms,
  status,
  url,
}) => {
    const [copied, setIsCopied]= useState(false)
  
  const copyLink = (link: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const statusColr = status == ChatBotStatus.ACTIF ?'bg-green-900 bg-opacity-50  border-green-900  text-green-400' : 'bg-khr bg-opacity-50  border-gray-500 '
  return (
    <tr className={"border-b border-khr"}>
      <Td>{chatbot_name}</Td>
      <Td>{company}</Td>
      <Td>{date_time}</Td>
      <Td>
        <div className="w-full center">
          <div className="center gap-2 w-fit px-2  rounded-lg bg-blue-500 bg-opacity-25  py-[6px] border border-blue-500 ">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#6da9f8"
              viewBox="0 0 256 256"
            >
              <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.8,96H173.89c-1.54-40.77-18.48-68.23-30.43-82.67A90.19,90.19,0,0,1,217.8,122ZM128,215.83a110,110,0,0,1-15.19-19.45A128.37,128.37,0,0,1,94.13,134h67.74a128.37,128.37,0,0,1-18.68,62.38A110,110,0,0,1,128,215.83ZM94.13,122a128.37,128.37,0,0,1,18.68-62.38A110,110,0,0,1,128,40.17a110,110,0,0,1,15.19,19.45A128.37,128.37,0,0,1,161.87,122Zm18.41-82.67c-12,14.44-28.89,41.9-30.43,82.67H38.2A90.19,90.19,0,0,1,112.54,39.33ZM38.2,134H82.11c1.54,40.77,18.48,68.23,30.43,82.67A90.19,90.19,0,0,1,38.2,134Zm105.26,82.67c11.95-14.44,28.89-41.9,30.43-82.67H217.8A90.19,90.19,0,0,1,143.46,216.67Z"></path>
            </svg>
            {platforms}
          </div>
        </div>
      </Td>
      <Td className="w-10">
        <div className="center relative border border-khr rounded-lg p-2 py-[5px] bg-khr bg-opacity-50  gap-3">
          {url}
          <motion.div 
          initial={{opacity:0,y:5}}
          animate={copied ? {opacity:1 , y:-15}:{}}
          className="absolute px-3 py-2 -top-8 border border-khr bg-klightGrey  rounded-md">Copied !</motion.div>
          <div className="cursor-pointer relative w-[30px] h-[30px] overflow-hidden rounded-md overf=ow-hidden border border-khr flex justify-center items-center">
            <div
              onClick={() => {
                copyLink(url);
              }}
              className="  inset-0 flex items-center justify-center absolute bg-black "
            >
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
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </div>
          </div>
        </div>
      </Td>

      <Td className="">
<div className="center">
<div className={` w-9/12 px-2  center border   gap-2  py-[7px] rounded-md ${statusColr}`}>
          <div className={`w-[10px] h-[10px] ${status == ChatBotStatus.ACTIF ? 'bg-green-400 ' :'bg-gray-50 bg-opacity-50'} rounded-xl`}></div>
          {status}
        </div>
</div>
      </Td>
    </tr>
  );
};
