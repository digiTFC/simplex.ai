import { useState, useEffect } from "react";
import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Chatbot } from "../_dto/chatBot";
import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";

export interface UseChatBotsResult {
  chatbots: Chatbot[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useChatBots = (): UseChatBotsResult => {
  const [chatbots, setChatbots] = useState<Chatbot[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchChatBots = async () => {
    if(loading){
      return
    }
    try {
      setLoading(true);
      setError(null); // Reset error state

      // Retrieve token from localStorage
      const token = localStorage.getItem("access-token");

      if (!token) {
        throw new Error("No access token found.");
      }

      // Fetch chatbots data
      const response = await apiClient.get(
        "manage_chatbot/list/",
      );

      setChatbots(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 403) {
          setTimeout(() => {
            fetchChatBots(); // Retry fetching after token refresh
          }, 500);
          
        } else {
          setError(err.message || "An unexpected error occurred.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
      fetchChatBots();
     // Fetch data on component mount
  }, []);

  return { chatbots, loading, error, refetch: fetchChatBots };
};
