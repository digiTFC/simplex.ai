import apiClient, { refreshToken } from "@/app/utils/axios/axiosConfig";
import { loginInput } from "../schema/loginSchema";
import { AxiosError } from "axios";
import { headers } from "next/headers";

export async function loginUser(
    data: loginInput
  ): Promise<{ succes: boolean; message: string }> {

    try {
  
      const response = await apiClient.post(
        "manage_users/login/",
         data,
        {}
      );
  
      const accessToken = response.data.access_token
      const refreshToken = response.data.refresh_token

  
      localStorage.setItem("access-token", accessToken )
      localStorage.setItem("refresh-token", refreshToken)

  
      return {
        succes: true,
        message: "Login Succesfull",
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        const severErrorMessage = error.response?.data;
  
        if (severErrorMessage) {
          return {
            succes: false,
            message: `Login failed : ${severErrorMessage.detail}`,
          };
        }
      }
    }
  
    return {
      succes: false,
      message: "Login Failed : Check your internet and retry",
    };
  }
  