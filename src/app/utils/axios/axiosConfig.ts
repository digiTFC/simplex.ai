import axios from "axios";
const apiClient = axios.create({
    baseURL : "http://40.125.45.80:8005/api",
    timeout : 5000,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default apiClient
