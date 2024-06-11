"use client";

import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { EmailFormInput } from "../molecules/input/emailFormInput/EmailFormInput";
import { PasswordFormInput } from "../molecules/input/passwordFormInput/PasswordFormInput";
import { LoginButton } from "../atoms/loginButton/LoginButton";

export const LoginForm = () => {

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
          <PasswordFormInput />
        </Box>
        <Flex justifyContent="flex-end" marginTop="8">
          <Link href="">
            <Text as="b" color="blue.500">
              パスワードを忘れた場合はこちら
            </Text>
          </Link>
        </Flex>
        <Box marginTop="8" marginBottom="8">
          <LoginButton />
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
