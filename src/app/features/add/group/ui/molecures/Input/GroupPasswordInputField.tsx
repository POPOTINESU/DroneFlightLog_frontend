import { FormInputType } from "@/app/shared/components/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field} from "formik";
import React from "react";

export const GroupPasswordInputField = (props: FormInputType) => {
  const { onChange, value, onBlur, validate } = props;
  return (
    <>
      <FormLabel htmlFor="GroupPassword">
        パスワード
        <Field
          as={Input}
          id="groupPassword"
          autoComplete="groupPassword"
          placeholder="password"
          size="lg"
          type="password"
          name="groupPassword"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
