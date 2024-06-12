import React from "react";
import { Input } from "@chakra-ui/react";
import { FormLabel, Text } from "@chakra-ui/react";

type EmailFormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value:string;
};

export const EmailFormInput = (props:EmailFormInputProps) => {
  const { onChange } = props;
  //Form内のコンポーネントなのでonChangeは不要
  return (
    <>
      <FormLabel htmlFor="email"  marginBottom="0">
        メールアドレス
      
      <Input
        id='email'
        autoComplete="email"
        placeholder="メールアドレス"
        size="lg"
        type="email"
        name="email"
        onChange={(e) => {onChange(e)}}
        value={props.value}
      />
      </FormLabel>
    </>
  );
};
