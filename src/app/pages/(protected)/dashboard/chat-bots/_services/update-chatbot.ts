import apiClient from "@/app/config/axios/axiosConfig";
import { Chatbot, UpadateChatbot } from "../_dto/chatBot";

export async function updateChatbot(data : UpadateChatbot, uuid : string) : Promise<{message :string ,success : boolean | null}>{
    try {
        await apiClient.put(`manage_chatbot/chatbot/${uuid}`, {data})
        return {
            message:"Deletion Successful",
            success:true
          }
    } catch (error) {
        return {
            success:false,
            message:"baka"
        }
    }
}