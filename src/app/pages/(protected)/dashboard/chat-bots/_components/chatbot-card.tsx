"use client";
import { animate, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Chatbot } from "../_dto/chatBot";
import { PiDotsThreeBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi2";
import { BsChat } from "react-icons/bs";
import useMeasure from "react-use-measure";
import Link from "next/link";
interface ChatbotCardProps {
  bot: Chatbot;
}

const ChatbotCard: React.FC<ChatbotCardProps> = ({ bot }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString); // Convert string to Date object
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      day: "numeric",
      month: "numeric",
    });
  };
  const [content, setContent] = useState("default");
  const [ref,measures] = useMeasure()

  const date = formatDate(bot.date_time);
  return (
      <motion.div  animate={{height: measures.height }} className="bg-white text-start rounded-xl relative">
<div ref={ref} className="p-4">
<AnimatePresence   mode="popLayout">
        {content == "default" ? (
            <motion.div 
              key={"default"}
              initial={{ x: "-10%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-10%", opacity: 0 }}
              transition={{
                type:"spring",
                bounce:0,
                duration:0.5
              }}
            >
              <div className="flex justify-between  items-center">
                <span className="font-bold text-xl">{bot.chatbot_name}</span>
                <PiDotsThreeBold
                  size={25}
                  onClick={() => setContent("options")}
                />
              </div>
              <div className="flex space-x-4 my-4 flex-wrap">
                <div className="p-1 rounded-lg px-4 border-kpink border">
                  {bot.objective}
                </div>
                <div
                  className={`px-[.8px] rounded-lg center bg-gradient-to-r from-kpink to-kpurple`}
                >
                  <div className="bg-white  p-1 rounded-lg px-4">{date}</div>
                </div>
                <div className={`p-1 rounded-lg px-4 border-kpurple border`}>
                  {bot.platforms}
                </div>
              </div>
              <p>Task Description : </p>
              <p>{bot.performance_meting}</p>
            </motion.div>
        ) : (       
            <motion.div 
              key={"options"}
              initial={{ x: "10%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "10%", opacity: 0 }}
              transition={{
                type:"spring",
                bounce:0,
                duration:0.5
              }}
            >
              <div className="backdrop-blur-3xl flex flex-col gap-3">
                <div
                  className=" absolute right-0 top-0 center w-8  h-8  bg-red-400 rounded-full"
                  onClick={() => setContent("default")}
                >
                  x
                </div>
                <div className="flex  gap-3">
                  <IoDocumentTextOutline size={30} strokeWidth={0.001} />
                  Documents
                </div>
                <hr></hr>
                <Link href={`/pages/dashboard/chat/${bot.UUID}`}>
                <div className="flex gap-4 w-full">
                  <BsChat size={25} color="" strokeWidth={0.001} />
                  Chat
                </div></Link>
                <hr></hr>
                <div className="flex  gap-3">
                  <HiOutlineTrash size={30} />
                  <span>Delete</span>
                </div>
              </div>
            </motion.div>
        )}
        </AnimatePresence>
</div>
      </motion.div>
  );
};

export default ChatbotCard;
