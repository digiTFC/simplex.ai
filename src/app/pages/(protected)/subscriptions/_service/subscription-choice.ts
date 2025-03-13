import apiClient from "@/app/config/axios/axiosConfig";
import { getTokenData } from "../../_service/get-token-data";
import { toast } from "sonner";
import { loginUser } from "@/app/pages/(public)/auth/_service/login";

export default async function subscriptionChoice(
  subscriptionId?: number,
  userPhoneNumber?: string
) {
  try {

    const token = localStorage.getItem("access-token");

    if (!token) {
      console.log("ep ep ep , tryna cheat ??");
      return;
    }

    const user = getTokenData(token);

    await apiClient.put(
      `manage_users/subscription-choice/${user?.user_id}/`,
      {
        subscriptions: subscriptionId,
        phone_number: userPhoneNumber,
      },
    );

    toast("youpi")
  } catch (error) {
    return error
  }
}
