"use client";
import { Input } from "@/app/components/general-components/input";
import { useFormik } from "formik";
import React from "react";
import sendChat from "../_service/send-chat";

const ChatInput = () => {
  const formik = useFormik({
    initialValues: {
      prompt: "",
    },
    onSubmit: async (values) => {
      const response = await sendChat(values.prompt);
      console.log(response.data);
    },
  });

  return (
    <div className="bg-klightGrey rounded-full w-full  py-1 flex items-center justify-between px-4 pr-6 text-white relative">
      <div className="cursor-pointer">
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
      <Input
        placeholder="Enter Message"
        value={formik.values.prompt}
        onChange={formik.handleChange}
        name="prompt"
        useLabel={false}
        className="!rounded-2xl !w-[100%] border-none pl-4"
      ></Input>
      <div
        className="p-2 rounded-full bg-white text-black cursor-pointer"
        onClick={() => formik.handleSubmit()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ChatInput;
