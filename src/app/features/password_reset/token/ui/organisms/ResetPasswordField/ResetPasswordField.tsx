import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";

interface Props {
  name: string;
  label: string;
}

export const ResetPasswordField = ({ name, label }: Props) => (
  <Field name={name}>
    {({ field, form }: { field: any, form: any }) => (
      <FormControl isInvalid={form.errors[name] && form.touched[name]}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input {...field} id={name} type="password" />
        {form.errors[name] && form.touched[name] && (
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        )}
      </FormControl>
    )}
  </Field>
);