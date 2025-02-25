"use client";
import React, { useState } from "react";
import { Td } from "./td";
import { Chatbot, UpadateChatbot } from "../_dto/chatBot";
import { motion } from "framer-motion";
import { ChatBotStatus } from "@/app/utils/Enums/status";
import { HiOutlineTrash } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { BsChat, BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import { deleteBot } from "../_services/delete_chatbot";
import { IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";
import { toast } from "sonner";
import getChatbotDocs from "../_services/get-chatbot-docs";
import { useFormik } from "formik";
import { CreateChatBotSchema } from "../../create-chat-bot/schema/create-chatbot-schema";
import { updateChatbot } from "../_services/update-chatbot";
import { FaCheck } from "react-icons/fa6";
import Button from "@/app/components/general-components/button";
import { deleteDoc } from "../_services/delete-doc";

type FileData = {
  pk: number;
  file: string;
};
export const TableRow: React.FC<Chatbot> = ({
  chatbot_name,
  company,
  date_time,
  platforms,
  status,
  objective,
  performance_meting,
  url,
  UUID,
}) => {
  const [copied, setIsCopied] = useState(false);
  const [showDoc, setShowDoc] = useState(false);
  const [loading, setisLoding] = useState(false);
  const [editable, setEditable] = useState(false);

  const [fileData, setFileData] = useState<FileData[] | null>(null);
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

  const formik = useFormik({
    initialValues: {
      chatbot_name: chatbot_name,
      company: "",
      objective: objective,
      platforms: platforms,
      performance_meting: "www",
      status: "ACTIF",
      date_time: date_time,
    },
    validationSchema: CreateChatBotSchema,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values) => {},
  });

  async function updateBot() {
    setisLoding(true);


    const botInfo: UpadateChatbot = {
      chatbot_name: formik.values.chatbot_name,
      company: formik.values.company,
      objective: objective,
      platforms: platforms,
      status: status,
    };

    console.log(botInfo);
    
    const response = await updateChatbot(botInfo, UUID!);
    if (response.success) {
      toast.success("Update Sucefful");
      setEditable(false);
    } else {
      toast.error(response.message);
      setisLoding(false);
    }
  }

  async function deleteChatbot() {
    const response = await deleteBot(UUID + "/");

    if (response.success) {
      toast.success("Chatbot Deleted");
    } else {
      toast.error(response.message);
    }
  }

  async function showDocs() {
    setShowDoc(true);
    setisLoding(true);

    const response = await getChatbotDocs(UUID);
    if(response.success){
      const data: FileData[] = response.data;
     setFileData(data);
    }else{
      setFileData([])
    }
    
    
  }

  async function deleteChatbotDocs(pk : number){
    const response = await deleteDoc(UUID, pk)

    if(response.success){
      toast.success("Document Deleted Sucessfully")
    }else{
      toast.error(response.message)

    }
  
  }

  const statusColr =
    status == ChatBotStatus.ACTIF
      ? "dark:bg-green-900  bg-opacity-50  border-green-600  text-green-400"
      : "dark:bg-khr bg-opacity-50  border-gray-500 ";
  return (
    <>
      <tr className="border-b border-gray-300">
        <Td className="pl-8">
          {editable ? (
            <input
              type="text"
              value={formik.values.chatbot_name}
              name="chatbot_name"
              onChange={formik.handleChange}
              className={`${
                editable
                  ? "p-2 bg-gray-100 border rounded-lg"
                  : "bg-transparent outline-none w-fit"
              }`}
              disabled={!editable}
            />
          ) : (
            chatbot_name
          )}
        </Td>

        {/* <Td>{company}</Td> */}
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
                  copyLink(url!);
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
                  ? "dark:bg-green-400 bg-green-600"
                  : "dark:bg-gray-50 bg-gray-400 bg-opacity-50"
              } rounded-xl `}
            ></div>
            {status}
          </div>
        </Td>

        <Td className="flex gap-2">
          <Link href={`/pages/dashboard/chat/${UUID}`}>
            <button
              className={` cursor-pointer  text-sm h-[35px] w-[40px] center  border border-black    gap-2 rounded-xl`}
            >
              <BsChat />
            </button>
          </Link>
          <button
            onClick={() => {
              showDoc ? setShowDoc(false) : showDocs();
            }}
            className={` cursor-pointer  text-sm h-[35px] w-[40px] center  border border-black    gap-2 rounded-xl`}
          >
            <IoDocumentTextOutline />
          </button>
          <button
            onClick={() => {
              editable ? updateBot() : setEditable(true);
            }}
            className={` cursor-pointer  text-sm h-[35px] w-[40px] center  border border-black    gap-2 rounded-xl`}
          >
            {!editable ? <CiEdit size={20} /> : <FaCheck />}
          </button>
          <button
            onClick={() => deleteChatbot()}
            className={`px-2  cursor-pointer text-sm h-[35px] w-[40px] bg-red-400 text-white flex items-center justify-around  border   gap-2 rounded-xl`}
          >
            <HiOutlineTrash size={20} />
          </button>
        </Td>
      </tr>

      <div
        className={`${
          showDoc ? "" : "hidden pointer-events-none"
        }bg-black/50 absolute z-20 inset-0`}
      >
        <div
          className={`${
            showDoc ? "" : "hidden"
          } px-4 py-4 border shadow min-w-[300px]  absolute translate-center z-50 bg-white rounded-xl`}
        >
          <div className={`flex ${fileData?.length == 0 ? '' : ''} justify-between items-center w-full`}>
            <span className="font-bold text-lg">{chatbot_name}</span>
            <span className="font-thin text-gray-500 text-xs">
              {fileData?.length} Documents
            </span>
            <div className="space-x-3 ">
              <Link href={`/pages/dashboard/upload-file/${UUID}`}>
                <Button
                  label=""
                  className="h-8 w-8 dark:text-black  dark:bg-white border border-black  rounded-xl"
                >
                  <BsPlusLg size={22} />
                </Button>
              </Link>
              <Button
                label=""
                onClick={() => setShowDoc(false)}
                className="h-8 w-8 dark:text-black text-white bg-black rounded-xl"
              >
                <IoCloseOutline size={23} />
              </Button>
            </div>
          </div>

          {fileData?.map((file, index) => {
            console.log(file.file);
            return (
              <tr key={index} >
                <Td className="">{file.file}</Td>
                <Td className="ml-12 center">
                  <button
                    onClick={() => deleteChatbotDocs(file.pk)}
                    className={`px-2  cursor-pointer text-sm h-[35px] w-[40px] bg-red-400 text-white flex items-center justify-around  border   gap-2 rounded-xl`}
                  >
                    <HiOutlineTrash size={20} />
                  </button>
                </Td>
              </tr>
            );
          })}
        </div>
      </div>
    </>
  );
};
