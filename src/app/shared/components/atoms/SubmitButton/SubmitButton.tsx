import { Button } from "@chakra-ui/react";
import { type } from "os";
import React from "react";

type  SubmitButtonProps = {
  buttonName: string;
}
export const SubmitButton = (props:SubmitButtonProps) => {
  const { buttonName } = props;
  return (
    <Button type="submit" width="100%" colorScheme="blue">
      {buttonName}
    </Button>
  );
};
