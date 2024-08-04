import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/ui/forms/FormInputType";

export const InspectionDateInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="inspectionDate" marginBottom="0">
        点検日
        <Field
          as={Input}
          id="inspectionDate"
          autoComplete="inspectionDate"
          placeholder="グループ名"
          size="md"
          type="date"
          name="inspectionDate"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
