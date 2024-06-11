import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel, Text } from "@chakra-ui/react";

type EmailFormInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export const EmailFormInput = (props:EmailFormInputProps) => {
  const { onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };
  
  return (
    <>
      <FormLabel marginBottom="0">
        <Text as="b">メールアドレス</Text>
      </FormLabel>
      <Input id="email" placeholder="メールアドレス" size="lg" onChange={handleChange}/>
    </>
  );
};
