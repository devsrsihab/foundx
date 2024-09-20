"use client";

import FXInput from "@/src/components/Form/FXInput";
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

  // form submit handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
    };

    console.log(postData);
  };

  // handle field array append
  const handleFieldAppent = () => {
    append({ name: "questions" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />

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
