import apiClient, { refreshToken } from "@/app/utils/axios/axiosConfig";
import { loginInput } from "../schema/loginSchema";
import { AxiosError } from "axios";
import { headers } from "next/headers";

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
