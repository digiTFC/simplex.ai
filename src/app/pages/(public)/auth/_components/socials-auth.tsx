import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const SocialAuths = () => {
  const router = useRouter();

  useEffect(() => {
    const loadGoogleScript = () => {
      return new Promise<void>((resolve, reject) => {
        if ((window as any).google && (window as any).google.accounts) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();

        document.body.appendChild(script);
      });
    };

    const initGoogleLogin = async () => {
      try {
        await loadGoogleScript();
        (window as any).google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleLogin,
        });
        (window as any).google.accounts.id.renderButton(
          document.getElementById("google-login-button"),
          // { theme: "outline", size: "large" }
        );
      } catch (error) {
        console.error("Error loading Google Identity Services:", error);
      }
    };

    initGoogleLogin();
  }, []);

  const handleGoogleLogin = async (response: { credential: string }) => {
    try {
      const userData = jwt_decode(response.credential);

      console.log("User Data:", userData);

      localStorage.setItem("user-email", userData.email);
      localStorage.setItem(
        "user-name",
        `${userData.given_name} ${userData.family_name}`
      );

      router.replace("../dashboard");
    } catch (error) {
      console.error("Error during Google login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div id="google-login-button" className="flex gap-2">
      <div className="border h-[44px]  border-gray-300 rounded-lg p-2 px-4 center gap-2">
        <FcGoogle size={20} />
        Google
      </div>
    </div>
  );
};

function jwt_decode(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export default SocialAuths;
