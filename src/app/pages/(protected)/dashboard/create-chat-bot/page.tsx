"use client";
import { Input } from "@/app/components/general-components/input";
import { TextArea } from "@/app/components/general-components/text-area";
import { useFormik } from "formik";
import React, { useState } from "react";
import { CreateChatBotSchema } from "./schema/create-chatbot-schema";
import createChatBot from "./_service/create-chat-bot";
import Button from "@/app/components/general-components/button";
import { toast } from "sonner";
import { Titles } from "@/app/components/general-components/Titles";

const options = [
  { value: "SITE WEB", label: "Site Web" },
  { value: "LOCAL APP", label: "Local_app" },
];

const CreateChatBot = () => {
  const [loading,setLoading]= useState(false)
  const formik = useFormik({
    initialValues: {
      chatbot_name: "",
      company: "",
      objective: "",
      platforms: "",
      performance_meting: "",
      status: "INACTIF",
    },
    validationSchema: CreateChatBotSchema,
    onSubmit: async (values) => {
      setLoading(true)
        const response = await createChatBot({
            chatbot_name : values.chatbot_name,
            company : values.company,
            objective : values.objective,
            platforms : values.platforms,
            performance_meting : values.performance_meting,
            status : values.status,
        })
        setLoading(false)

        if(response.success){ toast.success(response.message)} else { toast.error(response.message)}
      
    },
  });
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <Titles title="Create a new chatbot" TitleStyle="!text-[30px]"></Titles>
      <div className="flex gap-12 flex-col items-center">
        <form action="" className="grid grid-cols-2  pt-12 flex-col gap-5 ">
          <Input
            name="chatbot_name"
            value={formik.values.chatbot_name}
            onChange={formik.handleChange}
            useLabel={false}
            placeholder="ChatBot Name"
            error={formik.errors.chatbot_name}
          ></Input>
          <Input
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            useLabel={false}
            placeholder="Company"
            error={formik.errors.company}
          ></Input>
          <select
            value={formik.values.platforms}
            name="platforms"
            onChange={formik.handleChange}
            className="${className} border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-[350px] top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[12px]"
          >
            <option>Select the platform</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            value={formik.values.platforms}
            name="chatbot type"
            onChange={formik.handleChange}
            className="${className} border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-[350px] top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[12px]"
          >
            <option>Select the chatbot type</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <TextArea
            name="objective"
            value={formik.values.objective}
            onChange={formik.handleChange}
            placeholder="Objective"
            useLabel={false}
            error={formik.errors.objective}
          />

          <TextArea
            name="performance_meting"
            value={formik.values.performance_meting}
            onChange={formik.handleChange}
            placeholder="Performance Meting"
            useLabel={false}
            error={formik.errors.performance_meting}

          />



        </form>
        <Button 

isLoading={loading} label="Create" onClick={formik.handleSubmit}></Button>
      </div>
    </div>
  );
};
export default CreateChatBot;
