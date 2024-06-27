import { Button } from "@chakra-ui/react";
import React from "react";

type NextStepButtonProps = {
  isSubmitting: boolean;
  handleSubmit: () => void;
};

export const NextStepButton = (props: NextStepButtonProps) => {
  const { isSubmitting, handleSubmit } = props;
  return (
    <Button
      width="100%"
      type="submit"
      colorScheme="blue"
      mt={4}
      isLoading={isSubmitting}
      onClick={() => handleSubmit()}
    >
      次へ
    </Button>
  );
};
