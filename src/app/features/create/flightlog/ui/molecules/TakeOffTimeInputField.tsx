import { FormInputType } from "@/app/shared/ui/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

export const TakeOffTimeInputField = (props: FormInputType) => {
  return (
    <>
      <FormLabel htmlFor="takeOffTime" marginBottom="0">
        飛行時間
        <Field
          as={Input}
          type="time"
          id="takeOffTime"
          autoComplete="takeOffTime"
          placeholder="飛行時間"
          size="sm"
          name="takeOffTime"
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          validate={props.validate}
        />
      </FormLabel>
    </>
  );
};
