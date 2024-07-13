import { FormInputType } from "@/app/shared/ui/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";


export const PasswordConfirmFormInput = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="password">確認用パスワード
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
