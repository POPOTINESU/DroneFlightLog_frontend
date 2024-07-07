import { FormInputType } from "@/app/shared/ui/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

export const FirstNameInput = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="firstName" marginBottom="0">
        名前
        <Field
          as={Input}
          id="firstName"
          autoComplete="firstName"
          placeholder="太郎"
          size="lg"
          type="text"
          name="firstName"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
