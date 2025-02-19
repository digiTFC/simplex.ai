"use client";
import React, { useState } from "react";
import { Td } from "./td";
import { Chatbot } from "../_dto/chatBot";
import { motion } from "framer-motion";
import { ChatBotStatus } from "@/app/utils/Enums/status";
import { HiOutlineTrash } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import Link from "next/link";
import { deleteBot } from "../_services/delete_chatbot";
import { toast } from "sonner";

export const TableRow: React.FC<Chatbot> = ({
  chatbot_name,
  company,
  date_time,
  platforms,
  status,
  url,
}) => {
  const [copied, setIsCopied] = useState(false);
  const [loading, setisLoding] = useState(false);

  const copyLink = (link: string) => {
    setIsCopied(true);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(() => {})
        .catch((err) => {
          console.error("Failed to copy link: ", err);
        });
    } else {
      // Fallback for unsupported browsers
      const tempInput = document.createElement("input");
      tempInput.value = link;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 800);
  };

  const deleteChatbot =() => {
   const response = deleteBot(chatbot_name)

    if(response != null){
      toast.success("Chatbot Deleted")
    }else{
      toast.error(response)
    }

  } 

  const statusColr =
    status == ChatBotStatus.ACTIF
      ? "bg-green-900 bg-opacity-50  border-green-900  text-green-400"
      : "dark:bg-khr bg-opacity-50  border-gray-500 ";
  return (
    <tr className={"border-b border-khr"}>
      <Td className="pl-8">{chatbot_name}</Td>

      <Td>{company}</Td>
      <Td>{date_time}</Td>

      <Td className="">
        <div
          className={` w-[100px] center gap-2  px-4 bg-opacity-25  h-[35px] rounded-3xl  border ${
            platforms.toLowerCase() == "site web"
              ? "border-blue-500 bg-blue-500 "
              : "border-green-500 bg-green-500"
          } `}
        >
          {platforms.toLowerCase()}
        </div>
      </Td>

      <Td className="">
        <div className="relative border border-khr w-[200px] rounded-3xl  p-0 h-[35px]  dark:bg-khr bg-opacity-50 flex justify-between text-center  items-center">
          <span className=" w-full text-center">{chatbot_name} link</span>
          <motion.div
            initial={{ opacity: 0, y: 5, x: "50%" }}
            animate={copied ? { opacity: 1, y: -15, x: "50%" } : {}}
            className="absolute text-xs rounded-3xl py-2 translate-x-[50%] -top-8 border border-khr text-white bg-klightGrey w-[100px] "
          >
            Copied !
          </motion.div>

          <div className=" cursor-pointer relative w-[36px] h-[34px] rounded-r-3xl overflow-hidden  flex justify-between items-center ">
            <div
              onClick={() => {
                copyLink(url);
              }}
              className="  inset-0 flex items-center justify-center absolute text-white bg-black "
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
        <div
          className={`px-2  text-sm h-[35px] w-[100px] flex items-center justify-around  border   gap-2 rounded-3xl ${statusColr}`}
        >
          <div
            className={`w-[10px] h-[10px] ${
              status == ChatBotStatus.ACTIF
                ? "bg-green-400 "
                : "dark:bg-gray-50 bg-gray-400 bg-opacity-50"
            } rounded-xl `}
          ></div>
          {status}
        </div>
      </Td>

      <Td className="flex gap-2">
        <Link href={`/pages/dashboard/chat/${chatbot_name}`}>
          <div
            className={` cursor-pointer  text-sm h-[35px] w-[40px] center  border border-black    gap-2 rounded-xl`}
          >
            <BsChat />
          </div>
        </Link>
        <div
          className={` cursor-pointer  text-sm h-[35px] w-[40px] center  border border-black    gap-2 rounded-xl`}
        >
          <CiEdit size={20} />
        </div>
        <div 
          onClick={()=>deleteBot(chatbot_name)}
          className={`px-2  cursor-pointer text-sm h-[35px] w-[40px] bg-red-400 text-white flex items-center justify-around  border   gap-2 rounded-xl`}
        >
          <HiOutlineTrash size={20} />
        </div>
      </Td>
    </tr>
  );
};
