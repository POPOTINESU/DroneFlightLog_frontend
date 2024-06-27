import { Button } from "@chakra-ui/react";
import React from "react";

type PrevStepButtonProps = {
  handlePrevStep: () => void;
};

export const PrevStepButton = (props: PrevStepButtonProps) => {
  const { handlePrevStep } = props;
  return (
    <Button width="100%" colorScheme="gray" onClick={handlePrevStep}>
      戻る
    </Button>
  );
};
