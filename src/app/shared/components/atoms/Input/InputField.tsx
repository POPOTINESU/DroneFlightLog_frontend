import React from 'react'
import { Input } from '@chakra-ui/react';
import { type } from 'os';

type InputFieldProps = {
  placeholder?: string;
  size?: string;
  type?: string;
  width?: string;
}

export const InputField = (props:InputFieldProps) => {
  const { placeholder, size, type, width } = props;
  return (
    <Input placeholder={placeholder} size={size} type={type} width={width}/>
  )
}
