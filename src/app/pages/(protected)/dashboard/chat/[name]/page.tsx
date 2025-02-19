"use client";
import { Input } from "@/app/components/general-components/input";
import React, { useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import Link from "next/link";
import { Titles } from "@/app/components/general-components/Titles";
import sendChat from "../_service/send-chat";
import { useParams } from "next/navigation";

const ChatPage = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ user: string; assistant: string }[]>();
  const [errors, setErrors] = useState<string>();
  const params = useParams()
  let name = ""
  if(params && params.name ){
    name = params.name.toString()
  }

  const formik = useFormik({
    initialValues: {
      prompt: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const response = await sendChat(values.prompt,name);
      values.prompt = "";
      setMessages(response.data);
      setErrors(response.error)
      setLoading(false);
    },
  });

  return (
    <div className="relative  overflow-y-scroll no-scrollbar ">
      <div className="h-full  flex-col  gap-10 center w-11/12 m-auto ">

        {errors ? (
          <div className="text-center h-[70vh] center">
            <Titles
              title="Internet Error"
              TitleStyle="!text-[45px]"
              subTitle="Check Your Internet connection"
            ></Titles>
          </div>
        ) : (
          !messages ? (
            <div className="text-center h-[70vh] center">
              <Titles
                title="How Can i help you today ?"
                TitleStyle="!text-[45px]"
                subTitle="Enter your question or preoccupation below"
              ></Titles>
            </div>
          ):''
        )}

        {loading ? (
          <div className="fixed bottom-28">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="w-[30px] h-[30px]  bg-white rounded-full"
            ></motion.div>
          </div>
        ) : (
          ""
        )}
        {messages ? (
          <div className="w-8/12 m-auto py-12 pb-32 flex flex-col">
            {messages.map((message, index) => {
              return (
                <div key={index} className="">
                  {message.user ? (
                    <div className="bg-klightGrey px-6 py-3 rounded-lg float-right">
                      {message.user}
                    </div>
                  ) : (
                    <div className="bg-klightGrey px-6 py-3 rounded-lg float-left my-8">
                      {message.assistant}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        <div className="w-6/12  fixed dark:bg-black bottom-0 pb-8">
          <div className="bg-klightGrey rounded-2xl w-full  py-1 flex items-center justify-between px-4 pr-6 text-white relative">
            <Link href={"/pages/dashboard/upload-file"}>
              <div className="cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.25,123.76a6,6,0,0,1,0,8.49l-82.06,82a54,54,0,0,1-76.36-76.39L149.1,37.14a38,38,0,1,1,53.77,53.72L103.59,191.54a22,22,0,1,1-31.15-31.09l83.28-84.67a6,6,0,0,1,8.56,8.42L81,168.91a10,10,0,1,0,14.11,14.18L194.35,82.4a26,26,0,1,0-36.74-36.8L58.33,146.28a42,42,0,1,0,59.37,59.44l82.06-82A6,6,0,0,1,208.25,123.76Z"></path>
                </svg>
              </div>
            </Link>
            <form className="!rounded-2xl !w-[100%] !bg-klightGrey border-none pl-4"
 action="
            
            ">
                          <Input
              placeholder="Enter Message..."
              value={formik.values.prompt}
              onChange={formik.handleChange}
              name="prompt"
              useLabel={false}
               className="!rounded-2xl !w-[100%] !bg-klightGrey border-none pl-4"
            ></Input>
            </form>
            <div
              className="p-2 rounded-full bg-white text-black cursor-pointer"
              onClick={() => formik.handleSubmit()}
            >
              {!loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
                </svg>
              ) : (
                <div className="w-[20px] h-[20px] rounded-full border-2 animate-spin border-black border-t-transparent"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
