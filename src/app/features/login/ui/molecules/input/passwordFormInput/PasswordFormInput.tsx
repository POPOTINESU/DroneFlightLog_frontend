import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

type PasswordFormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  validate: (value: string) => string | undefined;
};

export const PasswordFormInput = (props: PasswordFormInputProps) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="password">パスワード</FormLabel>
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
    </>
  );
};
