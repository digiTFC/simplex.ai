import axios from "axios";

const apiClient = axios.create({
  timeout: 7000,
  withCredentials: true,
  baseURL: "https://devxs.xyz/api/",
});

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

let isRefreshing = false; // To prevent multiple simultaneous refreshes
let failedQueue: FailedRequest[] = []; // Queue to store requests that failed due to expired token

// Function to process the queue
const processQueue = (error: any, token?: string) => {
  failedQueue.forEach((req) => {
    if (token) {
      req.resolve(token);
    } else {
      req.reject(error);
    }
  });
  failedQueue = [];
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(
      "https://devxs.xyz/api/manage_users/refresh-token/",
      {
        refresh: localStorage.getItem("refresh-token"), // Include the refresh token
      }
    );

    const { access } = response.data;

    // Update the access token in local storage
    localStorage.setItem("access-token", access);

    return access;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};

apiClient.interceptors.response.use(
  (response) => response, // Pass successful responses through
  async (error) => {
    const originalRequest = error.config;

    // Check if the request URL is the login route or refresh token route
    if (
      originalRequest.url.includes("login") ||
      originalRequest.url.includes("refresh-token")
    ) {
      return Promise.reject(error);
    }

    // Check if the error is a 403 Forbidden and the request hasn't been retried
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      try {
        if (!isRefreshing) {
          isRefreshing = true;

          // Refresh the token
          const newAccessToken = await refreshToken();

          // Update the default headers with the new token
          apiClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;

          // Update the Authorization header of the original request
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Resolve all queued requests with the new token
          processQueue(null, newAccessToken);
        }

        // Retry the original request with the new token
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Reject all queued requests and re-throw the error
        processQueue(refreshError, undefined);
        throw refreshError;
      } finally {
        isRefreshing = false;
      }
    }

    // Pass other errors through
    return Promise.reject(error);
  }
);

export default apiClient;