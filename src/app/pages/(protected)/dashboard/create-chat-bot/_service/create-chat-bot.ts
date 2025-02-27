import { CreateChatInput } from "../schema/create-chatbot-schema";
import { AxiosError } from "axios";
import apiClient from "@/app/config/axios/axiosConfig";
import { loginUser } from "@/app/pages/auth/_service/login";

export default async function createChatBot(
  data: CreateChatInput
): Promise<{ success: boolean; message: string; retrying? : boolean; uuid? : string  }> {
  try {

   const response =  await apiClient.post(
      "manage_chatbot/create/",
      data,
    );
    console.log(response.data.UUID)

    return {
      uuid: response.data.UUID,
      success: true,
      message: "ChatBot Created Sucessfully",
      retrying:false,
    };

  } catch (error) {

    
    if (error instanceof AxiosError) {
      

      return {
        success: false,
        message: error.response?.data.chatbot_name ?? error.response?.data.detail,
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
