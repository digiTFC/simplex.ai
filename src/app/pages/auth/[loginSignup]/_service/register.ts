import apiClient from "@/app/utils/axios/axiosConfig";
import { registerInput } from "../schema/registerSchema";
import { AxiosError } from "axios";


export const registerUser = async (
  data: registerInput
): Promise<{ succes: boolean; message: string }> => {
  try {
    await apiClient.post(
      "http://13.91.1.165:8005/api/manage_users/register/",
      data
    );

    return {
      succes: true,
      message: "SignUp Succesful !",
    };

  } catch (error) {
    if (error instanceof AxiosError) {
      const serverErrorMessage = error.response?.data;

      // Afficher l'erreur exacte envoyée par le serveur
      if (serverErrorMessage) {
        console.error("Server Error:", serverErrorMessage); // Log pour déboguer
        return {
          succes: false,
          message: serverErrorMessage.email,
        };
      } 
  }}
  return {
    succes: false,
    message: "Unexpected Error Check your Internet",
  };
};


