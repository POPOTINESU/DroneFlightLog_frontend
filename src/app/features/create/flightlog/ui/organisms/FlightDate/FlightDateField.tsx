import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { FlightDateInputField } from "../../molecules/FlightDateInputField";
import { FlightDateTypes } from "./types/flightDateTypes";
import { validateFlightDate } from "./validation/validateFlightDate";



export const FlightDateField = (props: FlightDateTypes) => {
  const { handleChange, handleBlur, values, errors, touched } = props;
  return (
    <FormControl isInvalid={!!errors.flightDate && touched.flightDate}>
      <FlightDateInputField
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.flightDate}
        validate={validateFlightDate}
      />
      <FormErrorMessage>{errors.flightDate}</FormErrorMessage>
    </FormControl>
  );
};
