"use client";
import Button from "@/app/components/general-components/button";
import SearchInput from "@/app/components/general-components/search-input";
import Titles from "@/app/components/general-components/Titles";
import Link from "next/link";
import "../../../../globals.css";
import { TableRow } from "./_components/table-row";
import { useChatBots } from "./_services/get_chatbots";

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

  const tdStyle = "py-3 ";
  const tabStyle = "text-white w-fit px-6 py-2 rounded-lg bg-klightGrey";

  if (loading)
    return (
      <div className="flex items-center h-full w-full justify-center">
        <div className="w-10 h-10 animate-spin border-2 rounded-full border-white border-t-transparent"></div>
      </div>
    );

  if (chatbots.length == 0)
    return (
      <div className="text-center center h-full">
        <div className="h-full flex flex-col gap-8 items-center justify-center">
          <Titles
            title="No Chat Bots Found"
            subTitle="Create your first one now"
          ></Titles>
          <Link href={"/pages/dashboard/create-chat-bot"}>
            <Button
              label="Create One"
              className="w-fit text-black bg-white px-3 py-2 rounded-lg"
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
  return (
    <div className="h-[90%]  text-center">
     

      <div className="pt-12">
        <div className="flex justify-between gap-3">
          <div className="flex gap-3">
            <div className={`bg-white !text-black ${tabStyle}`}>All</div>
            <div className={tabStyle}>Active</div>
            <div className={tabStyle}>Platform</div>
          </div>
          <Link href={"/pages/dashboard/create-chat-bot"}>
            <div>
              <div
                className={`bg-white !text-black flex  gap-2  !px-3 ${tabStyle}`}
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New ChatBot
              </div>
            </div>
          </Link>
        </div>
        <hr className="my-8 border-khr " />
        <div className="flex items-center w-full justify-between">
          <span className="text-klight">{chatbots.length} bots found</span>
          <div className="flex gap-3 items-center">
            <SearchInput></SearchInput>
            <div className={`${tabStyle} flex items-center text-white gap-3 `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M200,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,136Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>
              </svg>
              Filter
            </div>
            <div className="h-6 my-autp border  border-khr"></div>
            <div
              className={`${tabStyle} flex py-3 items-center text-white gap-3  `}
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export
            </div>
          </div>
        </div>
        <div className="mt-8">
          <table className=" table-auto  border  border-tools-table-outline border-black border- rounded-lg w-full">
            <thead className=" rounded-xl bg-klightGrey">
              <tr>
                <th className={`rounded-l-lg ${tdStyle}`}>Name</th>
                <th className={tdStyle}>Company</th>
                <th className={tdStyle}>Created At</th>
                <th className={tdStyle}>Platforms</th>
                <th className={tdStyle}>Url</th>
                <th className={`rounded-r-lg ${tdStyle}`}>Status</th>
              </tr>
            </thead>
            <tbody>
              {chatbots.map((bot, index) => {
                const date = formatDate(bot.date_time);
                return (
                  <TableRow
                    chatbot_name={bot.chatbot_name}
                    company={bot.company}
                    date_time={date}
                    platforms={bot.platforms}
                    status={bot.status}
                    url={bot.url}
                    key={index}
                  ></TableRow>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChatBotMenu;
