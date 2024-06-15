import { Button } from "@chakra-ui/react";
import React from "react";
import { login } from "../../../api/login";

export const LoginButton = () => {
  const handleLogin = () => {

  };
  return (
    <Button size="lg" width="100%" colorScheme="blue" type="submit" onClick={handleLogin}>
      ログイン
    </Button>
  );
};
