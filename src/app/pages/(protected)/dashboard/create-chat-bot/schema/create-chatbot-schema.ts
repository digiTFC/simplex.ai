import * as Yup from 'yup';
export const CreateChatBotSchema = Yup.object({
    chatbot_name: Yup.string().required("This Field Is Required"),
    company : Yup.string().required(),
    objective : Yup.string().required(),
    platforms : Yup.string().required(),
    performance_meting : Yup.string().required(),
    status : Yup.string().required()
})

export type CreateChatInput = Yup.InferType<typeof CreateChatBotSchema>
