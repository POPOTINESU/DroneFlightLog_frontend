import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { FirstNameInput } from "../../molecules/Input/FistName/FirstNameInput";
import { firstNameValidate } from "./validation/firstNameValidate";
import { firstNameFieldType } from "./type/firstNameFieldType";

export const FirstNameField = (props: firstNameFieldType) => {
  const { handleChange, handleBlur, values, errors, touched } = props;
  return (
    <FormControl isInvalid={!!errors.firstName && touched.firstName}>
      <FirstNameInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName ?? ""}
        validate={firstNameValidate}
      />
      {errors.firstName ? (
        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
      ) : (
        <Box height={7}></Box>
      )}
    </FormControl>
  );
};
