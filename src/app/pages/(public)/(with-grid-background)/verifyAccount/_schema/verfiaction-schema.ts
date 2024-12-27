import * as Yup from 'yup';

export const verificationScheme = Yup.object({
    code : Yup.number().required('Field Required')
}
)