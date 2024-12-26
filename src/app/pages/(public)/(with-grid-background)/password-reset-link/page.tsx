"use client";
import Button from "@/app/components/general-components/button";
import { Input } from "@/app/components/general-components/input";
import React, { useState } from "react";
import { useFormik } from "formik";
import { resetPasswordScheme } from "./_schema/reset-password-schema";
import resetPassword from "./_service/reset-password";
import { motion } from "framer-motion";

const ResetPasswordLink = () => {
  const [loading, setLoading] = useState<boolean>();

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
  return (
    <>
      <div className="text-center">
        <h1 className="text-[34px]">
          {loading == false ? "Reset Link Sent" : "Enter Your Email Adrees"}
        </h1>
        <h1 className="text-khr">
          {loading == false
            ? "Reset Your password and try to login"
            : "We will send you a reset link"}
        </h1>
      </div>
      {
        <motion.div
          initial={{ height: "fit-content" }}
          animate={loading != false ? { height: "fit-content" } : { height: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
          className={` overflow-hidden pt-8 `}
        >
          <Input
            name="email"
            type="text"
            placeholder="Your Email Adress..."
            useLabel={false}
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <div className="w-[375px] flex justify-center relative">
            <Button
              label="Reset"
              isLoading={loading}
              onClick={formik.handleSubmit}
              className={`${
                formik.errors.email
                  ? " w-fit px-3 bg-t text-khr border border-khr !cursor-disabled"
                  : "text-black bg-white"
              } w-[375px]  duration-3000 transition-all z-50  mt-5  h-[44px]  font-semibold rounded-lg`}
            ></Button>
          </div>
        </motion.div>
      }
    </>
  );
};

export default ResetPasswordLink;
