import { Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { FormInputType } from "../../FormInputType";


export const EmailField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <Field
        as={Input}
        id="email"
        autoComplete="email"
        placeholder="example@mail.com"
        size="lg"
        type="email"
        name="email"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        validate={validate}
      />
    </>
  );
};
