import Button from "@/app/components/general-components/button";
import { motion } from "framer-motion";
import React from "react";

interface MotionButtonProps {
  condition: boolean;
  isLoading: boolean;
  onclick?: () => void;
  label: string;
}

const MotionButton: React.FC<MotionButtonProps> = ({
  condition,
  label,
  isLoading,
  onclick,
}) => {
  return (
    <motion.div
      initial={{ width: "fit-content" }}
      animate={condition ? { width: "fit-content" } : { width: 375 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
      }}
      className={`${
        condition
          ? " w-fit  bg-t text-khr border border-khr"
          : "text-black bg-white"
      }  flex  justify-center   mt-5  h-[44px]  font-semibold rounded-lg`}
    >
      <Button
        label={label}
        isLoading={isLoading}
        onClick={onclick}
        loadindIsWhite={false}
        className="mx-3"
      ></Button>
    </motion.div>
  );
};

export default MotionButton;
