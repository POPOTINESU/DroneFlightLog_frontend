import { FormInputType } from "@/app/shared/components/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

export const LandingTimeInputField = (props: FormInputType) => {
  return (
    <>
      <FormLabel htmlFor="landingTime" marginBottom="0">
        着陸時刻
        <Field
          as={Input}
          type="time"
          id="landingTime"
          autoComplete="landingTime"
          placeholder="着陸時刻"
          size="sm"
          name="landingTime"
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          validate={props.validate}
        />
      </FormLabel>
    </>
  );
};
