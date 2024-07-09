import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { DroneNumberInputField } from "../../molecules/DroneNumberInputField";
import { DroneNumberFieldTypes } from './type/type DroneNumberFieldTypes';



export const DroneNumberField = (props: DroneNumberFieldTypes) => {
  const { index, handleChange, handleBlur, validateField } = props;
  return (
    <Box>
      <Field name={`sets[${index}].droneNumber`}>
        {({ field, form, meta }: any) => (
          <FormControl isInvalid={meta.touched && !!meta.error}>
            <DroneNumberInputField
              {...field}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                form.setFieldValue(field.name, e.target.value);
              }}
              onBlur={async (e: React.FocusEvent<HTMLInputElement>) => {
                handleBlur(e);
                await validateField(field.name);
              }}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};
