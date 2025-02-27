"use client";
import React, { useState } from "react";
import Button from "../../../components/general-components/button";
import { useFormik } from "formik";
import { toast } from "sonner";
import { registerSchema } from "@/app/pages/auth/schema/registerSchema";
import { registerUser } from "../_service/register";
import { useRouter } from "next/navigation";
import { Titles } from "@/app/components/general-components/Titles";
import { Pinput } from "@/app/components/general-components/pinput";
import { Input } from "@/app/components/general-components/input";
import { FcGoogle } from "react-icons/fc";
import SocialAuths from "./socials-auth";

const RegisterForm = () => {
  const router = useRouter();
  const buttonSign =
    "bg-gradient-to-r text-white from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700 w-full text-white z-50  rounded-lg h-[45px] px-[22px]";
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      organization_name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    validationSchema: registerSchema,
    validateOnMount: false,
    validateOnBlur: true, // Validate on blur
    validateOnChange: false, //
    onSubmit: async (values) => {
      setIsLoading(true);
      const response = await registerUser({
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        organization_name: values.organization_name,
        password: values.password,
        password_confirm: values.password_confirm,
      });
      if (response.succes) {
        toast.success("SignUp Sucessfull ✅");
        router.replace("../verifyAccount");
      } else {
        toast.error(response.message);
      }

      setIsLoading(false);
    },
  });

  return (
    <div>
      <div className="w-[375px]  rounded-[1px]">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Titles title="Register" TitleStyle="text-[48px]" />
          </div>
          <div className="pt-[12px] space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="first_name"
                placeholder="First Name"
                useLabel={false}
                error={formik.errors.first_name}
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
              <Input
                type="text"
                name="last_name"
                placeholder="Last Name"
                useLabel={false}
                error={formik.errors.last_name}
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </div>
            <Input
              type="text"
              name="email"
              placeholder="Your Email"
              useLabel={false}
              error={formik.errors.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Input
              type="text"
              useLabel={false}
              error={formik.errors.organization_name}
              name="organization_name"
              placeholder="Organization Name"
              onChange={formik.handleChange}
              value={formik.values.organization_name}
            />
            <Pinput
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
            />
            <Pinput
              type="password"
              name="password_confirm"
              placeholder="Repeat Password"
              onChange={formik.handleChange}
              value={formik.values.password_confirm}
              error={formik.errors.password_confirm}
            />
          </div>
          <div className="flex gap-3 my-4 mt-8 justify-center items-center  w-full ">
            <Button
              label="Signup Now"
              isLoading={isLoading}
              className={`${buttonSign} w-full `}
              onClick={() => formik.submitForm()}
            />
            <div className="border-r h-[30px] border-gray-400"></div>
            <SocialAuths></SocialAuths>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
