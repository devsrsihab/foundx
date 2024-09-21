"use client";

import FXDatePicker from "@/src/components/Form/FXDatePicker";
import FXInput from "@/src/components/Form/FXInput";
import FXSelect from "@/src/components/Form/FXSelect";
import dateToISO from "@/src/utils/dateToIso";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const Page = () => {
  // define methods
  const methods = useForm();

  // destructure methods needed object
  const { control, handleSubmit } = methods;

  // init usefieldarray obj
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  // all city options
  const cityOptions = allDistict()
    .sort()
    .map((city: string) => ({ key: city, label: city }));

  // form submit handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
      foundDate: dateToISO(data.foundDate),
    };

    console.log(postData);
  };

  // handle field array append
  const handleFieldAppent = () => {
    append({ name: "questions" });
  };

  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-20 py-12">
      <h1 className="text-2xl font-semibold">Post a found item</h1>
      <Divider className="my-5" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title and found date */}
          <div className="flex flex-wrap gap-4 py-2">
            <div className="min-w-fit flex-1">
              <FXInput name="title" label="Title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker name="foundDate" label="Found Date" />
            </div>
          </div>
          {/* location and city */}
          <div className="flex flex-wrap gap-4 py-2">
            <div className="min-w-fit flex-1">
              <FXInput name="location" label="Location" />
            </div>
            <div className="min-w-fit flex-1">
              <FXSelect options={cityOptions} name="city" label="City" />
            </div>
          </div>

          <Divider className="my-5" />
          <div className="flex justify-between items-center">
            <h2 className="text-2xl ">Owner Verification Questions</h2>
            <Button onClick={() => handleFieldAppent()} radius="none">
              Add Question
            </Button>
          </div>

          {/* field loopt */}
          <div className="space-y-3 my-5">
            {fields.map((field, index) => (
              <div className="flex gap-3 items-center" key={field.id}>
                <FXInput name={`questions.${index}.value`} label="Question" />
                <Button onClick={() => remove(index)} className="bg-red-500 ">
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <Button className="mt-5" radius="none" type="submit">
            Create
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;
