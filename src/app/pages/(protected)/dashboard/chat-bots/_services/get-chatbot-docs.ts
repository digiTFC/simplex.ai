import apiClient from "@/app/utils/axios/axiosConfig";

export default async function getChatbotDocs  (uuid:string) : Promise<{success:boolean , message : string, data : any}> {

    try {
      const response = await apiClient.get(`manage_chatbot/list-docs/${uuid}/`)

        return {
            success:true,
            message:"Docs",
            data : response.data
        }
    } catch (error) {
        return {
            success:false,
            message:"No Docs",
            data: {}
        } 
    }

}