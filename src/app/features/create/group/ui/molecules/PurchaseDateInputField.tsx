import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/ui/forms/FormInputType";

export const PurchaseDateInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="purchaseDate" marginBottom="0">
        機体購入日
        <Field
          as={Input}
          id="purchaseDate"
          autoComplete="purchaseDate"
          size="md"
          type="date"
          name="purchaseDate"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
