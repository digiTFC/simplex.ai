import apiClient from "@/app/config/axios/axiosConfig";
import { Chatbot, UpadateChatbot } from "../_dto/chatBot";

export async function updateChatbot(data : UpadateChatbot, uuid : string) : Promise<{message :string ,success : boolean | null}>{
    console.log("token"+localStorage.getItem("access-token") )
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