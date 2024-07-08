import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { PurchaseDateInputField } from "../../molecules/PurchaseDateInputField";

type PurchaseDateTypes = {
  index?: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PurchaseDateField = (props: PurchaseDateTypes) => {
  const { index, handleChange } = props;
  return (
    <Box>
      <Field name={`sets[${index}].purchaseDate`}>
        {({ field, form, meta }: any) => (
          <FormControl isInvalid={meta.touched && !!meta.error}>
            <PurchaseDateInputField
              {...field}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                form.setFieldValue(field.name, e.target.value);
              }}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};
