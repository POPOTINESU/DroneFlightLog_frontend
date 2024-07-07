import { CardHeader, Heading } from "@chakra-ui/react";
import React from "react";

export const SignUpHeader = () => {
  return (
    <CardHeader>
      <Heading as="h1" size="lg" p={2}>
        新規会員登録
      </Heading>
    </CardHeader>
  );
};
