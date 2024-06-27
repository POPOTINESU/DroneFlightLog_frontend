import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/components/forms/FormInputType";

export const JUNumberInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="JUNumber" marginBottom="0">
        機体識別番号
        <Field
          as={Input}
          id="JUNumber"
          autoComplete="JUNumber"
          placeholder="JU〇〇〇〇〇〇〇〇〇〇"
          size="md"
          type="JUNumber"
          name="JUNumber"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
