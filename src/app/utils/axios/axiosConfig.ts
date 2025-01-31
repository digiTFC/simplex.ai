import axios from "axios";
const apiClient = axios.create({
    timeout : 7000,
    withCredentials:true,
    baseURL:"http://172.172.68.74:8005/api/",
    headers : {
        "Content-Type" : "application/json"
    }
})


// Refresh token logic
export const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh-token");
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axios.post("http://13.91.1.165:8005/api/manage_users/api/refresh-token/", {
        refresh: refreshToken,
    });

    const { access, refresh } = response.data;
    localStorage.setItem("access-token", access);
    localStorage.setItem("refresh-token", refresh);

    return access;
};


// apiClient.interceptors.request.use(async (config) => {
//     let token = localStorage.getItem("access-token");
//     if (token) {
//         const tokenPayload = JSON.parse(atob(token.split(".")[1]));
//         const isExpired = tokenPayload.exp * 1000 < Date.now();
//         if (isExpired) {
//             token = await refreshToken();
//         }
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, Promise.reject);

export default apiClient;


