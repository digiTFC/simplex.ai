import apiClient from "@/app/config/axios/axiosConfig";
import { Base64 } from "js-base64";
export async function getUser(uidb64:string) {
  
  
  
     const user_id = Base64.decode(uidb64!);

    

  try {
    const response = await apiClient.get(`manage_users/user/${user_id}`, {});

    const name = response.data.first_name + ' ' + response.data.last_name
    
    localStorage.setItem("user-name" ,name )
  } catch (error) {}
}
