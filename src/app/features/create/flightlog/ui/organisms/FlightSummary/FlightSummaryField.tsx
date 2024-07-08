import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { FlightSummaryInputField } from "../../molecules/FlightSummaryInputField";
import { flightSummaryFieldTypes } from "./types/flightSummaryFieldTypes";
import { validateFlightSummary } from "./validation/validateFlightSummary";

export const FlightSummaryField = (props: flightSummaryFieldTypes) => {
  const { handleChange, handleBlur, values, errors } = props;
  return (
    <FormControl>
      <FlightSummaryInputField
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.flightSummary}
        validate={validateFlightSummary}
      />
      <FormErrorMessage>{errors.flightSummary}</FormErrorMessage>
    </FormControl>
  );
};
