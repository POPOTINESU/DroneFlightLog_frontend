"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { EmailFormInput } from "../molcules/input/emailFormInput/EmailFormInput";

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const isError = password === "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Center height="100vh">
      <FormControl width="80%" padding="4">
        <Heading size="2xl" textAlign="center" marginBottom="20">
          ログイン
        </Heading>
        <Box marginBottom="8">
          <EmailFormInput />
        </Box>
        <Box>
          <FormLabel marginBottom="0">
            <Text as="b">パスワード</Text>
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="パスワード"
            size="lg"
            value={password}
            onChange={handleInputChange}
          />
          {!isError ? (
            <>
            </>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </Box>
        <Flex justifyContent="flex-end" marginTop="8">
          <Link href="">
            <Text as="b" color="blue.500">
              パスワードを忘れた場合はこちら
            </Text>
          </Link>
        </Flex>
        <Box marginTop="8" marginBottom="8">
          <Button size="lg" width="100%" colorScheme="blue" type="submit" >
            ログイン
          </Button>
        </Box>
        <Divider orientation="horizontal" />
        <Flex justifyContent="center" marginTop="8">
          <Link href="">
            <Text as="b" color="blue.500">
              新規登録はこちら
            </Text>
          </Link>
        </Flex>
      </FormControl>
    </Center>
  );
};
