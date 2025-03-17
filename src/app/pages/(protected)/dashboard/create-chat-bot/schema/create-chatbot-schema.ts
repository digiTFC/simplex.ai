import * as Yup from 'yup';
export const CreateChatBotSchema = Yup.object({
    chatbot_name: Yup.string().required("This Field Is Required"),
    // company : Yup.string().required("This Field Is Required"),
    objective : Yup.string().required("This Field Is Required"),
    platforms : Yup.string().required("This Field Is Required"),
    performance_meting : Yup.string().required("This Field Is Required"),
    status : Yup.string().required("This Field Is Required"),
    UUID: Yup.string()
})

export type CreateChatInput = Yup.InferType<typeof CreateChatBotSchema>
