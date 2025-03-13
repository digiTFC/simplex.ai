import Button from "@/app/components/button";
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
      onClick={onclick}
      initial={{ width: "fit-content" }}
      animate={condition ? { width: "fit-content" } : { width: 350 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
      }}
      className={`${
        condition
          ? " w-fit  bg-t text-khr border border-khr"
          : "dark:text-black text-white dark:bg-white bg-black"
      }  flex  justify-center cursor-pointer  mt-5  h-[44px]  font-semibold rounded-lg`}
    >
      <Button
        label={label}
        isLoading={isLoading}
        loadindIsWhite={false}
        className="mx-3"
      ></Button>
    </motion.div>
  );
};

export default MotionButton;
