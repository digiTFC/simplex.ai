"use client";
import { Input } from "@/app/components/general-components/input";
import React, { useState } from "react";
import MotionButton from "../_components/motion-button";
import { useFormik } from "formik";
import { passwordResetSchema } from "./_schema/password-test-schema";
import { Titles } from "@/app/components/general-components/Titles";

const ResetPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: passwordResetSchema,
    onSubmit: async () => {
      setLoading(true);
      // Simulate a password reset process
      setTimeout(() => {
        setLoading(false);
        // Perform the actual password reset logic here
      }, 2000); // You can replace this with your actual reset logic
    },
  });

  return (
    <div className="center flex-col">
      <Titles
        title="Reset Your Password"
        TitleStyle="!text-[34px]"
        subtitleStyle="!text-[16px] !text-khr"
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
        {formik.errors.password && formik.touched.password && (
          <span className="text-red-500">{formik.errors.password}</span>
        )}

        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
        />
        {formik.errors.confirm_password && formik.touched.confirm_password && (
          <span className="text-red-500">{formik.errors.confirm_password}</span>
        )}
      </div>

      <div className="w-[375px] flex justify-center relative">
        <MotionButton
          label="Verify"
          isLoading={loading}
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
