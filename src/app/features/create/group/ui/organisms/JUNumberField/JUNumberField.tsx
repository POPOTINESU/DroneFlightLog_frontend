import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { JUNumberInputField } from "../../molecules/JUNumberInputField";

type JUNumberFieldTypes = {
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const JUNumberField = (props: JUNumberFieldTypes) => {
  const { index, handleChange } = props;
  return (
    <Box>
      <Field name={`sets[${index}].JUNumber`}>
        {({ field, form, meta }: any) => (
          <FormControl isInvalid={meta.touched && !!meta.error}>
            <JUNumberInputField
              {...field}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                form.setFieldValue(field.name, e.target.value);
              }}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};
