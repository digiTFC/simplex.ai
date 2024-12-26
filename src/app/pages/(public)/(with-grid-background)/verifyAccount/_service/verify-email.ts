import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";

export default async function verifyEmail(
  code: string
): Promise<{ sucess: boolean; message: string }> {
  try {
      await apiClient.post("http://13.91.1.165:8005/api/manage_users/verify-email/", { "code": code });
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
