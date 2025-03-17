import * as Yup from 'yup';

export const paymentScheme = Yup.object({
    phone_number: Yup.number().required('Phone Number is required'),
    mm_yy: Yup.string().required('Card details are required'),
    cvc: Yup.string().required('Card details are required'),
    name: Yup.string().required('Cardholder name is required'),
    country: Yup.string().required('Country is required'),
    adress: Yup.string().required('Address is required'),
})