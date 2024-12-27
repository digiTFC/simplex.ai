import { CreateChatInput } from "../schema/create-chatbot-schema";
import { AxiosError } from "axios";
import apiClient from "@/app/utils/axios/axiosConfig";

export default async function createChatBot(
  data: CreateChatInput
): Promise<{ success: boolean; message: string }> {
  try {
    const token = localStorage.getItem("access-token");

    if (!token) {
      return {
        success: false,
        message: "Invalid Token : Redirecting...",
      };
    }

    await apiClient.post(
      "http://13.91.1.165:8005/api/manage_chatbot/create-chatbot/",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      success: true,
      message: "ChatBot Created Sucessfully",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
      return {
        success: false,
        message: error.response?.data.detail,
      };
    }

    return {
      success: false,
      message: "Unexpected error happended",
    };
  }
}
