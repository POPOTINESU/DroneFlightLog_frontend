import { Button } from "@chakra-ui/react";
import React from "react";

type DeleteButtonTypes = {
  remove: (index: number) => void;
  values: any;
};

export const DeleteButton = (props: DeleteButtonTypes) => {
  const { remove, values } = props;
  return (
    <Button onClick={() => remove(values.sets.length - 1)} colorScheme="red">
      削除
    </Button>
  );
};
