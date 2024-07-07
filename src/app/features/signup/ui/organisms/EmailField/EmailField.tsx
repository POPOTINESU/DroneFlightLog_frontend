import { EmailFormInput } from "@/app/shared/ui/forms/emailFormInput/EmailFormInput";
import { emailValidate } from "@/app/shared/validation/emailValidate";
import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { emailFieldType } from "./type/emailFieldType";

export const EmailField = (props: emailFieldType) => {
  const { handleChange, handleBlur, values, errors, touched } = props;
  return (
    <FormControl isInvalid={!!errors.email && touched.email}>
      <EmailFormInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email ?? ""}
        validate={emailValidate}
      />
      {errors.email ? (
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      ) : (
        <Box height={7}></Box>
      )}
    </FormControl>
  );
};
