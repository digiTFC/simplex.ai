import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";

export default async function userLogout(): Promise<{
  success: boolean;
  message: string;
}> {
  const token = localStorage.getItem("access-token");

  if (!token) {
    console.log("aie, no token");
    return {
      success: false,
      message: "No access token found",
    };
  }

  console.log(`Bearer ${token}`);
  try {
    const response = await apiClient.get(
      "manage_users/logout/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    console.log("good");
    console.log(response.status);

    return {
      success: true,
      message: "LogOut Succesfull",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
    console.log("aie");

    return {
      success: false,
      message: "Unexpected Error during logout",
    };
  }
}
