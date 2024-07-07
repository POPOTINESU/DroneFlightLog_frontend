import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from '../FormInputType';
import { EmailField } from "./atoms/EmailField";



export const EmailFormInput = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="email" marginBottom="0">
        メールアドレス
        <EmailField 
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        validate={validate}
        />
      </FormLabel>
    </>
  );
};
