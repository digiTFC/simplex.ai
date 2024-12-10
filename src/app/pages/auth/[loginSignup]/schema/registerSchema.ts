import * as Yup from 'yup';
import * as crypto from 'crypto';

export const registerSchema = Yup.object({
  first_name: Yup.string().required('FirstName is required'),
  last_name: Yup.string().required('LastName is required'),
  organization_name : Yup.string().required('Organization Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), ""], 'Passwords must match')
    .required('Confirm Password is required'),
});


export type registerInput = Yup.InferType<typeof registerSchema>

// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// export function encrypt(text: string): string {
//   const cipher = crypto.createCipheriv(algorithm, key, iv);
//   let encrypted = cipher.update(text, 'utf-8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// }