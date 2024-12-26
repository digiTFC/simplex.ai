import apiClient from "@/app/utils/axios/axiosConfig";
import { getTokenData } from "../../_service/get-token-data";
import { toast } from "sonner";
import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";

export default async function subscriptionChoice(
  subscriptionId?: number,
  userPhoneNumber?: string
) {
  try {

    await loginUser({
      email:"glo1@gmail.com",
      password:"G7v9XqzP3nRb"
    })
    const token = localStorage.getItem("access-token");

    if (!token) {
      console.log("ep ep ep , tryna cheat ??");
      return;
    }

    const user = getTokenData(token);

    await apiClient.put(
      `http://13.91.1.165:8005/api/manage_users/subscription-choice/${user?.user_id}/`,
      {
        subscriptions: subscriptionId,
        phone_number: userPhoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast("youpi")
  } catch (error) {
    return error
  }
}
