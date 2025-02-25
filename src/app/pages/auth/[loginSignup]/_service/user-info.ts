import apiClient from "@/app/utils/axios/axiosConfig";
import { Base64 } from "js-base64";
export async function getUser(uidb64:string) {
  
  
  
     const user_id = Base64.decode(uidb64!);

    console.log(user_id);
    

  try {
    const response = await apiClient.get(`manage_users/user/${user_id}`, {});
    localStorage.setItem("user-name" , response.data.first_name + ' ' + 'response.data.first_name')
  } catch (error) {}
}
