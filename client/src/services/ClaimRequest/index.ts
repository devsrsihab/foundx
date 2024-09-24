'use server'
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (formData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/claim-request", formData);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};