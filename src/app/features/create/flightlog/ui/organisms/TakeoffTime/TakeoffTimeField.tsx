import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { TakeOffTimeInputField } from "../../molecules/TakeOffTimeInputField";
import { validateFlightDate } from "./validation/validateFlightDate";
import { takeoffTimeFieldTypes } from "./types/takeoffTimeFieldTypes";

export const TakeoffTimeField = (props: takeoffTimeFieldTypes) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    props;
  return (
    <FormControl isInvalid={!!errors.takeOffTime && touched.takeOffTime}>
      <TakeOffTimeInputField
        onBlur={handleBlur}
        onChange={(e) => {
          handleChange(e);
          setFieldValue("takeOffTime", e.target.value);
        }}
        value={values.takeOffTime}
        validate={validateFlightDate}
      />
      <FormErrorMessage>{errors.takeOffTime}</FormErrorMessage>
    </FormControl>
  );
};
