"use client";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: "text" | "email" | "password" | "number";
  name: string;
  label: string;
}

const FXInput = ({
  variant = "bordered",
  size = "lg",
  required = false,
  type = "text",
  name,
  label,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();


  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : '' }
      isInvalid={!!errors[name]}
      type={type}
      required={required}
      variant={variant}
      size={size}
      name={name}
      label={label}
    />
  );
};

export default FXInput;
