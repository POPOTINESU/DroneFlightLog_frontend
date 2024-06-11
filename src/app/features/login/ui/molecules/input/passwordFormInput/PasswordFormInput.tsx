import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export const PasswordFormInput = () => {
  return (
    <>
      <FormLabel>パスワード</FormLabel>
      <Input id="password" placeholder="password" size="lg" type="password" />
    </>
  );
};
