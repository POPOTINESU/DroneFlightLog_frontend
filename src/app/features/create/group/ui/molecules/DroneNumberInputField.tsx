import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/components/forms/FormInputType";

export const DroneNumberInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="droneNumber" marginBottom="0">
        製造番号
        <Field
          as={Input}
          id="droneNumber"
          autoComplete="droneNumber"
          placeholder="製造番号"
          size="md"
          type="droneNumber"
          name="droneNumber"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
