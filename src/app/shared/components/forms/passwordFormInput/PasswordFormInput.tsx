import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { FormInputType } from '../FormInputType';

export const PasswordFormInput = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="password">パスワード
      <Field
        as={Input}
        id="password"
        autoComplete="current-password"
        placeholder="password"
        size="lg"
        type="password"
        name="password"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        validate={validate}
      />
      </FormLabel>
    </>
  );
};
