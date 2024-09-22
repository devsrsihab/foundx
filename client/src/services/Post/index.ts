"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createPost = async (formData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("GET_POSTS");

    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
