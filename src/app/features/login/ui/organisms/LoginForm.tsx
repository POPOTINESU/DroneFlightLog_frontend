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
import { useFormik } from "formik";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Center height="100vh">
      <FormControl width="80%" padding="4">
        <Heading size="2xl" textAlign="center" marginBottom="20">
          ログイン
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <Box marginBottom="8">
            <EmailFormInput
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Box>
          <Box>
            <PasswordFormInput
              onChange={formik.handleChange}
              value={formik.values.password}
            />
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
        </form>
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
