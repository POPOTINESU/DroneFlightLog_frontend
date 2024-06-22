import { FormInputType } from "@/app/shared/components/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

export const LastNameInput = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="lastName" marginBottom="0">
        名字
        <Field
          as={Input}
          id="lastName"
          autoComplete="lastName"
          placeholder="山田"
          size="lg"
          type="text"
          name="lastName"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
