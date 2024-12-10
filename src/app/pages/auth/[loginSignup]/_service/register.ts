import apiClient from "@/app/utils/axios/axiosConfig";
import { registerInput } from "../schema/registerSchema";
import { error } from "console";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { loginInput } from "../schema/loginSchema";
export const registerUser = async (
  data: registerInput
): Promise<{ succes: boolean; message: string }> => {
  try {
    const reponse = await apiClient.post(
      "http://13.91.1.165:8005/api/manage_users/register/",
      data
    );

    return {
      succes: true,
      message: "SignUp Succesful !",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = "An error occurred during signUp";
      const serverErrorMessage = error.response?.data;

      // Afficher l'erreur exacte envoyée par le serveur
      if (serverErrorMessage) {
        console.error("Server Error:", serverErrorMessage); // Log pour déboguer
        toast.error(
          Array.isArray(serverErrorMessage.email)
            ? serverErrorMessage.email.join(", ") // Si le message est un tableau
            : serverErrorMessage.toString() // Si le message est un texte simple
        );
      } else {
        // Si aucune donnée spécifique n'est renvoyée
        toast.error("An unknown error occurred.");
      }
    } else {
      // Erreurs inattendues
      toast.error("An unexpected error occurred.");
    }
  }
  return {
    succes: false,
    message: "",
  };
};

export async function loginUser(
  data: loginInput
): Promise<{ succes: boolean; message: string }> {
  try {
    const response = await apiClient.post(
      "http://13.91.1.165:8005/api/manage_users/login/",
      data
    );

    return {
      succes: true,
      message: "Login Succesfull",
    };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        succes: false,
        message: `Login Failed ${error.message}`,
      };
  }

  return {
    succes: true,
    message: "Login Failed : Unexpected Error",
  };
}
