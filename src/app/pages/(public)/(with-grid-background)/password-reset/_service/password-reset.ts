import apiClient from "@/app/utils/axios/axiosConfig";
import { passwwordResetInput } from "../_schema/password-test-schema";
import { AxiosError } from "axios";

export default async function passwordReset(data : passwwordResetInput){
    try {
        const response = await apiClient.post("http://13.91.1.165:8005/api/manage_users/subscription-choice/17/",data)

return response.status
    } catch (error) {
        if(error instanceof AxiosError){
            const errorMessage = error.response?.data.detail
            return errorMessage
        }
        return "Unexpected Error"
    }
} 