import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { TotalTimeInputField } from "../../molecules/TotalTimeInputField";

type totalTimeFieldTypes = {
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
  isManualInput: any;
};

const validateFlightDate = (value: string) => {
  if (!value) {
    return "Required";
  }
  return "";
};

export const TotalTimeField = (props: totalTimeFieldTypes) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    isManualInput,
  } = props;
  return (
    <FormControl isInvalid={!!errors.totalTime && touched.totalTime}>
      <TotalTimeInputField
        onBlur={handleBlur}
        onChange={(e) => {
          handleChange(e);
          setFieldValue("totalTime", e.target.value);
          isManualInput.current = true;
        }}
        value={values.totalTime}
        validate={validateFlightDate}
      />
      <FormErrorMessage>{errors.totalTime}</FormErrorMessage>
    </FormControl>
  );
};
