import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MulchEmailFieldTypes } from "./type/MulchEmailFieldType";

export const MulchEmailField = (props: MulchEmailFieldTypes) => {
  const { values, errors, touched, handleChange, handleBlur } = props;
  return (
    <FormControl isInvalid={!!errors.emails && touched.emails}>
      <FormLabel htmlFor="emails" marginBottom="0">
        招待するユーザーのメールアドレス
      </FormLabel>
      <Textarea
        name="emails"
        value={values.emails ?? ""}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="複数入力の場合は、改行で入力してください"
        rows={5}
        resize="none"
      />
      <FormErrorMessage>{errors.emails}</FormErrorMessage>
    </FormControl>
  );
};
