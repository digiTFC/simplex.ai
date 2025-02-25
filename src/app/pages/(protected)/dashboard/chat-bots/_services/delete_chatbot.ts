import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";
import { root } from "postcss";

export async function deleteBot(uid : string) : Promise<{message :string ,success : boolean | null}> {
   
    try{
        const reponse = await apiClient.delete(`manage_chatbot/chatbot/${uid}`)
        console.log(reponse)
        return {
                  message:"Deletion Succeful",
                  success:true
                  
                }
    }catch(error){
        console.log(error)
        if(error instanceof AxiosError){
        console.log(error.response?.data.detail)
        return {
            message:error.message,
            success:false
          }
        }

        return{message:"Unexpected Error", success:false}


    }


}