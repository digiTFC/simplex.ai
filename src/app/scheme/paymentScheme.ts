import * as Yup from 'yup';

export const paymentScheme = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    cardDetails: Yup.string().required('Card details are required'),
    name: Yup.string().required('Cardholder name is required'),
    country: Yup.string().required('Country is required'),
    adress: Yup.string().required('Address is required'),
})