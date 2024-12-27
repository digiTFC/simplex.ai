import * as Yup from 'yup';

export const resetPasswordScheme = Yup.object({
    email : Yup.string().email().required('Field Required')
}
)