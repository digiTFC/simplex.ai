import apiClient from "@/app/config/axios/axiosConfig";
import { AxiosError } from "axios";
import { root } from "postcss";

export async function deleteBot(uid : string) : Promise<{message :string ,success : boolean | null}> {
   
    try{
        const reponse = await apiClient.delete(`manage_chatbot/chatbot/${uid}`)
        return {
                  message:"Deletion Succeful",
                  success:true
                  
                }
    }catch(error){
        if(error instanceof AxiosError){
        return {
            message:error.response?.data.detail,
            success:false
          }
        }

        return{message:"Unexpected Error", success:false}


    }


}