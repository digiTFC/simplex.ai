import apiClient from "@/app/config/axios/axiosConfig";
import { passwwordResetInput } from "../_schema/password-test-schema";
import { AxiosError } from "axios";
import { PasswordResetPageParams } from "../[uuid]/[token]/page";
import { headers } from "next/headers";
import { getUser } from "@/app/pages/auth/_service/user-info";
import { Base64 } from "js-base64";

export async function passwordReset(data : passwwordResetInput, params : PasswordResetPageParams) : Promise<{success:boolean, message:string}>{

    try {

        const response = await apiClient.get(`manage_users/password-reset-confirm/${params.uuid}/${params.token}`,)

        if(response.status == 200){
            const response = await apiClient.patch(`manage_users/set-new-password/`,{
                password : data.password,
                confirm_password : data.confirm_password,
                uidb64 : params.uuid,
                token : params.token,
            })

            if(response.status != 200){
                return {
                    success:false,
                    message:"Check your internet and retry."
                }
            }
        }

        return {
        success : true,
        message : "Update Succesful"
        }
    } catch (error) {
        if(error instanceof AxiosError){
            const errorMessage = error.response?.data.message
            return {success:false, message:errorMessage}
        }
        return {
            success:false,
            message:"unexpected Error"
        }
    }
}