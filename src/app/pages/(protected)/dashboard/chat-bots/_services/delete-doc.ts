import apiClient from "@/app/config/axios/axiosConfig";

export async function deleteDoc(uuid:string, pk : number) : Promise<{success : boolean, message : string}>{
    try {
        const response = apiClient.get(`manage_chatbot/delete-docs/${uuid}/${pk}/`)

        return{
            success : true,
            message: "Document Deleted Succefully"
        }
    } catch (error) {
        return{
            success : false,
            message: "Document Deleted UnSuccefully"
        }
    }
}