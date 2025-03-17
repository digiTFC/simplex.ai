import apiClient from "@/app/config/axios/axiosConfig";
import { registerInput } from "../schema/registerSchema";
import { AxiosError } from "axios";
import { loginUser } from "./login";
import { loginInput } from "../schema/loginSchema";


export const registerUser = async (
  data: registerInput
): Promise<{ succes: boolean; message: string }> => {
  try {
    let response;

    if ('token' in data) {
      // Handle Google registration
      response = await apiClient.post("/auth/google", { token: data.token });
    } else {
      // Handle email/password registration
      response = await apiClient.post("manage_users/register/", data);
    }

    localStorage.setItem("access-token", response.data.access_token);
    localStorage.setItem("refresh-token", response.data.refresh_token);

    return {
      succes: true,
      message: "SignUp Successful!",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      const serverErrorMessage = error.response?.data;

      if (serverErrorMessage) {
        console.error("Server Error:", serverErrorMessage);
        return {
          succes: false,
          message: serverErrorMessage.email || "Registration failed",
        };
      }
    }

    return {
      succes: false,
      message: "Unexpected Error: Check your Internet",
    };
  }
};