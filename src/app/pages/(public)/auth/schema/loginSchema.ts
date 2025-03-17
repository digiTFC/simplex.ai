import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().required("email required").email(),
    password:Yup.string().required("password required").min(8, "number must be over 8 characters")
});


export type loginInput = Yup.InferType<typeof loginSchema>