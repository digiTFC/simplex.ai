"use client";
import { Input } from "@/app/components/general-components/input";
import React from "react";
import MotionButton from "../_components/motion-button";
import { useFormik } from "formik";
import { passwordResetSchema } from "./_schema/password-test-schema";
import { Titles } from "@/app/components/general-components/Titles";

const ResetPassword = () => {
  // const [loading,isLoading] = useState()

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: passwordResetSchema,
    onSubmit: () => {},
  });

  return (
    <div className="">
      <Titles
        title="Reset Your Password"
        TitleStyle="!text-[34px]"
        subtitleStyle="!text-[16px] !text-khr "
        subTitle="Enter your new password before login"
      ></Titles>
      <div className="flex flex-col gap-4 mt-8">
        <Input
          name="password"
          type="password"
          placeholder="Password"
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
        />
      </div>

      <div className="w-[375px] flex justify-center relative">
        <MotionButton
          label="Verify"
          isLoading={false}
          onclick={formik.submitForm}
          condition={
            formik.values.password.length < 8 ||
            formik.values.password !== formik.values.confirm_password
          }
        ></MotionButton>
      </div>
    </div>
  );
};

export default ResetPassword;
