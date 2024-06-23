import { FormInputType } from "@/app/shared/components/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

export const GroupIDInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="groupID" marginBottom="0">
        グループID
        <Field
          as={Input}
          id="groupID"
          autoComplete="groupID"
          placeholder="GroupID"
          size="lg"
          type="text"
          name="groupID"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
