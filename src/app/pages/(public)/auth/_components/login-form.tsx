"use client";
import React, { useState } from "react";
import Button from "../../../../components/button";
import { useFormik } from "formik";
import { toast } from "sonner";
import { loginSchema } from "../schema/loginSchema";
import { useRouter } from "next/navigation";
import { loginUser } from "../_service/login";
import Link from "next/link";
import { Titles } from "@/app/components/Titles";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Pinput } from "@/app/components/pinput";
import { Input } from "@/app/components/input";
import { getUser } from "../_service/user-info";
import SocialAuths from "./socials-auth";

const LoginForm = () => {
  const router = useRouter();

  const buttonSign =
    "bg-gradient-to-r text-white from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700 w-full text-white z-50   rounded-lg h-[45px] px-[22px]";
  const inputStyle =
    "border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-[350px]  outline-none py-[12px] px-[28px] dark:bg-klightGrey rounded-[5px] my-[10px]";
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnMount:false,
    validateOnChange:false,
    validateOnBlur:true,
    onSubmit: async (values) => {
      setIsLoading(true);
      const response = await loginUser({
        email: values.email,
        password: values.password,
      });

      setIsLoading(false);

      if (response.succes == false) {
        toast.error(`${response.message}`);
        if (response.message.includes("verified")) {
          setTimeout(() => {
            router.replace("/pages/verifyAccount");
          }, 1300);
        }
        return;
      }

      toast.success("Login Succesful 🥳");
      await getUser(response.uidb64!)
      setTimeout(() => {
        router.replace("../dashboard");
      }, 1000);
    },
  });

  return (
    <div>
      <div className="w-[359px] max-w-[90vw]   rounded-[1px]">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Titles title="Login" TitleStyle="md:text-[48px] text-[38px] mb-4" />
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Input
              error={formik.errors.email}
                type="text"
                name="email"
                useLabel={false}
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="relative space-y-2">
              <Pinput
              placeholder="password"
              name="password"
              onChange={formik.handleChange}
              error={formik.errors.password}
              value={formik.values.password}
              ></Pinput>

              <div className="flex text-klight">
                <Link href={"../password-reset-link"} target="_blank">
                  <span className="black:hover:text-white hover:text-black transition-all absolute text-[14px] right-3 -bottom-[13px] ">
                    Forgot password ?
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-3 my-4 mt-6 justify-center items-center  w-full ">
            <Button
              label="Login"
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

export default LoginForm;
