"use client";
import React, { useEffect, useState } from "react";
import { StatCard } from "./_components/stat-card";
import Loader from "@/app/components/loader";
import ChatbotsStats from "./_components/chatbot-graph";


const DashBoard = () => {
  type Stats = {
    totalChats: string;
    averageResponseTime: string;
    satisfactionRate: string;
    activeChatbots: number;
    bgColor: string;
    chatsPerDay: number[];
  };

  useEffect(() => {
    //   const token = localStorage.getItem("access-token")
    //  const data =  getUserFromFromToken(token ?? '')
    //  console.log(data?.user_id)
  }, []);
  const [stats, setStats] = useState<Stats>();

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setStats({
        totalChats: "1500 chats",
        averageResponseTime: "2.5 s",
        satisfactionRate: "87 %",
        activeChatbots: 5,
        bgColor: "kpurple",
        chatsPerDay: [50, 75, 80, 100, 120, 10, 10],
      });
    }, 3000);
  }, []);

  if (stats) {
    return (
      <div className="md:h-screen  flex flex-col md:flex-row">
        <div className="  md:w-9/12 h-full">
          <div className="flex justify-between items-center">
            <h1 className="text-[25px] font-bold my-4">Overview</h1>
            <div className="flex gap-3 text">
              <div className="bg-white dark:bg-klightGrey px-4 cursor-pointer p-2 rounded-lg">
                Week
              </div>
              <div className="hover:bg-gray-200 dark:hover:bg-klightGrey px-4 p-2 cursor-pointer rounded-lg">
                Month
              </div>
              <div className="hover:bg-gray-200 px-4 p-2 dark:hover:bg-klightGrey cursor-pointer rounded-lg">
                Year
              </div>
            </div>
          </div>
          <div className=" grid md:grid-cols-3  gap-4 place-items-center">
            <StatCard
              classname="bg-blue-400 text-blue-600"
              title="Total Chats"
              value={stats.totalChats}
            />
            <StatCard
              classname="bg-kpurple text-purple-600"
              title="Average Response Time"
              value={stats.averageResponseTime}
            />
            <StatCard
              classname="bg-kpink text-pink-500"
              title="Satisfaction Rate"
              value={stats.satisfactionRate}
            />
          </div>
          <div className="h-1/2 relative  bg-white rounded-2xl ">
            <div className=" px-3 bg-white my-3 dark:bg-klightGrey rounded-xl">
              <ChatbotsStats ></ChatbotsStats>
            </div>
          </div>
        </div>


        <div className=" md:w-3/12 md:h-5/6 p-4 flex  my-4 md:my-0 flex-col rounded-3xl md:mx-4 bg-white dark:bg-klightGrey">
          <div className="flex items-center mb-2 h-fit w-full justify-between">
            <div className="flex gap-2">
              <div className="rounded-lg cursor-pointer h-fit bg-gray-300 dark:bg-gray-800 p-2 w-fit px-4 bg-opacity-40 ">
                Chatbots
              </div>
              <div className="rounded-lg cursor-pointer h-fit hover:bg-gray-100 dark:hover:bg-gray-800  p-2 w-fit px-4 bg-opacity-40 ">
                Platforms
              </div>
            </div>
            <div className="hover:bg-gray-100 p-1 cursor-pointer rounded-full">
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
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex border my-2 items-center justify-between rounded-xl py-3 px-3 pr-4">
            <div className="h-[40px]  w-[43px] rounded-lg bg-blue-400 bg-opacity-50 "></div>
            Q/A Client Bot
            <div className="text-green-400 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
              15%
            </div>
          </div>
          <div className="flex border my-2 items-center justify-between rounded-xl py-3 px-3 pr-4">
            <div className="h-[40px]  w-[43px] rounded-lg bg-kpink bg-opacity-50 "></div>
            Onboarding Bot
            <div className="text-red-400 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 rotate-[180deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
              5%
            </div>
          </div>
          <div className="flex border my-2 items-center justify-between rounded-xl py-3 px-3 pr-4">
            <div className="h-[40px]  w-[43px] rounded-lg bg-kpurple bg-opacity-50 "></div>
            Marketing Bot
            <div className="text-green-400 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
              5%
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return <Loader></Loader>;
  }
};

// components/ChatbotsStats.tsx

export default DashBoard;
