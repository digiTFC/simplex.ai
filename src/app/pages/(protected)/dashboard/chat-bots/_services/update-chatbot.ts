import apiClient from "@/app/utils/axios/axiosConfig";
import { Chatbot } from "../_dto/chatBot";

export async function updateChatbot(data : Chatbot, uuid : string) : Promise<{message :string ,success : boolean | null}>{
    console.log("token"+localStorage.getItem("access-token") )
    try {
        await apiClient.patch(`manage_chatbot/chatbot/${uuid}`, {data})
        return {
            message:"Deletion Succeful",
            success:true
          }
    } catch (error) {
        return {
            success:false,
            message:"baka"
        }
    }
}