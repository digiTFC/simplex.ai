"use client";
import { Input } from "@/app/components/input";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Titles } from "@/app/components/Titles";
import { passwordResetSchema } from "../../_schema/password-test-schema";
import MotionButton from "../../../_components/motion-button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { passwordReset } from "../../_service/password-reset";
import { Pinput } from "@/app/components/pinput";

export interface PasswordResetPageParams {
  token: string;
  uuid: string;
}

export default function PasswordResetPage({ params }: { params: Promise<PasswordResetPageParams> }) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  
  const { token, uuid } = React.use(params);


  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: passwordResetSchema,
    onSubmit: async (values) => {
          const data = {password:values.password, confirm_password:values.confirm_password}
          const params = {uuid:uuid, token:token}
      setLoading(true);
        const response = await passwordReset(data,params)
        toast.info(response.message)
        
     
        setLoading(false);
        // Perform the actual password reset logic here
     // You can replace this with your actual reset logic
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
        <Pinput
          name="password"
          type="password"
          placeholder="Password"
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.password}
        />


        <Pinput
        className="min-w-[320px]"
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
        />
      </div>

      <div className="w-[320px] flex justify-center relative">
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


