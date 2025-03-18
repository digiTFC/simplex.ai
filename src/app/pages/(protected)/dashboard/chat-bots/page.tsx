"use client";
import Button from "@/app/components/button";
import SearchInput from "@/app/components/search-input";
import { PiDotsThreeBold } from "react-icons/pi";
import Link from "next/link";
import "../../../../globals.css";
import { TableRow } from "./_components/table-row";
import { useChatBots } from "./_services/get_chatbots";
import { Titles } from "@/app/components/Titles";
import { BsChat, BsPlusLg } from "react-icons/bs";
import { IoDocumentTextOutline, IoFilterOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import ChatbotCard from "./_components/chatbot-card";

const ChatBotMenu = () => {
  const { chatbots, loading, error } = useChatBots();
const formatDate = (dateString: string): string => {
    const date = new Date(dateString); // Convert string to Date object
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      day: "numeric",
      month: "numeric",
    });
  };

  const tdStyle = "py-3 text-start";
  const tabStyle =
    "dark:text-white h-fit w-fit px-6 py-2 rounded-lg bg-white text-black dark:bg-klightGrey";

  if (loading)
    return (
      <div className="flex items-center h-full w-full justify-center">
        <div className="w-10 h-10 animate-spin border-2 rounded-full border-black border-t-transparent dark:border-white dark:border-t-transparent"></div>
      </div>
    );

  if (chatbots && chatbots.length == 0)
    return (
      <div className="text-center center  flex-1 h-full">
        <div className="h-full flex flex-col gap-8 items-center justify-center">
          <Titles
            title="No Chat Bots Found"
            subTitle="Create your first one now"
          ></Titles>
          <Link href={"/pages/dashboard/create-chat-bot"}>
            <Button
              label="Create One"
              className="w-fit dark:text-black text-white dark:bg-white bg-black px-3 py-2 rounded-lg"
            ></Button>
          </Link>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="center h-5/6 text-center flex-col w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>

        <Titles
          title="UNEXPECTED ERROR"
          subTitle="Check you internet connextion and retry"
        ></Titles>
      </div>
    );

  if (chatbots) {
    return (
      <div className="h-[90%]  text-center">
        <div className="md:pt-12 pt-4">
          <div>
            <div className="flex justify-between gap-3">
              <div className="flex gap-3">
                <div className={`${tabStyle}`}>All</div>
                <div className={tabStyle}>Active</div>
                <div className={`${tabStyle} hidden md:block`}>Platform</div>
              </div>
              <Link href={"/pages/dashboard/create-chat-bot"}>
                <div>
                  <div
                    className={` flex  gap-2 items-center  !px-4 ${tabStyle}`}
                  >
                    <BsPlusLg size={20} />
                    New ChatBot
                  </div>
                </div>
              </Link>
            </div>
            <hr className="md:my-8 my-4 border-khr " />
            <div className="flex items-center w-full justify-between">
              <span className="text-klight">{chatbots.length} bots found</span>
              <div className="flex  gap-3 items-center">
                <SearchInput></SearchInput>
                <div
                  className={`${tabStyle} h-full flex items-center dark:text-white gap-3 `}
                >
                  <IoFilterOutline size={25} />
                  <span className="hidden md:inline">Filter</span>
                </div>
                <div className="h-6 my-autp border  border-khr"></div>
                <div className={`${tabStyle} flex py-3 items-center  gap-3  `}>
                  <BsDownload size={20} />
                  <span className="hidden md:inline">Export</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <table className="  hidden md:table table-auto   border-tools-table-outline border-black border- rounded-lg w-full">
              <thead className=" rounded-xl dark:bg-klightGrey bg-white">
                <tr>
                  <th className={`rounded-l-lg pl-8 ${tdStyle}`}>Name</th>
                  {/* <th className={tdStyle}>Company</th> */}
                  <th className={tdStyle}>Created At</th>
                  <th className={tdStyle}>Platforms</th>
                  <th className={tdStyle}>Url</th>
                  <th className={`rounded-r-lg ${tdStyle}`}>Status</th>
                  <th className={`rounded-r-lg ${tdStyle}`}></th>
                </tr>
              </thead>
              <tbody>
                {chatbots.map((bot, index) => {
                  const date = formatDate(bot.date_time);
                  const botInfo = {};
                  return (
                    <TableRow
                      chatbot_name={bot.chatbot_name}
                      objective={bot.objective}
                      performance_meting={bot.performance_meting}
                      // company={bot.UUID}
                      date_time={date}
                      platforms={bot.platforms}
                      status={bot.status}
                      url={bot.url}
                      UUID={bot.UUID}
                      key={index}
                    ></TableRow>
                  );
                })}
              </tbody>
            </table>

            <div className="md:hidden grig space-y-4 grid-cols-1">
              {chatbots.map((bot, index) => {
                 
                return (
                  <ChatbotCard key={index} bot={bot}></ChatbotCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default ChatBotMenu;
