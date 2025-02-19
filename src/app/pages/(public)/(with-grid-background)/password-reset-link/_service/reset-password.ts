import apiClient from "@/app/utils/axios/axiosConfig";

export default async function resetPassword(email : string) : Promise<{success : boolean}>{
    try{
        await apiClient.post("manage_users/password-reset/",{email : email})
        return {
            success : true
        }
    }catch(error){
        return {
            success : false
        }
    }
}