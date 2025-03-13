import apiClient, { refreshToken } from "@/app/config/axios/axiosConfig";
import { loginInput } from "../schema/loginSchema";
import { AxiosError } from "axios";
import { headers } from "next/headers";
import { ServerResponse } from "http";

export async function loginUser(
  data: loginInput
): Promise<{ succes: boolean; message: string, uidb64? : string }> {
  try {
    const response = await apiClient.post("manage_users/login/", data, {});

    localStorage.setItem("access-token", response.data.access_token);
    localStorage.setItem("refresh-token", response.data.refresh_token);

    return {
      succes: true,
      message: "Login Succesfull",
      uidb64: response.data.uidb64
    };
  } catch (error) {
    if (error instanceof AxiosError) {
        

        return {
          succes: false,
          message: `${error.response?.data.detail}`,

        };
      
    }
  }

  return {
    succes: false,
    message: "Login Failed : Check your internet and retry",
  };
}
