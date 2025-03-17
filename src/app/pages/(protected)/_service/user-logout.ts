import apiClient from "@/app/config/axios/axiosConfig";
import { AxiosError } from "axios";

export default async function userLogout(): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const response = await apiClient.get("manage_users/logout/");
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");


    return {
      success: true,
      message: "LogOut Succesfull",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { success: false, message: error.response?.data.detail };
    }

    return {
      success: false,
      message: "Unexpected Error during logout",
    };
  }
}
