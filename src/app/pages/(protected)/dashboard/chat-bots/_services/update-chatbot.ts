import apiClient from "@/app/utils/axios/axiosConfig";
import { Chatbot } from "../_dto/chatBot";

export async function updateChatbot(data : Chatbot) : Promise<{message :string ,success : boolean | null}>{
    try {
        const response = await apiClient.put("manage_chatbot/chatbot/", {data})
        return {
            message:"Deletion Succeful",
            success:true
          }
    } catch (error) {
        return {
            success:true,
            message:"baka"
        }
    }
}