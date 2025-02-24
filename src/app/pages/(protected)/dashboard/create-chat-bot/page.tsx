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
import { useRouter } from "next/navigation";
import UploadFile from "../upload-file/[uuid]/page";

const options = [
  { value: "SITE WEB", label: "Site Web" },
  { value: "LOCAL APP", label: "Local_app" },
];
const Objective = [
  { value: "QA", label: "Q & A" },
  { value: "FAQ", label: "Frequently Asked Questions" },
  { value: "GENERATE_CODE", label: "Code Generation" },
  { value: "CUSTOMER_SERVICES", label: "Customer Service" },
  { value: "E_LEARNING", label: "E-Learning" },
];

const CreateChatBot = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      chatbot_name: "",
      // company: "",
      objective: "",
      platforms: "",
      performance_meting: "",
      status: "ACTIF",
    },
    validationSchema: CreateChatBotSchema,
    validateOnMount:false,
    validateOnBlur:true,
    validateOnChange:false,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await createChatBot({
        chatbot_name: values.chatbot_name,
        // company: values.company,
        objective: values.objective,
        platforms: values.platforms,
        performance_meting: values.performance_meting,
        status: values.status,
      });
      if (!response.retrying) {
        setLoading(false);
      }
      if (response.success) {
        toast.success(response.message);
        router.push(`upload-file/`);
      } else {
        toast.error(response.message);
        setLoading(false);
      }
    },
  });
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <Titles title="Create a new chatbot" TitleStyle="!text-[30px]"></Titles>
      <div className="flex gap-12 flex-col items-center">
        <form action="" className="w-6/6 grid grid-cols-2  pt-12  gap-5 ">
          <Input
          className="!col-span-full block"
            name="chatbot_name"
            value={formik.values.chatbot_name}
            onChange={formik.handleChange}
            useLabel={false}
            placeholder="ChatBot Name"
            error={formik.errors.chatbot_name}
          ></Input>
          {/* <Input
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            useLabel={false}
            placeholder="Company"
            error={formik.errors.company}
          ></Input> */}
          <select
            value={formik.values.platforms}
            name="platforms"
            onChange={formik.handleChange}
            className="${className} border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full max-w-[350px] top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[12px]"
          >
            <option>Select the platform</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
<div className="col-span-2">
<select
            value={formik.values.objective}
            name="objective"
            onChange={formik.handleChange}
            className="${className} border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[12px]"
          >
            <option>Select the domain </option>
            {Objective.map((objective) => (
              <option key={objective.value} value={objective.value}>
                {objective.label}
              </option>
            ))}
          </select>
</div>
 
          <div className="col-span-full ">
            <TextArea
            className="w-full"
              name="performance_meting"
              value={formik.values.performance_meting}
              onChange={formik.handleChange}
              placeholder="Performance Meting"
              useLabel={false}
              error={formik.errors.performance_meting}
            />
          </div>
          <input type="submite" className="hidden" />
        </form>
        <Button
          isLoading={loading}
          label="Create" 
          onClick={formik.handleSubmit}
        ></Button>
      </div>
    </div>
  );
};
export default CreateChatBot;
