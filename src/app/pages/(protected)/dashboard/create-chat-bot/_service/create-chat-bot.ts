import { CreateChatInput } from "../schema/create-chatbot-schema";
import { AxiosError } from "axios";
import apiClient from "@/app/utils/axios/axiosConfig";
import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";

export default async function createChatBot(
  data: CreateChatInput
): Promise<{ success: boolean; message: string; retrying? : boolean  }> {
  try {


    const token = localStorage.getItem("access-token");

    if (!token) {
      return {
        success: false,
        message: "Invalid Token : Redirecting...",
      };
    }

    await apiClient.post(
      "manage_chatbot/create/",
      data,
    );

    return {
      success: true,
      message: "ChatBot Created Sucessfully",
      retrying:false,
    };
  } catch (error) {

    
    if (error instanceof AxiosError) {
      console.log(error.response?.data.error);

      return {
        success: false,
        message: error.response?.data.error,
        retrying:false,

      };
      
    }

    return {
      success: false,
      message: "Unexpected error happended",
      retrying:false,

    };
  }
}
