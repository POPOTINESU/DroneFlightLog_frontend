import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Field } from "formik";

type EmailFormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  validate: (value: string) => string | undefined;
};

export const EmailFormInput = (props: EmailFormInputProps) => {
  const { onChange, value, onBlur, validate } = props;
  //Form内のコンポーネントなのでonChangeは不要
  return (
    <>
      <FormLabel htmlFor="email" marginBottom="0">
        メールアドレス
        <Field
          as={Input}
          id="email"
          autoComplete="email"
          placeholder="メールアドレス"
          size="lg"
          type="email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          validate={validate}
        />
      </FormLabel>
    </>
  );
};
