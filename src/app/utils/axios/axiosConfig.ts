import axios from "axios";
const apiClient = axios.create({
    timeout : 7000,
    withCredentials:true,
    baseURL:"http://172.172.68.74:8005/api/",
    headers : {
        "Content-Type" : "application/json"
    }
})



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
      const response = await axios.post('http://172.172.68.74:8005/api/manage_users/refresh-token/', {
        // Include any required data for refreshing the token, e.g., refresh token
        refresh: localStorage.getItem('refresh-token'),
      });
  
      const { access, refresh } = response.data;
      console.log(access +"tom")
      // Update tokens in local storage or state management
      localStorage.setItem('access-token', access);
      
      return access;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      throw error;
    }
  };


  apiClient.interceptors.response.use(
    (response) => response, 
    // Pass successful responses through
    async (error) => {
      const originalRequest = error.config;
        
      // Check if the error is a 401 Unauthorized and the request hasn't been retried
      if (error.response?.status == 403 && !originalRequest._retry) {
        originalRequest._retry = true; // Mark the request as retried
        try {
          if (!isRefreshing) {
            isRefreshing = true;
            
            // Refresh the token and update the default headers
            const newAccessToken = await refreshToken();
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
  
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


