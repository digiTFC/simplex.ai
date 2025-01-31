import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";
import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";

export default async function sendChat(prompt : string) : Promise<{
    data? : {user:string, assistant:string}[],
    error? : string,

}> {

        await loginUser({
            "email":"ldxspoti001@gmail.com",
            "password":"ldxspoti001@gmail.com"
        })
        
    const token = localStorage.getItem("access-token")

    try {
        const reponse = await apiClient.post("manage_chatbot/chat/",{"prompt" : prompt},
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            

        )
        
        
        return {
            data : reponse.data.conversation,
        }

    } catch (error) {
        if(error instanceof AxiosError){
            return {
                error : "error.response?.data"
            }
        }
    }

    return {
        error:"Unexpected Error Caught"
    }
}