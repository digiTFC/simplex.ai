import * as Yup from 'yup';

export const passwordResetSchema = Yup.object({
    password : Yup.string().min(8,"Password should be atleast 8 characters"),
    confirm_password : Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Field is Required")
});

export type passwwordResetInput = Yup.InferType<typeof passwordResetSchema>