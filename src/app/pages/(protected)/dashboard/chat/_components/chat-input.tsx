"use client";
import { Input } from "@/app/components/input";
import { useFormik } from "formik";
import React from "react";
import sendChat from "../_service/send-chat";

const ChatInput = (name:string) => {
  const formik = useFormik({
    initialValues: {
      prompt: "",
    },
    onSubmit: async (values) => {
      const response = await sendChat(values.prompt,name);
      console.log(response.data);
    },
  });

  return (
    <div className="bg-klightGrey rounded-full w-full  py-1 flex items-center justify-between px-4 pr-6 text-white relative">
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
