import apiClient from "@/app/utils/axios/axiosConfig";
import { passwwordResetInput } from "../_schema/password-test-schema";

export default async function passwordReset(data : passwwordResetInput){
    try {
        await apiClient.post("http://13.91.1.165:8005/api/manage_users/subscription-choice/17/",data)

    } catch (error) {
        return error
    }
} 