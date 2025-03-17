import { loginUser } from "@/app/pages/(public)/auth/_service/login";
import { loginInput } from "@/app/pages/(public)/auth/schema/loginSchema";
import apiClient from "@/app/config/axios/axiosConfig";
import { AxiosError } from "axios";

export default async function verifyEmail(
  code: string
): Promise<{ sucess: boolean; message: string }> {
  try {
      await apiClient.post("manage_users/verify-email/", { "code": code });

      const mail = localStorage.getItem("email")
      const pass = localStorage.getItem("pass")

      if( mail && pass ){      const loginData : loginInput = {
        email : mail,
        password :pass

      }
    
      await loginUser(loginData)

      
       localStorage.removeItem("email")
       localStorage.removeItem("pass")
    }



      

      return {
        sucess: true,
        message: "Verication Successful",
      };
  } catch (error) {
    if (error instanceof AxiosError) {
      const erroMessage: string =
        error.response?.data?.erro ||
        "Unexpected Error Occured during verification";
      return {
        sucess: false,
        message: erroMessage,
      };
    }
  }
  return {
    sucess: false,
    message: "Unexpected Error Occured during verification",
  };
}
