import apiClient from "@/app/utils/axios/axiosConfig";
import { registerInput } from "../schema/registerSchema";
import { AxiosError } from "axios";
import { loginUser } from "./login";
import { loginInput } from "../schema/loginSchema";


export const registerUser = async (
  data: registerInput
): Promise<{ succes: boolean; message: string }> => {
  try {
    await apiClient.post(
      "manage_users/register/",
      data
    );

    localStorage.setItem("email" , data.email)
    localStorage.setItem("pass" , data.password)

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


