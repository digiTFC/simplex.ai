// components/RegisterForm.tsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { registerSchema } from '../../scheme/registerSchema';
import Button from './button';
import { signIn } from 'next-auth/react';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm: React.FC = () => {
  const handleSubmit = (values: RegisterFormValues) => {
    console.log('Form data:', values);
  };

  return (
    <div>
      {/* Social login buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <Button
          label="Register with Google"
          variant="secondary"
          onClick={() => signIn('google')}
          className="w-full"
        />
        <Button
          label="Register with LinkedIn"
          variant="secondary"
          onClick={() => signIn('linkedin')}
          className="w-full"
        />
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center mb-6">
        <span className="text-gray-500">or register with your details</span>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Confirm your password"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>

            <Button
              label={isSubmitting ? 'Submitting...' : 'Register'}
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
