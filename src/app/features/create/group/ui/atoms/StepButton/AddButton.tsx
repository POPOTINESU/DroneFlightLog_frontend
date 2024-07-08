import { Button } from "@chakra-ui/react";
import React from "react";

type AddButtonTypes = {
  push: (value: {
    droneNumber: string;
    JUNumber: string;
    purchaseDate: string;
  }) => void;
};

export const AddButton = (props: AddButtonTypes) => {
  const { push } = props;
  return (
    <Button
      onClick={() =>
        push({
          droneNumber: "",
          JUNumber: "",
          purchaseDate: "",
        })
      }
      colorScheme="blue"
    >
      追加
    </Button>
  );
};
