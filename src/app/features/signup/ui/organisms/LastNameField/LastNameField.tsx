import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { LastNameInput } from "../../molecules/Input/LastName/LastNameInput";
import { lastNameValidate } from "./validation/lastNameValidate";
import { LastNameInputType } from "./type/LastNameFieldType";

export const LastNameField = (props: LastNameInputType) => {
  const { handleChange, handleBlur, values, errors, touched } = props;
  return (
    <FormControl isInvalid={!!errors.lastName && touched.lastName}>
      <LastNameInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName ?? ''}
        validate={lastNameValidate}
      />
      {errors.lastName ? (
        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
      ) : (
        <Box height={7}></Box>
      )}
    </FormControl>
  );
};