"use client";
import React, { useState } from "react";
import Titles from "../../../../components/general-components/Titles";
import Button from "../../../../components/general-components/button";
import { useFormik } from "formik";
import { User } from "@/app/models/user";
import { toast } from "sonner";
import apiClient from "@/app/utils/axios/axiosConfig";
import { registerSchema } from "@/app/pages/auth/[loginSignup]/schema/registerSchema";
import { loginUser, registerUser } from "../_service/register";
import { loginSchema } from "../schema/loginSchema";

const LoginForm = () => {
  const buttonStyle = "px-4 text-white";
  const errorStyke = "text-red-400 text-[12px] absolute  -bottom-2";
  const buttonSign =
    "bg-gradient-to-r text-white from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700 w-[185px] text-white z-50 top-[986px] left-[5292px] mt-3 rounded-[5px] py-[12px] px-[22px]";
  const inputStyle =
    "text-klight border border-klightGrey   w-[350px] top-[746px] outline-none py-[12px]  px-[28px] bg-klightGrey left-[5292px] rounded-[5px] my-[8px]";
  const [isLoading, setIsLoading] = useState(false);

  //   const login = () => {

  //     // setTimeout(() => {
  //     //     router.push('/'); setIsLoading(false) }, 2000)
  //     }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const response = await loginUser({ "email": values.email, "password": values.password });

      response.succes ? toast.success("Login Succesful 🥳") : toast.error(`${response.message}`)
    },
  });

  return (
    <div>
      <div className="w-[359px] top-[569px] left-[5292px] bg-black rounded-[1px]">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Titles title="Login" TitleStyle="text-[48px]" />
          </div>

          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className={`${inputStyle} ${
                formik.errors.email == null
                  ? "hover:border-klightGreyHover "
                  : "border-red-400"
              }`}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            {formik.errors.email ? (
              <div className={errorStyke}>{formik.errors.email}</div>
            ) : null}

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={`${inputStyle} ${
                  formik.errors.password == null
                    ? "hover:border-klightGreyHover "
                    : "border-red-400"
                }`}
                required
              />
              {formik.errors.password ? (
                <div className={errorStyke}>{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <div>
            <Button
              label="Login"
              className={`${buttonSign}`}
              onClick={() => formik.submitForm()}
            />
          </div>
          <div className="grid grid-cols-2 my-[25px] w-[350px] h-[51px] top-[1069px] left-[5292px]">
            <div className="w-[168px] flex justify-center py-[4px] left-[5292] rounded-[5px] bg-klightGrey hover:bg-klightGreyHover transition-all">
              <div className="border-r px-3 h-8 py-1 my-1">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_434_175)">
                    <path
                      d="M5.09728 13.8992L4.29669 16.888L1.37052 16.9499C0.496027 15.3279 0 13.4721 0 11.5C0 9.59307 0.463773 7.79475 1.28584 6.2113H1.28647L3.89158 6.68891L5.03278 9.27839C4.79393 9.97472 4.66374 10.7222 4.66374 11.5C4.66383 12.3442 4.81675 13.153 5.09728 13.8992Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M22.7992 9.35168C22.9312 10.0473 23.0001 10.7658 23.0001 11.5C23.0001 12.3234 22.9135 13.1265 22.7486 13.9011C22.1888 16.5373 20.726 18.8392 18.6996 20.4681L18.699 20.4675L15.4177 20.3001L14.9533 17.4011C16.2979 16.6125 17.3488 15.3784 17.9023 13.9011H11.7529V9.35168H17.992H22.7992Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M18.6989 20.4675L18.6996 20.4682C16.7288 22.0523 14.2253 23.0001 11.5001 23.0001C7.12061 23.0001 3.31298 20.5522 1.37061 16.9499L5.09737 13.8993C6.06853 16.4912 8.56884 18.3363 11.5001 18.3363C12.76 18.3363 13.9404 17.9957 14.9532 17.4011L18.6989 20.4675Z"
                      fill="#28B446"
                    />
                    <path
                      d="M18.8402 2.64752L15.1147 5.69753C14.0665 5.0423 12.8273 4.66379 11.4998 4.66379C8.50221 4.66379 5.95514 6.5935 5.03262 9.27834L1.28627 6.21126H1.28564C3.19959 2.52115 7.05523 0 11.4998 0C14.2901 0 16.8486 0.993941 18.8402 2.64752Z"
                      fill="#F14336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_434_175">
                      <rect width="23" height="23" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex">
                <Button label="Google" className={`${buttonStyle}`} />
              </div>
            </div>
            <div className="w-[168px] cursor-pointer flex justify-center py-[4px] left-[5292] rounded-[5px] bg-klightGrey hover:bg-klightGreyHover transition-all">
              <div className="border-r px-3 h-8 py-2 my-1">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2.13092C21.1819 2.49231 20.3101 2.73185 19.4012 2.84815C20.3363 2.286 21.0499 1.40262 21.3854 0.337846C20.5136 0.861231 19.5511 1.23092 18.5254 1.43723C17.6976 0.549693 16.5179 0 15.2309 0C12.7339 0 10.7236 2.04092 10.7236 4.54292C10.7236 4.90292 10.7539 5.24908 10.8281 5.57862C7.0785 5.39446 3.76063 3.58477 1.53175 0.828C1.14262 1.50785 0.914375 2.286 0.914375 3.12369C0.914375 4.69662 1.71875 6.09092 2.91775 6.89815C2.19313 6.88431 1.48225 6.67246 0.88 6.33877C0.88 6.35262 0.88 6.37062 0.88 6.38862C0.88 8.59569 2.44337 10.4289 4.4935 10.8512C4.12637 10.9523 3.72625 11.0008 3.311 11.0008C3.02225 11.0008 2.73075 10.9842 2.45712 10.9232C3.0415 12.7218 4.69975 14.0442 6.6715 14.0871C5.137 15.2958 3.18863 16.0242 1.07938 16.0242C0.7095 16.0242 0.35475 16.0075 0 15.9618C1.99787 17.2592 4.36562 18 6.919 18C15.2185 18 19.756 11.0769 19.756 5.076C19.756 4.87523 19.7491 4.68139 19.7395 4.48892C20.6346 3.84923 21.3867 3.05031 22 2.13092Z"
                    fill="#03A9F4"
                  />
                </svg>
              </div>
              <div className="flex">
                <Button label="Twitter" className={`${buttonStyle}`} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
