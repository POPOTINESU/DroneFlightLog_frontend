import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { LandingTimeInputField } from "../../molecules/LandingTimeInputField";
import { validateFlightDate } from "./validation/validateFlightDate";
import { landingTimeFieldTypes } from "./types/landingTimeFieldTypes";

export const LandingTimeField = (props: landingTimeFieldTypes) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    props;
  return (
    <FormControl isInvalid={!!errors.landingTime && touched.landingTime}>
      <LandingTimeInputField
        onBlur={handleBlur}
        onChange={(e) => {
          handleChange(e);
          setFieldValue("landingTime", e.target.value);
        }}
        value={values.landingTime}
        validate={validateFlightDate}
      />
      <FormErrorMessage>{errors.landingTime}</FormErrorMessage>
    </FormControl>
  );
};
