import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel, Text } from "@chakra-ui/react";

export const EmailFormInput = () => {
  return (
    <>
      <FormLabel marginBottom="0">
        <Text as="b">メールアドレス</Text>
      </FormLabel>
      <Input id="email" placeholder="メールアドレス" size="lg" />
    </>
  );
};
