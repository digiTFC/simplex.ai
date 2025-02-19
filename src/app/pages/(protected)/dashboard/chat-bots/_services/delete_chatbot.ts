import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";

export async function deleteBot(chatbot_name : string) : Promise<{error : string | null}> {
   
    try{
        await apiClient.delete(`manage_chatbot/chatbot/`,
            {
                
            })
        return {
                  error:null
                }
    }catch(e){
        if(e instanceof AxiosError)
        return {
            error:e.response?.data
          }
    }
    finally{
        return{error:"Unexpected Error"}
    }


}