import React from "react";
import { Flex, Input, VStack } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/ui/forms/FormInputType";

export const FlightDateInputField = (props: FormInputType) => {
  return (
    <>
      <FormLabel htmlFor="flightDate" marginBottom="0">
        飛行日
      </FormLabel>
      <Field
        as={Input}
        id="flightDate"
        autoComplete="flightDate"
        placeholder="飛行日"
        size="sm"
        type="date"
        name="flightDate"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        validate={props.validate}
        width="70%"
      />
    </>
  );
};
