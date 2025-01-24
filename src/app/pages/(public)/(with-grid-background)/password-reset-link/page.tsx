"use client";
import Button from "@/app/components/general-components/button";
import { Input } from "@/app/components/general-components/input";
import React, { useState } from "react";
import { useFormik } from "formik";
import { resetPasswordScheme } from "./_schema/reset-password-schema";
import resetPassword from "./_service/reset-password";
import { motion } from "framer-motion";

const ResetPasswordLink = () => {
  const [loading, setLoading] = useState<boolean | undefined>(undefined);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetPasswordScheme,
    onSubmit: async (values) => {
      setLoading(true);
      await resetPassword(values.email);
      setLoading(false);
    },
  });

  const isSubmitDisabled = formik.errors.email || formik.values.email.length < 1;

  return (
    <>
      <div className="text-center">
        <h1 className="text-[34px] text-black">
          {loading === false ? "Reset Link Sent" : "Enter Your Email Address"}
        </h1>
        <h2 className="text-khr">
          {loading === false
            ? "Reset your password and try to login"
            : "We will send you a reset link"}
        </h2>
      </div>

      <motion.div
        initial={{ height: "fit-content" }}
        animate={loading !== undefined ? { height: "fit-content" } : { height: 0 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="overflow-hidden pt-8"
      >
        <Input
          name="email"
          type="text"
          placeholder="Your Email Address..."
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <div className="w-[375px] flex justify-center relative">
          <Button
            label="Reset"
            isLoading={loading === true}
            onClick={formik.handleSubmit}
            className={`${
              isSubmitDisabled
                ? "w-fit px-3 bg-gray-200 opacity-50 text-khr border border-khr cursor-not-allowed"
                : "text-white bg-black hover:bg-gray-800"
            } w-[375px] transition-all duration-300 z-50 mt-5 h-[44px] font-semibold rounded-lg`}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ResetPasswordLink;
