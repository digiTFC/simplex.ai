import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";

export async function deleteBot(uid : string) : Promise<{message :string ,success : boolean | null}> {
   
    try{
        await apiClient.delete(`manage_chatbot/chatbot/${uid}`)
        return {
                  message:"Deletion Succeful",
                  success:true
                  
                }
    }catch(e){
        if(e instanceof AxiosError)
        return {
            message:e.response?.data.detail,
            success:false
          }
    }
    finally{
        return{message:"Unexpected Error", success:false}
    }


}