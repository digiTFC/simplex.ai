import { CreateChatInput } from "../schema/create-chatbot-schema";
import { AxiosError } from "axios";
import apiClient from "@/app/utils/axios/axiosConfig";
import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";

export default async function createChatBot(
  data: CreateChatInput
): Promise<{ success: boolean; message: string }> {
  try {

    await loginUser({
      "email":"ldxspoti001@gmail.com",
      "password":"ldxspoti001@gmail.com"
  })

    const token = localStorage.getItem("access-token");

    if (!token) {
      return {
        success: false,
        message: "Invalid Token : Redirecting...",
      };
    }

    await apiClient.post(
      "manage_chatbot/create-chatbot/",
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
        message: "unexpected error",
      };
      
    }

    return {
      success: false,
      message: "Unexpected error happended",
    };
  }
}
