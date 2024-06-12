import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type PasswordFormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value:string;
};

export const PasswordFormInput = (props:PasswordFormInputProps) => {
  const { onChange, value } = props;
  return (
    <>
      <FormLabel htmlFor="password">パスワード</FormLabel>
      <Input
        id='password'
        autoComplete="current-password"
        placeholder="password"
        size="lg"
        type="password"
        name="password"
        onChange={(e) => {onChange(e)}}
        value={value}
      />
    </>
  );
};
