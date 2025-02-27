import React, { useState } from "react";
import { Input } from "../../../../../components/general-components/input";
import Button from "../../../../../components/general-components/button";
import { useFormik } from "formik";
import { paymentScheme } from "@/app/pages/(protected)/subscriptions/[paiment]/scheme/paymentScheme";
import { toast } from "sonner";
import subscriptionChoice from "@/app/pages/(protected)/subscriptions/_service/subscription-choice";
import { Titles } from "../../../../../components/general-components/Titles";

interface paiementFormProprs {
  price: number;
  subscriptionId: number;
}

export const PaiementForm: React.FC<paiementFormProprs> = ({
  price,
  subscriptionId,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    toast.success("Payment Succesful");
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      phone_number: "",
      mm_yy: "",
      cvc: "",
      name: "",
      country: "",
      adress: "",
    },
    validationSchema: paymentScheme,
    onSubmit: (values) => {
      setIsLoading(true);
      subscriptionChoice(subscriptionId, values.phone_number);
      console.log("click");
      setTimeout(login, 2000);
    },
  });

  const tva = price * 0.2;
  const total = price + tva;
  return (
    <div className="text-white">
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <Titles
            title="Payment Details"
            subTitle="Complete your purchase by providing payment details"
          ></Titles>
        </div>

        <div className="space-y-3 mt-4 ">
          <div className="relative">
            <Input
              placeholder="0000 0000 0000 0000"
              label="Card Number"
              value={formik.values.phone_number}
              error={formik.errors.phone_number}
              name="phone_number"
              type="number"
              onChange={formik.handleChange}
            ></Input>
          </div>

          <div className="grid-cols-2 grid gap-4  my-2">
            <div className="w-fit relative">
              <Input
                placeholder="00/00"
                label="mm/yy"
                type="number"
                value={formik.values.mm_yy}
                error={formik.errors.mm_yy}
                name="mm_yy"
                onChange={formik.handleChange}
              />

              <div className="font-thin text-khr bg-klightGrey pt-2n absolute right-5 bottom-[50%] translate-y-[100%] z-50">
                MM/YY
              </div>
            </div>
            <div className="w-fit relative">
              <Input
                placeholder="000"
                label="cvc"
                type="number"
                value={formik.values.cvc}
                error={formik.errors.cvc}
                name="cvc"
                onChange={formik.handleChange}
              />
              <div className="font-thin text-khr bg-klightGrey pt-2n absolute right-5 bottom-[50%] translate-y-[100%] z-50">
                CVC
              </div>
            </div>
          </div>
          <Input
            placeholder="Jonh Doe"
            value={formik.values.name}
            error={formik.errors.name}
            label="Cardholder Name"
            name="name"
            onChange={formik.handleChange}
          ></Input>
          <div className="grid md:grid-cols-2 gap-4  my-4">
            <Input
              placeholder="Cameroon"
              label="Country"
              value={formik.values.country}
              error={formik.errors.country}
              name="country"
              onChange={formik.handleChange}
            ></Input>
            <Input
              placeholder="Douala, Logpom"
              value={formik.values.adress}
              error={formik.errors.adress}
              label="Adress"
              name="adress"
              onChange={formik.handleChange}
            ></Input>
          </div>


        </div>

        <div className="w-[380px] px-8 mt-8  py-2 rounded-md  border border-klight border-dashed">
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span>${price.toFixed(2)}</span>
            </div>
            <div className="flex my-3 justify-between">
              <span>TVA(0.7)</span>
              <span>${tva.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

        <div className="w-fit text-center mt-10 flex flex-col">
          <div className="relative">
            <Button
              className="bg-gradient-to-br from-kpink to-kpurple  rounded h-[44px] w-[380px] focus:w-[375px]"
              isLoading={isLoading}
              onClick={() => formik.submitForm()}
              label={isLoading ? "Processing..." : `Pay ${total.toFixed(2)}$`}
            ></Button>
          </div>
          <span className="text-klight text-[12px]">
            Payments are encrypted and secured
          </span>
        </div>
      </form>
    </div>
  );
};
