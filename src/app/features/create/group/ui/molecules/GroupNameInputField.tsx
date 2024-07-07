import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/ui/forms/FormInputType";

export const GroupNameInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="groupName" marginBottom="0">
        グループ名
        <Field
          as={Input}
          id="groupName"
          autoComplete="groupName"
          placeholder="グループ名"
          size="md"
          type="groupName"
          name="groupName"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
